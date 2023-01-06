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
                  colorScheme="cyan"
                >
                  VueJs
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
                  colorScheme="facebook"
                >
                  JQuery
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
                  colorScheme="yellow"
                >
                  TypeScript
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
                  colorScheme="facebook"
                >
                  eGovFramework
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
                  colorScheme="telegram"
                >
                  C#
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
                  colorScheme="blackAlpha"
                >
                  MSSQL
                </Tag>
                <Tag
                  ml={1}
                  size={'sm'}
                  key={'sm'}
                  variant="solid"
                  colorScheme="red"
                >
                  Oracle
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
                  colorScheme="red"
                >
                  JPA
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
