import React, { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';
import { styleTheme } from '../../theme/theme';
import { useOpen } from '../../hooks/ui/useOpen';

interface Options {
  id: string;
  value: string;
}

interface Props {
  labelText: string;
  options: Options[];
  defaultValue?: Options;
}

export const Select = ({ labelText, options, defaultValue }: Props) => {
  const { isOpen, closeEventHandler, openTargetRef, openEventHandler } = useOpen();
  const [selectValue, setSelectValue] = useState<Options>({
    id: defaultValue?.id ?? '',
    value: defaultValue?.value ?? '',
  });
  const [searchText, setSearchText] = useState<string>('');

  const selectValueHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectValue({ id: e.target[e.target.selectedIndex].id, value: e.target.value });
    closeEventHandler();
  };

  const searchTextHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  const isSelect = (id: string): boolean => {
    return id === selectValue.id;
  };

  return (
    <div css={selectContainerStyle} ref={openTargetRef}>
      <label css={labelStyle}>{labelText}</label>
      <input
        type="text"
        css={inputSelectStyle}
        value={selectValue.value}
        onChange={searchTextHandler}
        onFocus={openEventHandler}
      />

      {isOpen && <input value={searchText} onChange={searchTextHandler} autoFocus={true} css={inputTextStyle} />}
      {isOpen && (
        <select css={selectStyle} onChange={selectValueHandler} size={options.length}>
          {options.map((option) => (
            <option
              id={option.id}
              value={option.value}
              label={option.value}
              key={option.id}
              css={optionItemStyle(isSelect(option.id))}
            />
          ))}
        </select>
      )}
    </div>
  );
};

const selectContainerStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  position: relative;
`;

const labelStyle = css`
  padding-bottom: ${styleTheme.spacing(0.5)}px;
  font-size: ${styleTheme.fontSize.medium}rem;
  color: ${styleTheme.colors.text.main};
`;

const inputSelectStyle = css`
  background-color: ${styleTheme.colors.surface.main};
  border: 1px solid ${styleTheme.colors.border.main};
  border-radius: ${styleTheme.borderRadius.regular}px;
  cursor: pointer;
  max-width: 100%;
  width: 100%;
  padding: ${styleTheme.spacing(0.75)}px ${styleTheme.spacing(0.75)}px ${styleTheme.spacing(0.75)}px;
  overflow: hidden auto;
  position: absolute;
  top: 18px;
`;

const inputTextStyle = css`
  background-color: ${styleTheme.colors.surface.main};
  border: 1px solid ${styleTheme.colors.border.main};
  border-radius: ${styleTheme.borderRadius.regular}px;
  cursor: pointer;
  max-width: 100%;
  width: 100%;
  padding: ${styleTheme.spacing(0.75)}px ${styleTheme.spacing(0.75)}px ${styleTheme.spacing(0.75)}px;
  overflow: hidden auto;
  position: absolute;
  top: 18px;
`;

const selectStyle = css`
  border: 1px solid ${styleTheme.colors.border.main};
  border-radius: ${styleTheme.borderRadius.regular}px;
  box-shadow: 2px 3px 4px gainsboro;
  margin: ${styleTheme.spacing(0.5)}px;
  max-width: 100%;
  width: 100%;
  position: absolute;
  top: 50px;
  right: -4px;
  &:focus {
    outline: none;
  }
`;

const optionItemStyle = (isSameID: boolean) => css`
  cursor: pointer;
  font-size: ${styleTheme.fontSize.medium}rem;
  padding: ${styleTheme.spacing(1)}px ${styleTheme.spacing(1)}px;
  outline-style: none;
  &:hover {
    background-color: ${isSameID ? '' : '#f7f7f7'};
  }
  background-color: ${isSameID ? '#bcefd4' : ''};
`;