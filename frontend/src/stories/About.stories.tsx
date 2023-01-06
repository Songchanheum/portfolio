import React from 'react';
import About from '../components/About';

export default {
  component: About,
  title: 'MyComponent',
};

export const myComponent = () => <About name="Storybook" />;

myComponent.story = {
  name: 'Default',
};
