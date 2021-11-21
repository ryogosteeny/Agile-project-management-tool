import React from 'react';
import { css } from '@emotion/react';
import { styleTheme } from '../../theme/theme';

export interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
}

export const TextField = ({ value, onChange, labelText }: Props) => {
  return (
    <div css={TextFieldContainer}>
      <label css={labelStyle}>{labelText}</label>
      <input type="text" value={value} onChange={onChange} css={textFieldStyle} />
    </div>
  );
};

const textFieldStyle = css`
  background-color: ${styleTheme.colors.surface.main};
  border: 1px solid ${styleTheme.colors.border.main};
  box-sizing: border-box;
  cursor: inherit;
  border-radius: ${styleTheme.borderRadius.regular}px;
  padding: ${styleTheme.spacing(1)} ${styleTheme.spacing(0.75)};
  max-width: 100%;
`;

const labelStyle = css`
  padding-bottom: ${styleTheme.spacing(1)}px;
  font-size: ${styleTheme.fontSize.medium}rem;
  color: ${styleTheme.colors.text.main};
`;

const TextFieldContainer = css`
  display: flex;
  flex-direction: column;
`;
