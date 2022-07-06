import React from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import { LOCAL_NAVIGATION_DEFAULT_WIDTH } from '../constants/styles';

// TODO 型ファイルに切り出す
export interface LocalNavMenuItem {
  name: string;
  icon: JSX.Element;
  transition: () => void;
}

interface Props {
  projectName: string;
  localNavMenuItem: LocalNavMenuItem[];
}

export const LocalNav = ({ projectName, localNavMenuItem }: Props) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: LOCAL_NAVIGATION_DEFAULT_WIDTH,
        height: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        bgcolor: 'secondary.main',
      }}
    >
      <Box sx={{ py: 3, px: 4 }}>
        <Typography variant={'h2'}>{projectName}</Typography>
        <Typography variant={'caption'} sx={{}}>
          {/*   TODO 動的に変更させるか検討中の為、後に変更の可能性あり */}
          ソフトウェアプロジェクト
        </Typography>
      </Box>
      <MenuList>
        {localNavMenuItem.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            onClick={menuItem.transition}
            sx={{
              mx: 1,
              '&:hover': {
                bgcolor: 'primary.light',
                borderRadius: 1,
              },
            }}
          >
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText>{menuItem.name}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};
