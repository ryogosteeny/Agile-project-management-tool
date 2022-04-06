import React from 'react';
import { styleTheme } from '../../theme/theme';

interface Props {
  size?: number;
  color?: string;
}

export const RoadMapIcon = ({ size, color }: Props) => {
  return (
    <svg width={size || 24} height={size || 24} xmlns="http://www.w3.org/2000/svg">
      <path d="M22 13v6H6v-6h16zM6 5v6h10V5H6zM2 2v20h2V2H2z" fill={color || styleTheme.colors.text.main} />
    </svg>
  );
};
