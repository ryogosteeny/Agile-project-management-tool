import React from 'react';
import { styleTheme } from '../../theme/theme';

interface Props {
  size?: number;
  color?: string;
}

export const AddIcon = ({ size, color }: Props) => {
  return (
    <svg width={size || 24} height={size || 24} xmlns="http://www.w3.org/2000/svg">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={color || styleTheme.colors.text.main} />
    </svg>
  );
};
