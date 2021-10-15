import React from 'react';
import { css } from '@emotion/react';
import { pmtTheme } from '../theme/theme';

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
  background-color: ${pmtTheme.colors.surface.main};
  border: solid #dfe1e6 1px;
  box-sizing: border-box;
  cursor: inherit;
  border-radius: ${pmtTheme.borderRadius.regular}px;
  padding: 8px 6px;
  max-width: 100%;
`;

const labelTitleStyle = css`
  padding-bottom: 8px;
  font-size: ${pmtTheme.fontSize.medium}rem;
  color: ${pmtTheme.colors.text.main};
`;

const TextFieldContainer = css`
  display: flex;
  flex-direction: column;
`;
