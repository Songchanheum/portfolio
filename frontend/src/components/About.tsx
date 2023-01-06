import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Text } from '@chakra-ui/react';

function About(props: any) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isSmallScreen] = useMediaQuery('(min-width:750px)');
  return (
    <>
      <Box
        mb={20}
        borderRadius="3xl"
        w="80%"
        backgroundColor={isDark ? 'gray.800' : 'gray.200'}
      >
        <Text mt={50} fontSize="4xl" align="center" fontWeight="bold">
          {' '}
          여기까지 읽어주셔서 정말 감사드립니다!
        </Text>
        <Text mt={10} fontSize="2xl" align="center">
          {' '}
          열정을 부을 인재입니다.
        </Text>
        <Text mt={5} mb={20} fontSize="xl" align="center">
          {' '}
          궁금하신 내용이나 문의사항은 bsk9212@gmail.com 혹은 010-4100-7802로
          연락 주시면 상세히 답변 드리겠습니다!
        </Text>
      </Box>
      <Box h="20px"></Box>
    </>
  );
}

export default About;
