import React from 'react';
import { ButtonBase, Menu, MenuItem } from '@mui/material';
import { MenuIcon } from '../icons/MenuIcon';
import { useOpen } from '../../hooks/ui/useOpen';
import { ICON_HEIGHT_REGULAR, ICON_WIDTH_REGULAR } from '../../constants/styles';

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
      <ButtonBase
        onClick={handleOpen}
        sx={{
          width: ICON_WIDTH_REGULAR,
          height: ICON_HEIGHT_REGULAR,
          p: 0,
          bgcolor: 'secondary.main',
          color: 'secondary.dark',
          borderRadius: 1,
        }}
      >
        <MenuIcon />
      </ButtonBase>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {menuContents.map((menuItem) => (
          // todo インラインで書くのは計算量が多くなりパフォーマンス面での懸念がある為、後に修正する
          <MenuItem onClick={() => handleMenuItem(menuItem.event)} key={menuItem.label}>
            {menuItem.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
