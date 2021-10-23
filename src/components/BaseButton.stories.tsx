import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { styleTheme } from '../theme/theme';
import { BaseButton } from './BaseButton';

export default {
  title: 'BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    labelText: {
      options: ['保存', '削除', 'スプリントを開始する', 'スプリントを作成', 'スプリントを完了'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return <BaseButton textColor={''} backGroundColor={''} hoverColor={''} labelText={''} onClick={() => {}} {...args} />;
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  labelText: '保存',
  textColor: styleTheme.colors.text.contrastText,
  backGroundColor: styleTheme.colors.primary.main,
  hoverColor: styleTheme.colors.primary.light,
  onClick: () => {
    alert('保存');
  },
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  labelText: '削除',
  textColor: styleTheme.colors.text.contrastText,
  backGroundColor: styleTheme.colors.secondary.main,
  hoverColor: styleTheme.colors.secondary.light,
  onClick: () => {
    alert('削除');
  },
};

export const DisableColor = Template.bind({});
DisableColor.args = {
  labelText: '保存',
  textColor: styleTheme.colors.text.topLight,
  bgColor: styleTheme.colors.surface.light,
  hoverColor: styleTheme.colors.surface.light,
};
