import React from 'react';
import { css } from '@emotion/react';
import { styleTheme } from '../../theme/theme';

interface Props {
  projectColor: string;
  title: string;
  projectData: { key: string; value: string }[];
  onClick: () => void;
}

export const Card = ({ projectColor, title, projectData, onClick }: Props) => {
  return (
    <div css={cardStyle(projectColor)}>
      <button onClick={onClick} css={projectNameStyle}>
        {title}
      </button>
      {projectData.map((data) => (
        <div key={data.key} css={infoStyle}>
          <dt>{data.key}</dt>
          <div css={valuePositionStyle}>
            <dd>{data.value}</dd>
          </div>
        </div>
      ))}
    </div>
  );
};

const cardStyle = (projectColor: string) => css`
  border: 1px solid ${styleTheme.colors.border.main};
  border-radius: ${styleTheme.borderRadius.regular}px;
  border-left: 20px solid ${projectColor};
`;
const projectNameStyle = css`
  cursor: pointer;
  font-size: ${styleTheme.fontSize.medium}rem;
  font-weight: ${styleTheme.fontWeight.bold};
  color: ${styleTheme.colors.text.dark};
  padding-bottom: ${styleTheme.spacing(2)}px;
  padding-top: ${styleTheme.spacing(2)}px;
  padding-left: ${styleTheme.spacing(2)}px;
`;
const infoStyle = css`
  color: ${styleTheme.colors.text.main};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: ${styleTheme.spacing(2)}px;
  padding-bottom: ${styleTheme.spacing(2)}px;
  padding-left: ${styleTheme.spacing(2)}px;
`;
const valuePositionStyle = css`
  width: 60%;
  text-align: left;
`;
