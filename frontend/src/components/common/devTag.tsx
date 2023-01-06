import { Tag } from '@chakra-ui/react';
import React from 'react';

function DevTag(props: any) {
  const { color, label } = props;
  return (
    <Tag ml={1} size={'sm'} key={'sm'} variant="solid" colorScheme={color}>
      {label}
    </Tag>
  );
}
export default DevTag;
