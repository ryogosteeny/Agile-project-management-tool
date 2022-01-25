import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu } from './Menu';
import { styleTheme } from '../../theme/theme';

export default {
  title: 'atoms/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => {
  return <Menu menuContents={[]} {...args} />;
};

export const PrimaryMenu = Template.bind({});
PrimaryMenu.args = {
  menuContents: [
    {
      label: 'スプリントを削除',
    },
  ],
  color: styleTheme.colors.text.dark,
  size: 24,
};

export const SecondaryMenu = Template.bind({});
SecondaryMenu.args = {
  menuContents: [
    {
      label: 'スプリントを編集',
    },
    {
      label: 'スプリントを削除',
    },
  ],
  color: styleTheme.colors.text.dark,
  size: 24,
};
