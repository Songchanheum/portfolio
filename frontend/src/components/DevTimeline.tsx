import { Box, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';

import React, { useState } from 'react';
import {
  FaBeer,
  FaUniversity,
  FaRegBuilding,
  FaBuilding,
} from 'react-icons/fa';
import { GiHand, GiUpCard } from 'react-icons/gi';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function DevTimeline() {
  const { colorMode } = useColorMode();
  const [cnp, setCnp] = useState(false);
  const [cnp1, setCnp1] = useState(false);
  const [eco, setEco] = useState(false);
  const [alti, setAlti] = useState(false);
  const isDark = colorMode === 'dark';
  const [isSmallScreen] = useMediaQuery('(min-width:750px)');

  return (
    <>
      <Box mt={30} p={30}>
        <Text fontSize="3xl" fontWeight="bold">
          Dev Timeline
        </Text>
      </Box>
      <Box backgroundColor={isDark ? 'gray.800' : 'gray.300'} w="80%">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(0,200,200)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0,200,200)' }}
            date="2011.3 - 2017.2"
            iconStyle={{ background: 'rgb(0,200,200)', color: '#fff' }}
            icon={<FaUniversity />}
            position={'left'}
          >
            <h3 className="vertical-timeline-element-title">안양대학교</h3>
            <h4 className="vertical-timeline-element-subtitle">
              정보통신공학과
            </h4>
            <p>안양대학교 정보통신공학과 졸업</p>
            <p>특이사항 : 학생복지위원회 가입하여 대내 복지에 힘씀</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016.11"
            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<GiHand />}
            position={'right'}
          >
            <h3 className="vertical-timeline-element-title">
              (주)카피앤패이스트
            </h3>
            <h4 className="vertical-timeline-element-subtitle">사원</h4>
            <p>(주)카피앤패이스트 입사</p>
          </VerticalTimelineElement>
          <div
            onMouseOver={() => setCnp(true)}
            onMouseOut={() => setCnp(false)}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016.11 - 2018.11"
              contentStyle={{ background: 'rgb(237, 165, 169)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(237, 165, 169)',
              }}
              iconStyle={{ background: 'rgb(237, 165, 169)', color: '#fff' }}
              icon={<FaBuilding />}
            >
              <h3 className="vertical-timeline-element-title">
                (주)카피앤패이스트
              </h3>
              <h4 className="vertical-timeline-element-subtitle">사원</h4>
              <Box display={cnp || !isSmallScreen ? 'block' : 'none'}>
                <p>2018.06 ~ 2018.10 인터렉티브 타임슬라이스 시스템 개발</p>
                <p>2018.03 ~ 2018.05 PPV채널 멀티뷰 서비스 시스템 구축</p>
                <p>2017.09 ~ 2018.03 인터렉티브 멀티뷰 서비스 고도화</p>
                <p>2017.03 ~ 2017.09 Telebee 구축 및 개발</p>
                <p>2017.01 ~ 2017.04 캐리앤TV VOD연계형 데이터서비스 개발</p>
                <p>2016.12 ~ 2017.03 인터렉티브 타임슬라이스 서비스 개발</p>
                <p>2016.11 ~ 2018.12 MSMS 개발 및 운영 용역</p>
              </Box>
            </VerticalTimelineElement>
          </div>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020.11"
            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<GiUpCard />}
          >
            <h3 className="vertical-timeline-element-title">
              (주)카피앤패이스트
            </h3>
            <h4 className="vertical-timeline-element-subtitle">대리</h4>
            <p>대리 진급</p>
          </VerticalTimelineElement>
          <div
            onMouseOver={() => setCnp1(true)}
            onMouseOut={() => setCnp1(false)}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016.11 - 2018.11"
              contentStyle={{ background: 'rgb(237, 165, 169)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(237, 165, 169)',
              }}
              iconStyle={{ background: 'rgb(237, 165, 169)', color: '#fff' }}
              icon={<FaBuilding />}
              position={'left'}
            >
              <h3 className="vertical-timeline-element-title">
                (주)카피앤패이스트
              </h3>
              <h4 className="vertical-timeline-element-subtitle">대리</h4>
              <Box display={cnp1 || !isSmallScreen ? 'block' : 'none'}>
                <p>2020.09 ~ 2020.11 EPC Cloud IoT Portal 구축 프로젝트</p>
                <p>2020.07 ~ 2020.09 TVCoupon 서비스 고도화</p>
                <p>2020.06 ~ 2020.09 마이크로템플릿 WEBAPP Service 고도화</p>
                <p>
                  2020.03 ~ 2020.05 Oauth2 / Vue.js 이용한 사내 로그인 서비스
                  솔루션 개발
                </p>
                <p>2019.04 ~ 2019.11 GolfZone Matrixview 서비스 개발</p>
                <p>2018.12 ~ 2019.03 Freeview 서비스 개발</p>
              </Box>
            </VerticalTimelineElement>
          </div>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020.11"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GiHand />}
          >
            <h3 className="vertical-timeline-element-title">
              (주)카피앤패이스트
            </h3>
            <h4 className="vertical-timeline-element-subtitle">대리</h4>
            <p>(주) 카피앤패이스트 퇴사</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020.11"
            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<GiHand />}
            position={'right'}
          >
            <h3 className="vertical-timeline-element-title">(주)에코플래그</h3>
            <h4 className="vertical-timeline-element-subtitle">대리</h4>
            <p>(주) 에코플래그 입사</p>
          </VerticalTimelineElement>
          <div
            onMouseOver={() => setEco(true)}
            onMouseOut={() => setEco(false)}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020.11 ~ 2021.11"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FaBuilding />}
              position={'left'}
            >
              <h3 className="vertical-timeline-element-title">
                (주)에코플래그
              </h3>
              <h4 className="vertical-timeline-element-subtitle">대리</h4>

              <Box display={eco || !isSmallScreen ? 'block' : 'none'}>
                <p>2021.08 - 2021.08 ASM 시스템 개발</p>
                <p>
                  2021.07 - 2021.08 사물인터넷 기반 상수관망 수질 및 수량 저전력
                  계측 시스템 개발
                </p>
                <p>
                  2021.04 - 2021.07 수돗물 수질 이상여부 진단 키트 개발 및
                  비상운전(수계전환 등) 시 안전한 수돗물 공급을 위한 연계관로
                  운영지원시스템 구축
                </p>
                <p>2021.04 - 2021.06 아쿠아유나이티드 4.0 시스템 개발</p>
                <p>2021.03 - 2021.06 물정보앱(Smart Water Grid) - 내부과제</p>
                <p>
                  2020.12 - 2021.08 배출영향분석 표준 프로그램 유지관리(2021)
                </p>
                <p>2020.11 - 2021.03 전국오염원조사 DB 및 웹 시스템 구축(4)</p>
              </Box>
            </VerticalTimelineElement>
          </div>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021.11"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GiHand />}
            position={'right'}
          >
            <h3 className="vertical-timeline-element-title">(주)에코플래그</h3>
            <h4 className="vertical-timeline-element-subtitle">대리</h4>
            <p>(주)에코플래그 퇴사</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021.12"
            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<GiHand />}
            position={'right'}
          >
            <h3 className="vertical-timeline-element-title">(주)알티캐스트</h3>
            <h4 className="vertical-timeline-element-subtitle">연구원</h4>
            <p>(주) 알티캐스트 입사</p>
            <p>(주) 알티모빌리티 로 사명 변경</p>
          </VerticalTimelineElement>
          <div
            onMouseOver={() => setAlti(true)}
            onMouseOut={() => setAlti(false)}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021.12 ~ 현재"
              contentStyle={{ background: 'rgb(255, 66, 51)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(255, 66, 51)',
              }}
              iconStyle={{ background: 'rgb(255, 66, 51)', color: '#fff' }}
              icon={<FaBuilding />}
              position={'left'}
            >
              <h3 className="vertical-timeline-element-title">
                {'(주)알티캐스트 -> (주)알티모빌리티'}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">연구원</h4>

              <Box display={alti || !isSmallScreen ? 'block' : 'none'}>
                <p>
                  2021.12 - 2023.01(진행중) Raidea Car Sharing Admin Page 개발
                  및 유지보수
                </p>
                <p>
                  2021.12 - 2023.01(진행중) MSA 기반 B/E 대응을 위한 BFF Service
                  개발 및 유지보수
                </p>
              </Box>
            </VerticalTimelineElement>
          </div>
        </VerticalTimeline>
      </Box>
    </>
  );
}

export default DevTimeline;
