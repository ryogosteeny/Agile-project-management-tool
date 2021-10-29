import React from 'react';
import PullDownButton from './PullDownButton';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'PullDownButton',
  component: PullDownButton,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => {
  return <PullDownButton onClick={() => {}} isOpen={false} menuContents={[]} {...args} />;
};

export const ProjectCreatePage = Template.bind({});
ProjectCreatePage.args = {
  menuContents: [
    {
      label: 'スプリントを削除',
    },
  ],
};

export const BackLogPage = Template.bind({});
BackLogPage.args = {
  menuContents: [
    {
      label: 'スプリントを編集',
    },
    {
      label: 'スプリントを削除',
    },
  ],
};
