import React from 'react';
import { styleTheme } from '../theme/theme';
import { css } from '@emotion/react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textColor: string;
  backGroundColor: string;
  hoverColor: string;
  onClick: () => void;
}

export const BaseButton = ({ textColor, backGroundColor, hoverColor, onClick, ...props }: Props) => {
  return (
    <button type="button" onClick={onClick} css={buttonStyle(textColor, backGroundColor, hoverColor)} {...props} />
  );
};

const buttonStyle = (textColor: string, backGroundColor: string, hoverColor: string) => css`
  padding: ${styleTheme.spacing(0.5)}px ${styleTheme.spacing(1)}px;
  border-radius: ${styleTheme.borderRadius.regular}px;
  color: ${textColor};
  background-color: ${backGroundColor};
  &:hover {
    background-color: ${hoverColor};
  }
  :disabled {
    pointer-events: none;
    background-color: ${styleTheme.colors.surface.main};
    color: ${styleTheme.colors.text.topLight};
  }
`;
