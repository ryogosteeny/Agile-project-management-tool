import React, { forwardRef } from 'react';
import { css } from '@emotion/react';
import { styleTheme } from '../theme/theme';

interface MenuContents {
  id: number;
  name: string;
}

interface Props {
  onClick: () => void;
  labelText: string;
  menuContents: MenuContents[];
  isOpen: boolean;
  onClickList: (listItem: string) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSelect: (name: string) => boolean;
}

const PullDownMenu = forwardRef<HTMLDivElement, Props>(
  ({ onClick, labelText, isOpen, menuContents, onClickList, value, onChange, isSelect }: Props, ref) => {
    return (
      <div css={pullDownMenuContainerStyle} ref={ref}>
        <label css={labelStyle}>{labelText}</label>
        <input type="text" onClick={onClick} css={inputFieldStyle} value={value} onChange={onChange} />

        {isOpen && (
          <ul css={pullDownMenuStyle}>
            {menuContents.map((menuItem) => (
              <li
                key={menuItem.id}
                css={pullDownMenuItemStyle(isSelect(menuItem.name))}
                onClick={() => onClickList(menuItem.name)}
              >
                <span>{menuItem.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

const pullDownMenuContainerStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const labelStyle = css`
  padding-bottom: ${styleTheme.spacing(0.5)}px;
  font-size: ${styleTheme.fontSize.medium}rem;
  color: ${styleTheme.colors.text.main};
`;

const inputFieldStyle = css`
  background-color: ${styleTheme.colors.surface.main};
  border: 1px solid ${styleTheme.colors.border.main};
  border-radius: ${styleTheme.borderRadius.regular}px;
  max-width: 100%;
  cursor: pointer;
  padding: ${styleTheme.spacing(0.75)}px ${styleTheme.spacing(0.75)}px ${styleTheme.spacing(0.75)}px;
  overflow: hidden auto;
  &:hover {
    background-color: ${styleTheme.colors.surface.dark};
  }
`;

const pullDownMenuStyle = css`
  border: 1px solid ${styleTheme.colors.border.main};
  border-radius: ${styleTheme.borderRadius.regular}px;
  box-shadow: 2px 3px 4px gainsboro;
  margin: ${styleTheme.spacing(0.5)}px;
`;

const pullDownMenuItemStyle = (ListItemStyle: boolean) => css`
  cursor: pointer;
  font-size: ${styleTheme.fontSize.medium}rem;
  padding: ${styleTheme.spacing(1)}px ${styleTheme.spacing(1)}px;
  &:hover {
    background-color: ${ListItemStyle ? '' : '#f7f7f7'};
  }
  background-color: ${ListItemStyle ? '#bcefd4' : ''};
`;

PullDownMenu.displayName = 'PullDownMenu';
export default PullDownMenu;
