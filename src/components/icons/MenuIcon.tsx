import React from 'react';

interface Props {
  size?: number;
  color: string;
}

export const MenuIcon = ({ size, color }: Props) => {
  return (
    <svg width={size || 24} height={size || 24} fill={color} viewBox="0 0 32 8" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 0C1.8 0 0 1.8 0 4C0 6.2 1.8 8 4 8C6.2 8 8 6.2 8 4C8 1.8 6.2 0 4 0ZM28 0C25.8 0 24 1.8 24 4C24 6.2 25.8 8 28 8C30.2 8 32 6.2 32 4C32 1.8 30.2 0 28 0ZM16 0C13.8 0 12 1.8 12 4C12 6.2 13.8 8 16 8C18.2 8 20 6.2 20 4C20 1.8 18.2 0 16 0Z" />
    </svg>
  );
};
