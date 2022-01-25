import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { styleTheme } from '../../theme/theme';
import { BaseButton } from './BaseButton';

export default {
  title: 'atoms/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      options: ['保存', '削除', 'スプリントを開始する', 'スプリントを作成', 'スプリントを完了'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return <BaseButton textColor={''} backGroundColor={''} hoverColor={''} onClick={() => {}} {...args} />;
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  children: '保存',
  textColor: styleTheme.colors.text.contrastText,
  backGroundColor: styleTheme.colors.primary.main,
  hoverColor: styleTheme.colors.primary.light,
};

export const DisableColor = Template.bind({});
DisableColor.args = {
  children: '保存',
  textColor: styleTheme.colors.text.topLight,
  backGroundColor: styleTheme.colors.surface.main,
  disabled: true,
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  children: '削除',
  textColor: styleTheme.colors.text.contrastText,
  backGroundColor: styleTheme.colors.secondary.main,
  hoverColor: styleTheme.colors.secondary.light,
};
