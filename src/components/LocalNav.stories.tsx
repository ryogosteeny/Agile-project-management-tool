import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { LocalNav, LocalNavMenuItem } from './LocalNav';
import { RoadMapIcon } from './icons/RoadMapIcon';
import { BackLogIcon } from './icons/BackLogIcon';
import { BoardIcon } from './icons/BoardIcon';
import { AddIcon } from './icons/AddIcon';
import { SetUpIcon } from './icons/SetUpIcon';
import { action } from '@storybook/addon-actions';

export default {
  title: 'LocalNav',
  component: LocalNav,
} as Meta;

interface LocalNavStory {
  projectName: string;
  localNavMenuItem: LocalNavMenuItem[];
}

const Template: Story<LocalNavStory> = (args) => {
  return <LocalNav {...args} />;
};

export const DefaultLocalNav = Template.bind({});
DefaultLocalNav.args = {
  projectName: 'ストーリープロジェクト',
  localNavMenuItem: [
    {
      name: 'ロードマップ',
      icon: <RoadMapIcon />,
      transition: action('ロードマップページへ遷移'),
    },
    {
      name: 'バックログ',
      icon: <BackLogIcon />,
      transition: action('バックログページへ遷移'),
    },
    {
      name: 'ボード',
      icon: <BoardIcon />,
      transition: action('ボードページへ遷移'),
    },
    {
      name: '課題を作成',
      icon: <AddIcon />,
      transition: action('課題の作成ページへ遷移'),
    },
    {
      name: 'プロジェクト設定',
      icon: <SetUpIcon />,
      transition: action('プロジェクト設定ページへ遷移'),
    },
  ],
};
