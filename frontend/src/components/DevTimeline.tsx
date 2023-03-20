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
import TimelineElement from './common/TimelineElement';

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
          <TimelineElement
            color="rgb(0,200,200)"
            date="2011.3 - 2017.2"
            icon={<FaUniversity />}
            h3="안양대학교"
            h4="정보통신공학과"
            plist={[
              '안양대학교 정보통신공학과 졸업',
              '특이사항 : 학생복지위원회 가입하여 대내 복지에 힘씀',
            ]}
            position="left"
          />
          <TimelineElement
            color="rgb(16, 204, 82)"
            date="2016.11"
            icon={<GiHand />}
            h3="(주)카피앤패이스트"
            h4="사원"
            plist={['(주)카피앤패이스트 입사']}
            position="right"
          />
          <div
            onMouseOver={() => setCnp(true)}
            onMouseOut={() => setCnp(false)}
          >
            <TimelineElement
              color="rgb(237, 165, 169)"
              date="2016.11 - 2018.11"
              icon={<FaBuilding />}
              h3="(주)카피앤패이스트"
              h4="사원"
              plist={[
                '2018.06 ~ 2018.10 인터렉티브 타임슬라이스 시스템 개발',
                '2018.03 ~ 2018.05 PPV채널 멀티뷰 서비스 시스템 구축',
                '2017.09 ~ 2018.03 인터렉티브 멀티뷰 서비스 고도화',
                '2017.03 ~ 2017.09 Telebee 구축 및 개발',
                '2017.01 ~ 2017.04 캐리앤TV VOD연계형 데이터서비스 개발',
                '2016.12 ~ 2017.03 인터렉티브 타임슬라이스 서비스 개발',
                '2016.11 ~ 2018.12 MSMS 개발 및 운영 용역',
              ]}
              position="left"
              display={cnp || !isSmallScreen}
            />
          </div>

          <TimelineElement
            color="rgb(16, 204, 82)"
            date="2018.11"
            icon={<GiHand />}
            h3="(주)카피앤패이스트"
            h4="대리"
            plist={['대리 진급']}
            position="right"
          />
          <div
            onMouseOver={() => setCnp1(true)}
            onMouseOut={() => setCnp1(false)}
          >
            <TimelineElement
              color="rgb(237, 165, 169)"
              date="2018.11 - 2020.11"
              icon={<FaBuilding />}
              h3="(주)카피앤패이스트"
              h4="대리"
              plist={[
                '2020.09 ~ 2020.11 EPC Cloud IoT Portal 구축 프로젝트',
                '2020.07 ~ 2020.09 TVCoupon 서비스 고도화',
                '2020.06 ~ 2020.09 마이크로템플릿 WEBAPP Service 고도화',
                '2020.03 ~ 2020.05 Oauth2 / Vue.js 이용한 사내 로그인 서비스 솔루션 개발',
                '2019.04 ~ 2019.11 GolfZone Matrixview 서비스 개발',
                '2018.12 ~ 2019.03 Freeview 서비스 개발',
              ]}
              position="left"
              display={cnp1 || !isSmallScreen}
            />
          </div>
          <TimelineElement
            color="rgb(233, 30, 99)"
            date="2020.11"
            icon={<GiHand />}
            h3="(주)카피앤패이스트"
            h4="대리"
            plist={['(주) 카피앤패이스트 퇴사']}
            position="right"
          />
          <TimelineElement
            color="rgb(16, 204, 82)"
            date="2020.11"
            icon={<GiHand />}
            h3="(주)에코플래그"
            h4="대리"
            plist={['(주)에코플래그 입사']}
            position="right"
          />
          <div
            onMouseOver={() => setEco(true)}
            onMouseOut={() => setEco(false)}
          >
            <TimelineElement
              color="rgb(33, 150, 243)"
              date="2020.11 ~ 2021.11"
              icon={<FaBuilding />}
              h3="(주)카피앤패이스트"
              h4="대리"
              plist={[
                '2021.08 - 2021.08 ASM 시스템 개발',
                '2021.07 - 2021.08 사물인터넷 기반 상수관망 수질 및 수량 저전력 계측 시스템 개발',
                '2021.04 - 2021.07 수돗물 수질 이상여부 진단 키트 개발 및 비상운전(수계전환 등) 시 안전한 수돗물 공급을 위한 연계관로 운영지원시스템 구축',
                '2021.04 - 2021.06 아쿠아유나이티드 4.0 시스템 개발',
                '2021.03 - 2021.06 물정보앱(Smart Water Grid) - 내부과제',
                '2020.12 - 2021.08 배출영향분석 표준 프로그램 유지관리(2021)',
                '2020.11 - 2021.03 전국오염원조사 DB 및 웹 시스템 구축(4)',
              ]}
              position="left"
              display={eco || !isSmallScreen}
            />
          </div>
          <TimelineElement
            color="rgb(233, 30, 99)"
            date="2021.11"
            icon={<GiHand />}
            h3="(주)에코플래그"
            h4="대리"
            plist={['(주)에코플래그 퇴사']}
            position="right"
          />
          <TimelineElement
            color="rgb(16, 204, 82)"
            date="2021.12"
            icon={<GiHand />}
            h3="(주)알티캐스트"
            h4="연구원"
            plist={['(주)알티캐스트 입사', '(주)알티모빌리티 로 사명 변경']}
            position="right"
          />
          <div
            onMouseOver={() => setAlti(true)}
            onMouseOut={() => setAlti(false)}
          >
            <TimelineElement
              color="rgb(33, 150, 243)"
              date="2021.12 ~ "
              icon={<FaBuilding />}
              h3="(주)알티캐스트 -> (주)알티모빌리티"
              h4="연구원"
              plist={[
                '2021.12 - (진행중) Raidea Car Sharing Admin Page 개발 및 유지보수',
                '2021.12 - (진행중) MSA 기반 B/E 대응을 위한 BFF Service 개발 및 유지보수',
              ]}
              position="left"
              display={alti || !isSmallScreen}
            />
          </div>
        </VerticalTimeline>
      </Box>
    </>
  );
}

export default DevTimeline;
