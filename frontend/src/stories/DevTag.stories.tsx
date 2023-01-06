import React from 'react';
import DevTag from '../components/common/devTag';

export default {
  component: DevTag,
  title: 'DevTag',
};

export const myComponent = () => <DevTag color="facebook" label="facebook" />;

myComponent.story = {
  name: 'Default',
};
