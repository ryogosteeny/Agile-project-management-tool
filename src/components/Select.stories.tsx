import React from 'react';
import { Select } from './Select';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 0,
        max: 500,
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <div style={args}>
      <Select labelText={''} options={[]} {...args} />
    </div>
  );
};

export const ProjectRead = Template.bind({});
ProjectRead.args = {
  labelText: 'プロジェクトリード',
  options: [
    { value: '斎藤', id: 1 },
    { value: '中島', id: 2 },
    { value: '田中', id: 3 },
  ],
  width: 352,
};