import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuButton, menuContents } from './MenuButton';

export default {
  title: 'atoms/MenuButton',
  component: MenuButton,
  parameters: {
    layout: 'centered',
  },
} as Meta;

interface MenuButtonStory {
  menuContents: menuContents[];
}

const Template: Story<MenuButtonStory> = (args) => {
  return <MenuButton {...args} />;
};

export const PrimaryMenuButton = Template.bind({});
PrimaryMenuButton.args = {
  menuContents: [
    {
      label: 'ゴミ箱に移動する',
      event: () => {},
    },
    {
      label: '違うページに移動',
      event: () => {},
    },
  ],
};
