import React from 'react';
import { Options, Select } from './Select';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'atoms/Select',
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

interface SelectStory {
  label: string;
  options: Options[];
  onChange: () => void;
  defaultValue?: Options;
  width: number;
}

const Template: Story<SelectStory> = (args) => {
  return (
    <div style={args}>
      <Select {...args} />
    </div>
  );
};

export const ProjectLead = Template.bind({});
ProjectLead.args = {
  label: 'プロジェクトリード',
  options: [
    { label: '斎藤', id: '1' },
    { label: '中島', id: '2' },
    { label: '田中', id: '3' },
  ],
  width: 352,
};

export const defaultAssignee = Template.bind({});
defaultAssignee.args = {
  label: '既定の担当者',
  options: [
    { label: '未割り当て', id: '0' },
    { label: '斎藤', id: '1' },
    { label: '中島', id: '2' },
    { label: '田中', id: '3' },
  ],
  width: 352,
};
