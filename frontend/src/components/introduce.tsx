import React, {useState} from 'react'

import {useColorMode} from "@chakra-ui/color-mode";
import { Box, Circle, Flex, Icon, Image, Progress, Spacer, Stack, Text } from '@chakra-ui/react';
import {useMediaQuery} from '@chakra-ui/media-query';
import { useEffect } from "react";
import { MdSettings } from "react-icons/md"
import { AiOutlineDash } from "react-icons/ai"

import ProfileImage from "../image/profile.jpg";

function introduce() {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isSmallScreen] = useMediaQuery('(min-width:750px)');

    const [location, setLocation] = useState(1);
    useEffect(()=>{
        console.log(isSmallScreen);
    },[isSmallScreen])
    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
            <Flex
            direction={isSmallScreen ? "row" : "column"}
            spacing="200px" p={isSmallScreen ? "32" : "0"}
            alignSelf="flex-start"
            >
                <Box mt={isSmallScreen ? "0":16} align="flex-start">
                    <Text fontSize={isSmallScreen ? "5xl":"4xl"} fontWeight="semibold">
                        안녕하세요!
                    </Text>
                    <Flex>
                    <Text fontSize={isSmallScreen ? "7xl":"6xl"} fontWeight="bold" bgGradient="linear(to-r, pink.500, purple.400, red.300)" bgClip="text">
                        송찬흠 
                    </Text>
                    <Text p={isSmallScreen ? "5":"5"} fontSize={isSmallScreen ? "5xl":"4xl"} fontWeight="semibold" orientation="vertical">
                        입니다.
                    </Text>
                    </Flex>
                    
                    <Text color={isDark ? "gray.200" : "gray.500"} fontSize={isSmallScreen ? "sm":"xs"}
                    >
                        이 웹은 React/TypeScript와 Chakra UI Component로 구성되어 있습니다.
                    </Text>
                </Box>
                <Image zIndex="1" alignSelf="center" mt={isSmallScreen ? "0" : "12"} mb={isSmallScreen ? "0" : "12"} borderRadius='full' backgroundColor="transparent" boxShadow="lg" boxSize="300px" src={ProfileImage} />

            </Flex>
        </Stack>
    )
}

export default introduce