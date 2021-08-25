import React from 'react'
import {useColorMode} from "@chakra-ui/color-mode";
import {useMediaQuery} from '@chakra-ui/media-query';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';
import { Link } from "react-scroll";

function SideMenu(props:any) {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    const [isSmallScreen] = useMediaQuery('(min-width:750px)');
    return (
        <>
            <Link to="1" spy={true} smooth={true}>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%"
                onClick={()=>isSmallScreen ? '' : props.changeDisplay(false) }>
                    소개
                </Button>
            </Link>
            <Link to="2" spy={true} smooth={true}>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%"
                onClick={()=>isSmallScreen ? '' : props.changeDisplay(false) }>
                    경력
                </Button>
            </Link>
            <Link to="3" spy={true} smooth={true}>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%"
                onClick={()=>isSmallScreen ? '' : props.changeDisplay(false) }>
                    Dev Note
                </Button>
            </Link>
            <Link to="4" spy={true} smooth={true}>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                my={5}
                w="100%"
                onClick={()=>isSmallScreen ? '' : props.changeDisplay(false) }>
                    ABOUT
                </Button>
            </Link>
        </>
    ) 
}

export default SideMenu
