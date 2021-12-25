import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Card } from './Card';
import { styleTheme } from '../../theme/theme';

export default {
  title: 'Card',
  component: Card,
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
      <Card projectData={[]} projectColor={''} title={''} onClick={() => {}} {...args} />
    </div>
  );
};

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
  projectColor: styleTheme.colors.primary.main,
  title: 'プロジェクトテスト',
  projectData: [
    {
      key: 'チーム名',
      value: 'Pide Piper',
    },
    {
      key: 'キー',
      value: 'AJA',
    },
    {
      key: '管理者',
      value: '名前',
    },
  ],
  onClick: () => console.log('プロジェクト名をクリック'),
  width: 232,
};