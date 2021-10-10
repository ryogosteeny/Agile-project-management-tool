import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextField } from './TextField';
import { css } from '@emotion/react';

export default {
  title: 'TextField',
  component: TextField,
} as Meta;

const Template: Story = () => {
  const [labelText, setLabelText] = useState<string>('');

  return (
    <div css={style}>
      <TextField
        value={labelText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabelText(e.target.value)}
        labelText={'名前'}
      />
    </div>
  );
};

export const ProjectNameText = Template.bind({});
ProjectNameText.args = {};

const style = css`
  width: 352px;
`;
