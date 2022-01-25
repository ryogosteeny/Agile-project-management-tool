import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Card } from './Card';
import { styleTheme } from '../../theme/theme';

export default {
  title: 'atoms/Card',
  component: Card,
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 200,
        max: 500,
      },
    },
  },
} as Meta;

interface CardStory {
  projectColor: string;
  title: string;
  projectData: { key: string; value: string }[];
  onClick: () => void;
  width: number;
}

const Template: Story<CardStory> = (args) => {
  return (
    <div style={args}>
      <Card {...args} />
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
