import React, { useState } from 'react';

export const useOpen = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItem = (menuItemEvent: () => void) => {
    menuItemEvent();
    setAnchorEl(null);
  };

  return { open, anchorEl, handleOpen, handleClose, handleMenuItem };
};
