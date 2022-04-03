import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
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
      label: 'MenuItem1',
      event: action('MenuItem1'),
    },
    {
      label: 'MenuItem2',
      event: action('MenuItem2'),
    },
  ],
};
