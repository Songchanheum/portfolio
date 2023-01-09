import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import NextLink from 'next/link';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  ListItem,
  Stack,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import ProfileImage from '../image/profile1.jpg';
import GohomeImage from '../image/gohome.gif';
import HomeImage from '../image/home.gif';
import OfficeImage from '../image/office.gif';
import DevTag from './common/DevTag';

function Profile() {
  const { colorMode } = useColorMode();
  const [isSmallScreen] = useMediaQuery('(min-width:1270px)');

  const isDark = colorMode === 'dark';
  const hour = new Date().getHours();
  return (
    <>
      <Flex
        direction={isSmallScreen ? 'row' : 'column'}
        w="100%"
        maxWidth={{ base: '100vh', md: '140vh', lg: '140vh', xl: '140vh' }}
      >
        <Box alignSelf="center" px="16" py="16">
          <Flex>
            <Heading fontWeight="extrabold" color="pink.700" size="4xl">
              7
            </Heading>
            <Text
              fontWeight="bold"
              color={isDark ? 'gray.200' : 'gray.500'}
              fontSize="4xl"
              p={2}
            >
              년차 개발자
            </Text>
          </Flex>
          <Text align="center" fontSize="2xl" color="gray.400">
            2016.11 ~ 현재까지
          </Text>
        </Box>
        <Box alignSelf="center" px="16" py="16">
          <Flex direction={isSmallScreen ? 'row' : 'column'}>
            <Heading fontWeight="semibold" color="purple.500" size="3xl">
              안양대학교
            </Heading>
            <Text
              alignSelf="flex-end"
              fontWeight="bold"
              color={isDark ? 'gray.200' : 'gray.500'}
              fontSize="4xl"
              p={2}
            >
              졸업
            </Text>
          </Flex>
          <Text align="center" fontSize="2xl" color="gray.400">
            정보통신공학과
          </Text>
        </Box>
        <Box alignSelf="center" px="16" py="16">
          <Heading fontWeight="semibold" color="red.300" size="2xl">
            Front-end 개발자
          </Heading>
          <Text align="center" fontSize="xl" color="gray.400">
            React, Vue, Angular
          </Text>
        </Box>
      </Flex>
      <Flex
        direction={isSmallScreen ? 'row' : 'column'}
        w="100%"
        maxWidth={{ base: '100vh', md: '100vh', lg: '100vh', xl: '100vh' }}
      >
        <Image
          borderRadius="3xl"
          display={isSmallScreen ? 'flex' : 'none'}
          zIndex="1"
          alignSelf="center"
          backgroundColor="transparent"
          w={150}
          h={200}
          src={ProfileImage}
        />
        <Flex direction="column">
          <Box alignSelf="center" w="100%">
            <Stack
              mb={1}
              mx={[0, 0, 10]}
              padding={4}
              align="start"
              borderLeft="5px solid"
              borderColor={'pink.200'}
              color={isDark ? 'white' : 'black'}
              _hover={{ shadow: 'lg' }}
              backgroundColor={isDark ? 'gray.800' : 'gray.100'}
              rounded="sm"
              fontSize="md"
            >
              <Text textAlign="center" color="pink.200" fontWeight="bold">
                Introduce
              </Text>
              <UnorderedList textAlign="left" paddingLeft={5} m={0}>
                <ListItem>1992년 12월 12일생 (만 28세)</ListItem>
                <ListItem>안양대학교 정보통신공학과 졸업(2017.02)</ListItem>
                <ListItem>7년차 Front-end 개발자 (2016.11 입사)</ListItem>
                <ListItem>새로운 도전을 좋아하는 열정이 넘치는 인재</ListItem>
              </UnorderedList>
            </Stack>
          </Box>
          <Box alignSelf="center" w="100%">
            <Stack
              mb={10}
              mx={[0, 0, 10]}
              padding={4}
              align="start"
              borderLeft="5px solid"
              borderColor={'pink.200'}
              color={isDark ? 'white' : 'black'}
              _hover={{ shadow: 'lg' }}
              backgroundColor={isDark ? 'gray.800' : 'gray.100'}
              rounded="sm"
              fontSize="md"
            >
              <Text textAlign="left" color="pink.200" fontWeight="bold">
                Tech Stack
              </Text>
              <Box>
                <DevTag color="gray" label="AngularJS" />
                <DevTag color="cyan" label="VueJs" />
                <DevTag color="blue" label="ReactJS" />
                <DevTag color="gray" label="express" />
                <DevTag color="linkedin" label="Electron" />
                <DevTag color="facebook" label="JQuery" />
                <DevTag color="orange" label="Javascript" />
                <DevTag color="yellow" label="TypeScript" />
                <DevTag color="red" label="JAVA" />
                <DevTag color="pink" label="Spring Framework" />
                <DevTag color="pink" label="SpringBoot" />
                <DevTag color="facebook" label="eGovFramework" />
                <DevTag color="telegram" label="C" />
                <DevTag color="telegram" label="NDK" />
                <DevTag color="telegram" label="C#/ASP" />
                <DevTag color="telegram" label="C#" />
                <DevTag color="whatsapp" label="MySQL" />
                <DevTag color="blackAlpha" label="MSSQL" />
                <DevTag color="red" label="Oracle" />
                <DevTag color="cyan" label="PostgreSQL" />
                <DevTag color="red" label="JPA" />
                <DevTag color="purple" label="NoSQL" />
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Flex>

      <Flex alignSelf="center">
        <Text fontSize="4xl" fontWeight="bold">
          {' '}
          현재 위치 :
        </Text>
        <Text ml={5} fontSize="4xl" fontWeight="bold" color="pink.700">
          {' '}
          {Number(hour) >= 8 && Number(hour) < 9
            ? '출근 중'
            : Number(hour) >= 9 && Number(hour) < 18
            ? '출근'
            : Number(hour) >= 18 && Number(hour) < 19
            ? '퇴근 중'
            : '퇴근'}{' '}
        </Text>
      </Flex>
      <Image
        ml={5}
        borderRadius="3xl"
        zIndex="1"
        alignSelf="center"
        backgroundColor="transparent"
        w={200}
        h={200}
        src={
          Number(hour) >= 8 && Number(hour) < 9
            ? GohomeImage
            : Number(hour) >= 9 && Number(hour) < 18
            ? OfficeImage
            : Number(hour) >= 18 && Number(hour) < 19
            ? GohomeImage
            : HomeImage
        }
      />
    </>
  );
}

export default Profile;
