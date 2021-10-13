import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from "@chakra-ui/react"

function Adder(props:any) {
 
  return (
    <>
        <FormControl id="first-name" isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormHelperText>Select only if you're a fan.</FormHelperText>

        </FormControl>
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