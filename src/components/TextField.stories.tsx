import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextField } from './TextField';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    width: {
      control: { type: 'range', min: 100, max: 800 },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <div style={args}>
      <TextField value={''} onChange={() => {}} labelText={''} {...args} />
    </div>
  );
};

export const ProjectNameText = Template.bind({});
ProjectNameText.args = {
  labelText: '名前',
  width: 500,
};
