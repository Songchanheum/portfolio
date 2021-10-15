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
  } from "@chakra-ui/react"

function Adder(props:any) {
 
  return (
    <>
    <Flex>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg">
      <FormControl id="first-name" isRequired>            
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
        </FormControl>
      </Box>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg">
      <FormControl id="first-name" isRequired>            
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
        </FormControl>
      </Box>
    </Flex>
       
        <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit">
            저장
        </Button>
    </>
  )
}

export default Adder;