import React from 'react';
import { css } from '@emotion/react';

export interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
}

export const TextField = ({ value, onChange, labelText }: Props) => {
  return (
    <div css={TextFieldContainer}>
      <label css={labelTitleStyle}>{labelText}</label>
      <input type="text" value={value} onChange={onChange} css={textFieldStyle} />
    </div>
  );
};

const textFieldStyle = css`
  background-color: #f4f5f7;
  border: solid #dfe1e6 1px;
  box-sizing: border-box;
  cursor: inherit;
  border-radius: 2px;
  padding: 8px 6px;
  max-width: 100%;
`;

const labelTitleStyle = css`
  padding-bottom: 8px;
`;

const TextFieldContainer = css`
  display: flex;
  flex-direction: column;
`;
