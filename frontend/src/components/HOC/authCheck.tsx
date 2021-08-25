import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProps } from 'react-router-dom';
import { loginCheck } from '../../api/auth';
import { useSelector } from '../../store';
import { loginActions } from '../../store/auth/login';
import { loadingActions } from '../../store/common/loading';

export default (
  Component: React.LazyExoticComponent<any>,
  pageAuthLevel: number,
) => {
  function AuthCheck(props: RouterProps) {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.userId);
    const userAuthLevel = useSelector(state => state.user.auth);
    const isLoading = useSelector(state => state.loading.loading);

    // pageAuthLevel 0 : 관리자만 접근 가능
    // pageAuthLevel 1 : 로그인한 사람만 접근 가능
    // pageAuthLevel 2 : 모두 접근 가능
    // pageAuthLevel 3 : 로그인한 사람은 접근 불가 (회원가입, 로그인페이지)
    useEffect(() => {
      if (pageAuthLevel < 2) {
        dispatch(loadingActions.start_loading());
        // 로그인이 필요한 페이지에 대해서만 로그인 체크 진행
        loginCheck()
          .then(response => {
            // 로그인 체크 성공
            // userAuthLevel 0 : 관리자
            // userAuthLevel 1 : 일반 유저
            const _userId = response.data.userId;
            const _authLv = response.data.authCd === 'A000001' ? 0 : 1;

            if (userId !== _userId || userAuthLevel !== _authLv) {
              dispatch(loginActions.logout()); // 스토어에 저장된 정보와 서버토큰의 유저정보가 다르면 즉시 로그아웃 처리
            } else {
              pageAuthLevel === 0 && _authLv !== 0 && props.history.push('/'); // 관리자가 아닐경우 메인화면으로 이동
            }
            dispatch(loadingActions.stop_loading());
          })
          .catch(e => {
            console.log(e);
            dispatch(loginActions.logout()); // 토큰 인증 실패시 즉시 로그아웃 처리
            dispatch(loadingActions.stop_loading());
          });
      } else {
        // 로그인이 필요하지 않은 페이지
        if (pageAuthLevel === 3 && userAuthLevel < 2) {
          props.history.push('/'); // 로그인한 유저일경우 메인화면으로 이동
        }
      }
    }, []);

    return isLoading ? <></> : <Component />;
  }

  return AuthCheck;
};
