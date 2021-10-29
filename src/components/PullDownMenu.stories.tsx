import React from 'react';
import PullDownMenu from './PullDownMenu';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'PullDownMenu',
  component: PullDownMenu,
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
    value: {
      options: ['斎藤', '中島', '田中'],
      control: { type: 'multi-select' },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <div style={args}>
      <PullDownMenu
        onClick={() => {}}
        labelText={''}
        menuContents={[]}
        isOpen={false}
        onClickList={() => {}}
        value={''}
        onChange={() => {}}
        isSelect={() => false}
        {...args}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  labelText: 'プロジェクトリード',
  users: [
    { name: '斎藤', id: 1 },
    { name: '中島', id: 2 },
    { name: '田中', id: 3 },
  ],
  width: 352,
};

export const OpenPullDown = Template.bind({});
OpenPullDown.args = {
  labelText: 'プロジェクトリード',
  users: [
    { name: '斎藤', id: 1 },
    { name: '中島', id: 2 },
    { name: '田中', id: 3 },
  ],
  width: 352,
  isOpen: true,
};

export const ClickPullDown = Template.bind({});
ClickPullDown.args = {
  labelText: 'プロジェクトリード',
  users: [
    { name: '斎藤', id: 1 },
    { name: '中島', id: 2 },
    { name: '田中', id: 3 },
  ],
  width: 352,
  isOpen: false,
  value: '斎藤',
};

export const InputtedOpenPullDown = Template.bind({});
InputtedOpenPullDown.args = {
  labelText: 'プロジェクトリード',
  users: [
    { name: '斎藤', id: 1 },
    { name: '中島', id: 2 },
    { name: '田中', id: 3 },
  ],
  width: 352,
  isOpen: true,
  value: '斎藤',
  isSelect: () => true,
};
