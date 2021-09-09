import React, {useState} from 'react'
import { Heading, Spacer } from '@chakra-ui/layout';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Avatar, Box,  Button,  Flex, HStack, IconButton, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, propNames, Text, Tooltip, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import {useColorMode} from "@chakra-ui/color-mode";
import {useMediaQuery} from '@chakra-ui/media-query';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaMediumM, FaRegWindowClose, FaWindowClose} from 'react-icons/fa';
import SideMenu from './SideMenu';
import BornImage from '../image/born.jpg';
import CreamImage from '../image/cream.jpg';
import RepairImage from '../image/repair.jpg';

function menu(props:any) {
    const { colorMode, toggleColorMode} = useColorMode();
    const [display , changeDisplay] = useState(false);
    const isDark = colorMode === "dark";
    
    const [isSmallScreen] = useMediaQuery('(min-width:750px)');

    let round:boolean = true;
    return (
    <>
    <Flex w="100%" p={2} align="center">
        <Heading ml="8" size="md" fontWeight='semibold' color="pink.800"> Song Chanheum </Heading>
        <Flex w="100vw" bgColor={isDark ?"gray.500" : "gray.50"} zIndex={20} h="100vh" pos="fixed" top="0" left="0" overflow="auto" flexDir="column" display={display? 'flex':'none'}>
            <Flex justify="flex-end">
                <IconButton mt={2} mr={2} aria-label="close" size="lg" icon={isDark? <FaRegWindowClose /> : <FaWindowClose />} onClick={() => changeDisplay(false)}></IconButton>
            </Flex>
            <Flex flexDir="column" align="center">
                <SideMenu {
                    ...{
                        ...props,
                        changeDisplay : changeDisplay
                    }
                }/>
            </Flex>
        </Flex>
        <IconButton ml={5} display={isSmallScreen ? "none" : "flex"} aria-label="menu" size="lg" mr={2} icon={<GiHamburgerMenu />} onClick={() => changeDisplay(true)}></IconButton>
        <Spacer />
        <Flex display={isSmallScreen ? "flex" : "none"}> 
            <SideMenu />
        </Flex>
        <Popover isLazy>
            <PopoverTrigger>
                <IconButton icon={<FaInstagram />} isRound={round} aria-label="instagram"></IconButton>

            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader fontWeight="semibold">Instagram</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <Wrap>
                    <WrapItem>
                        <Link href="https://www.instagram.com/songch_/" isExternal>
                        <Tooltip label="songch_" aria-label="A tooltip">
                            <Avatar name="songch_" src={BornImage} />
                        </Tooltip>
                        </Link>
                    </WrapItem>
                    <WrapItem>
                        
                        <Link href="https://www.instagram.com/s.glove_repair/" isExternal>
                        <Tooltip label="s.glove_repair" aria-label="A tooltip">
                            <Avatar name="s.glove_repair" src={RepairImage} />
                        </Tooltip>
                        </Link>
                    </WrapItem>
                    <WrapItem>
                        <Link href="https://www.instagram.com/daily_pitching_record/" isExternal>
                        <Tooltip label="daily_pitching_record" aria-label="A tooltip">
                            <Avatar name="daily_pitching_record" src="" />
                        </Tooltip>
                        </Link>
                    </WrapItem>
                    <WrapItem>
                        <Link href="https://www.instagram.com/cream_by_creamy/" isExternal>
                        <Tooltip label="cream_by_creamy" aria-label="A tooltip">
                            <Avatar name="cream_by_creamy" src={CreamImage} />
                        </Tooltip>
                        </Link>
                    </WrapItem>
                    </Wrap>

                </PopoverBody>
            </PopoverContent>
        </Popover>
        <IconButton ml={2} icon={<FaGithub />} isRound={round} onClick={()=> window.open("https://github.com/Songchanheum", "_blank")} aria-label="github"></IconButton>
        <IconButton ml={2} icon={<FaMediumM />} isRound={round} onClick={()=> window.open("https://bsk9212.medium.com/", "_blank")} aria-label="github"></IconButton>
        <IconButton ml={4} icon={ isDark ? <FaSun /> : <FaMoon />} isRound={round} onClick={toggleColorMode} aria-label="dark"></IconButton>
    </Flex>
    
    </>
    ) 
}
export default menu
