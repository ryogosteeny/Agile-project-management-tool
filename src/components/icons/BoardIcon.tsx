import React from 'react';
import { styleTheme } from '../../theme/theme';

interface Props {
  size?: number;
  color?: string;
}

export const BoardIcon = ({ size, color }: Props) => {
  return (
    <svg width={size || 24} height={size || 24} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 5v13h17V5H4zm10 2v9h-3V7h3zM6 7h3v9H6V7zm13 9h-3V7h3v9z"
        fill={color || styleTheme.colors.text.main}
      />
    </svg>
  );
};
