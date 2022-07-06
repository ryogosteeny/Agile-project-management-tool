import React from 'react';
import { styleTheme } from '../../theme/theme';

interface Props {
  size?: number;
  color?: string;
}

export const BackLogIcon = ({ size, color }: Props) => {
  return (
    <svg width={size || 24} height={size || 24} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5h18v2H3V5zm0 6V9h18v2H3zm0 8v-6h18v6H3z" fill={color || styleTheme.colors.text.main} />
    </svg>
  );
};
