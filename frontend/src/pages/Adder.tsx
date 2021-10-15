import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Box,
    Flex,
    useColorModeValue
  } from "@chakra-ui/react"

function Adder(props:any) {
 
  return (
    <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box     
    bg={useColorModeValue('white', 'gray.700')}
    py="8"
    px={{ base: '4', md: '10' }}
    shadow="base"
    rounded={{ sm: 'lg' }}>
    <Flex w="100%" p={2} align="center" direction="column">
      <Flex direction="row">
      <Box p='4'w="320">
        <FormControl id="first-name" isRequired>            
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
      </Box>
      <Box p='4'>
        <FormControl id="first-name" isRequired>            
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
      </Box>
      </Flex>
      <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
            alignSelf="center">
            저장
        </Button>
    </Flex>
       
       
    </Box>
    </Box>
  )
}

export default Adder;