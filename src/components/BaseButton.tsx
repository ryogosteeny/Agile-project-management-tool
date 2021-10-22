import React from 'react';
import { styleTheme } from '../theme/theme';
import { css } from '@emotion/react';

interface Props {
  labelText: string;
  textColor: string;
  bgColor: string;
  hoverColor: string;
  onClick: () => void;
}

export const BaseButton = ({ textColor, bgColor, hoverColor, labelText, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} css={buttonStyle(textColor, bgColor, hoverColor)}>
      {labelText}
    </button>
  );
};

const buttonStyle = (textColor: string, bgColor: string, hoverColor: string) => css`
  padding: ${styleTheme.spacing(0.5)}px ${styleTheme.spacing(1)}px;
  border-radius: ${styleTheme.borderRadius.regular}px;
  color: ${textColor};
  background-color: ${bgColor};
  &:hover {
    background-color: ${hoverColor};
  }
`;
