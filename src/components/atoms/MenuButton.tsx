import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { MenuIcon } from '../icons/MenuIcon';
import { useOpen } from '../../hooks/ui/useOpen';

export interface menuContents {
  label: string;
  event: () => void;
}

interface Props {
  menuContents: menuContents[];
}

export const MenuButton = ({ menuContents }: Props) => {
  const { open, anchorEl, handleOpen, handleClose, handleMenuItem } = useOpen();

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ width: '32px', height: '32px', p: 0, bgcolor: 'secondary.main', color: 'secondary.dark' }}
      >
        <MenuIcon />
      </Button>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {menuContents.map((menuItem) => (
          <MenuItem onClick={() => handleMenuItem(menuItem.event)} key={menuItem.label}>
            {menuItem.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
