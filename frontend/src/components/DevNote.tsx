import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import NextLink from 'next/link';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import PortImage from '../image/portfolio.jpg';
import Port2Image from '../image/portfolio2.jpg';
import AptImage from '../image/aptImage.jpg';
import { MdCheckCircle } from 'react-icons/md';
function DevNote(props: any) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isSmallScreen] = useMediaQuery('(min-width:750px)');

  return (
    <>
      <Box mt={30} p={30}>
        <Text fontSize="3xl" fontWeight="bold">
          Dev Note
        </Text>
      </Box>

      <Box w="80%">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>(주)카피앤패이스트</Tab>
            <Tab>(주)에코플래그</Tab>
            <Tab>(주)알티모빌리티</Tab>
            <Tab>개인프로젝트</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Accordion allowMultiple allowToggle mb={2}>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>EPC Cloud IoT Portal 구축 프로젝트 - 케이티</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="gray"
                            >
                              AngularJS
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              Spring Framework
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          EPC Cloud IoT Portal 구축 프로젝트
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="gray"
                          >
                            AngularJS
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            Spring Framework
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2020.09 ~ 2020.11
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        애자일 방법론 프로젝트
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        CI/CD 방식의 DevOps 진행 - SonarQube, Nexus, Docker,
                        Jenkins, GitHub
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Slack, Trello 이용하여 업무 소통 및 협력
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>TV Coupon 서비스 고도화 - 케이티하이텔</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              Spring Framework
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          TV Coupon 서비스 고도화
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            Spring Framework
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2020.07 ~ 2020.09
                    </Text>

                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        서비스 연동방식 변경으로 인한 Proxy API Gateway 구축
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        간편결제 시스템 구축
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        신규 쿠폰 발급 서비스 구축
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>
                            마이크로템플릿 WEBAPP Service 고도화 - 케이티하이텔
                          </Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              Javascript
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          마이크로템플릿 WEBAPP Service 고도화
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            Javascript
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2020.06 ~ 2020.09
                    </Text>

                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        상용 서비스중인 STB APP 마케팅 수신동의 정책 변경으로
                        인한 고도화
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        UI 및 STB KeyEvent 수정
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        신규 API 연동 개발
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} textAlign="left" flex="1">
                          <Box>
                            Oauth2 / Vue.js 이용한 사내 로그인 서비스 솔루션
                            구축 - 내부과제
                          </Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="cyan"
                            >
                              VueJs
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          Oauth2 / Vue.js 이용한 사내 로그인 서비스 솔루션 구축
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="cyan"
                          >
                            VueJs
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2020.03 ~ 2020.05
                    </Text>

                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        로그인 서버 개발로 인한 Oauth2방식 로그인 서비스 구축
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        로그인이 필요한 프로젝트에 구축할 수 있도록 솔루션 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        인증토큰 발급 및 Page redirect
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} textAlign="left" flex="1">
                          <Box>GolfZone Matrixview 서비스 개발 - 골프존</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="teal"
                            >
                              Android
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="telegram"
                            >
                              C
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="telegram"
                            >
                              NDK
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          GolfZone Matrixview 서비스 개발
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="teal"
                          >
                            Android
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="telegram"
                          >
                            C
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="telegram"
                          >
                            NDK
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2019.6 ~ 2019.11
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        기존 타임슬라이스 기능을 전체 수정. 스트리머 제거,
                        카메라 인코더 개수 단축 및 영상편집툴 변경, 파일규격
                        변경
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        수정된 내용에 따른 Android APP Streaming Service 구축
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Android Stream Library 개발 참여 NDK를 이용한 C언어 파일
                        스트리밍 Library 개발
                      </ListItem>

                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        현재 ‘GolfZon 안성’에서 서비스 진행중
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} textAlign="left" flex="1">
                          <Box>Freeview 서비스 개발 - 케이티</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              Spring Framework
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="purple"
                            >
                              Netty
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          Freeview 서비스 개발
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            Spring Framework
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="purple"
                          >
                            Netty
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2018.12 ~ 2019.03
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        KT WIZ 야구단 야구경기 멀티 뷰 촬영 상용화를 위한
                        Streaming Service 안정화 및 API 서버 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Shell Script를 이용한 CMS 연동 Streaming Server 안정화
                        장치 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        CMS 간소화 및 Wizzap 연동으로 인한 API 재구성 및 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        2019년 3월 29일 ~ 현재까지 상용 후 촬영 일 기준 일당 400
                        ~ 500회 접속
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} textAlign="left" flex="1">
                          <Box>
                            인터렉티브 타임슬라이스 서비스 고도화 - 케이티
                          </Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              Spring Framework
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="purple"
                            >
                              Netty
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          인터렉티브 타임슬라이스 서비스 고도화
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            Spring Framework
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="purple"
                          >
                            Netty
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2018.06 ~ 2018.10
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        자카르타 아시안게임 배드민턴, 농구 경기에 멀티 뷰 촬영
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Streaming Service Server Programe 개발 및 유지보수,
                        API서버 개발 및 유지보수
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Server Program Web BackEnd 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        해외 출장(인도네시아 자카르타)
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} textAlign="left" flex="1">
                          <Box>인터렉티브 멀티뷰 서비스 고도화 - 케이티</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              Spring Framework
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="purple"
                            >
                              Netty
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          인터렉티브 멀티뷰 서비스 고도화
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            Spring Framework
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="purple"
                          >
                            Netty
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2017.12 ~ 2018.03
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        평창 올림픽 쇼트트랙 멀티 뷰 촬영에 대한 Streaming
                        service Server Program 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        RTSP 통신 이용하여 UDP Socket Frame Transmission
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Server Program 개발(JAVA, Netty Socket)
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} textAlign="left" flex="1">
                          <Box>
                            OTT Telebee 통합관리 시스템 구축 및 개발 -
                            (주)알티캐스트
                          </Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              Spring Framework
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="gray"
                            >
                              AngularJS
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="facebook"
                            >
                              JQuery
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          OTT Telebee 통합관리 시스템 구축 및 개발
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            Spring Framework
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="gray"
                          >
                            AngularJS
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="facebook"
                          >
                            JQuery
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2017.03 ~ 2017.09
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Web FrontEnd, BackEnd 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        GitLab, Sourcetree를 이용한 Project 관리
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        구글docs를 이용한 Test Case 및 결함관리 작성 공유, 개발
                        중 Client 요구사항에 대한 내용 정리 후 내용 전달 및
                        개발적용
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} textAlign="left" flex="1">
                          <Box>MSMS 개발 및 운영 용역 - 케이티하이텔</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="telegram"
                            >
                              C#/ASP
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blackAlpha"
                            >
                              MSSQL
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          MSMS 개발 및 운영 용역
                        </Box>
                      )}

                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="telegram"
                          >
                            C#/ASP
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blackAlpha"
                          >
                            MSSQL
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2016.11 - 2018.12
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        C#/ASP, Windows Server 2008, IIS, MS-SQL
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        2018년 3월 정 책임자 유지보수 및 운영
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion allowMultiple allowToggle mb={2}>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>
                            사물인터넷 기반 상수관망 수질 및 수량 저전력 계측
                            시스템 개발
                          </Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="orange"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              ReactJS
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          사물인터넷 기반 상수관망 수질 및 수량 저전력 계측
                          시스템 개발
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="orange"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            ReactJS
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2021.07 - 2021.08
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        JIRA를 이용한 애자일 Scrum 관리
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Jenkins 자동배포 관리
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        ERD, API 설계
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>
                            수돗물 수질 이상여부 진단 키트 개발 및
                            비상운전(수계전환 등) 시 안전한 수돗물 공급을 위한
                            연계관로 운영지원시스템 구축
                          </Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="facebook"
                            >
                              eGovFramework
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JPA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="cyan"
                            >
                              PostgreSQL
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="orange"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              ReactJS
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          수돗물 수질 이상여부 진단 키트 개발 및
                          비상운전(수계전환 등) 시 안전한 수돗물 공급을 위한
                          연계관로 운영지원시스템 구축
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="facebook"
                          >
                            eGovFramework
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JPA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="cyan"
                          >
                            PostgreSQL
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="orange"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            ReactJS
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2021.04 - 2021.07
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        개발 진행 중 인계받아 개발 마무리 진행
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Full Stack 개발 진행
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>아쿠아유나이티드 4.0 시스템 개발</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              SpringBoot
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JPA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="cyan"
                            >
                              PostgreSQL
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="orange"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              ReactJS
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          아쿠아유나이티드 4.0 시스템 개발
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            SpringBoot
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JPA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="cyan"
                          >
                            PostgreSQL
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="orange"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            ReactJS
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2021.04 - 2021.06
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        개발 진행 중 인계받아 개발 마무리 진행
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Full Stack 개발 진행
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>물정보앱(Smart Water Grid) - 내부과제</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="facebook"
                            >
                              eGovFramework
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JPA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="cyan"
                            >
                              PostgreSQL
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="orange"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              ReactJS
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          물정보앱(Smart Water Grid)
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="facebook"
                          >
                            eGovFramework
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JPA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="cyan"
                          >
                            PostgreSQL
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="orange"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            ReactJS
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2021.03 - 2021.06
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        ERD설계, API설계, API구축, Web페이지 구축 진행
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        내부과제로 1인 개발, 1인 교육 프로젝트로 신입사원 교육과
                        같이 진행
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Full Stack 개발 진행
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>배출영향분석 표준 프로그램 유지관리(2021)</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="telegram"
                            >
                              C#
                            </Tag>

                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blackAlpha"
                            >
                              MSSQL
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          배출영향분석 표준 프로그램 유지관리(2021)
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="telegram"
                          >
                            C#
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blackAlpha"
                          >
                            MSSQL
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2020.11 ~ 2021.03
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        C# Windows Forms 을 사용한 프로그램 유지관리
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        고객 요청사항에 맞게 수정 및 배포(InstallShield)
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>전국오염원조사 DB 및 웹 시스템 구축(4)</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="facebook"
                            >
                              JQuery
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="facebook"
                            >
                              eGovFramework
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          전국오염원조사 DB 및 웹 시스템 구축(4)
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="facebook"
                          >
                            JQuery
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="facebook"
                          >
                            eGovFramework
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2020.11 ~ 2021.03
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        전국오염원조사 홈페이지 (https://wems.nier.go.kr)
                        유지보수 및 고도화
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion allowMultiple allowToggle mb={2}>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>
                            Raidea Car Sharing Admin Page 개발 및 유지보수
                          </Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              ReactJS
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="orange"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              Redux
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              AntDesign
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          Raidea Car Sharing Admin Page 개발 및 유지보수
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            ReactJS
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="orange"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            Redux
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            AntDesign
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2021.12 ~ (진행중)
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        참여 인원 : 6명
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        React 기반 CS-Admin Page 개발 및 유지보수
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Redux 활용을 위한 Code Refactoring
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Agile Scrum
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>
                            MSA 기반 B/E 대응을 위한 BFF Service 개발 및
                            유지보수
                          </Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="yellow"
                            >
                              TypeScript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="purple"
                            >
                              Lerna
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          포트폴리오 웹 페이지 개발
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="yellow"
                          >
                            TypeScript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="purple"
                          >
                            Lerna
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2021.12 ~ (진행중)
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        참여 인원 : 6명
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        MSA Service 대응을 위한 BFF Service 개발 및 유지보수
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Typescript 기반 Lerna 이용하여 Mono-Repo 구현
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion allowMultiple allowToggle mb={2}>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>아파트 홍보 페이지</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              ReactJS
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="orange"
                            >
                              Javascript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              SpringBoot
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          아파트 홍보 페이지
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            ReactJS
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="orange"
                          >
                            Javascript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            SpringBoot
                          </Tag>
                        </Box>
                      </HStack>
                    )}

                    <Image src={AptImage}></Image>
                    <Text fontSize="xl" mb={3}>
                      2021.09 ~ 2021.10(진행중)
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        참여 인원 : 1명
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Chakra UI Component를 이용하여 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        아파트 입주민 소통을 위한 카카오톡, 네이버카페 가입 유도
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        http://chsong.iptime.org:9000/aptInfo/main
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>포트폴리오 웹 페이지 개발</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              ReactJS
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="yellow"
                            >
                              TypeScript
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="gray"
                            >
                              express
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="purple"
                            >
                              NoSQL
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          포트폴리오 웹 페이지 개발
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            ReactJS
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="yellow"
                          >
                            TypeScript
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="gray"
                          >
                            express
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="purple"
                          >
                            NoSQL
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2021.07 ~ 2021.10(진행중)
                    </Text>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        참여 인원 : 2명
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Chakra UI Component를 이용하여 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        NodeJS express 이용하여 서버 구성 및 모듈화 진행
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>업비트 오토 트레이딩 프로그램 개발</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="blue"
                            >
                              ReactJS
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="gray"
                            >
                              express
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="linkedin"
                            >
                              Electron
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="cyan"
                            >
                              PostgreSQL
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          업비트 오토 트레이딩 프로그램 개발
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="blue"
                          >
                            ReactJS
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="gray"
                          >
                            express
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="linkedin"
                          >
                            Electron
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="cyan"
                          >
                            PostgreSQL
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2021.04 ~ 2021.05
                    </Text>
                    <Image src={Port2Image}></Image>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        참여 인원 : 1명
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Upbit Open API 연동
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        사용자의 key를 입력받아 정보를 가져 온 후 수치를
                        입력하여 Auto Trading 진행
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Electron을 사용하여 윈도우 프로그램으로 제작
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor={isDark ? 'gray.600' : 'gray.100'}
                      _expanded={{
                        bg: isDark ? 'gray.500' : 'gray.200',
                        color: isDark ? 'white' : 'gray.700',
                      }}
                    >
                      {isSmallScreen ? (
                        <HStack spacing={1} flex="1" textAlign="left">
                          <Box>출퇴근 체크 프로그램</Box>
                          <Box>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="red"
                            >
                              JAVA
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="pink"
                            >
                              Spring Framework
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="whatsapp"
                            >
                              MySQL
                            </Tag>
                            <Tag
                              ml={1}
                              size={'sm'}
                              key={'sm'}
                              variant="solid"
                              colorScheme="teal"
                            >
                              Android
                            </Tag>
                          </Box>
                        </HStack>
                      ) : (
                        <Box flex="1" textAlign="left">
                          출퇴근 체크 프로그램
                        </Box>
                      )}
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    {isSmallScreen ? (
                      ''
                    ) : (
                      <HStack spacing={1}>
                        <Box>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="red"
                          >
                            JAVA
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="pink"
                          >
                            Spring Framework
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="whatsapp"
                          >
                            MySQL
                          </Tag>
                          <Tag
                            ml={1}
                            size={'sm'}
                            key={'sm'}
                            variant="solid"
                            colorScheme="teal"
                          >
                            Android
                          </Tag>
                        </Box>
                      </HStack>
                    )}
                    <Text fontSize="xl" mb={3}>
                      2018.05 ~ 2018.06
                    </Text>
                    <Image src={PortImage}></Image>
                    <List>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        참여 인원 : 1명
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Kakao Developer 연동, Open API 사용
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        출퇴근 정보를 저장할 수 있는 앱 개발
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        백앤드 서버, 안드로이드 UI 개발 및 DB 연동
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default DevNote;
