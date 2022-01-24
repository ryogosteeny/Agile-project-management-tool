import React from 'react';
import { TextField } from '../../components/atoms/TextField';
import { Select } from '../../components/atoms/Select';
import { css } from '@emotion/react';
import { BaseButton } from '../../components/atoms/BaseButton';
import { styleTheme } from '../../theme/theme';
import { mobile, tablet } from '../../providers/StyleThemeProvider';

// TODO プロジェクト情報更新のリクエストボディに乗せる為のstateを作成
// TODO エンドポイントの関数のセット
// TODO バリデーション関数の作成
// TODO ページ遷移の為の関数のセット

export const ProjectEdit = () => {
  return (
    <div>
      <div css={pageWholeLayOutStyle}>
        {/* TODO モバイルサイズ ハンバーガメニューコンポーネントの挿入 */}
        <div css={headerAreaStyle}>{/* TODO グローバルナビのコンポーネントを挿入 */}</div>

        <div css={sidebarAreaStyle}>{/* TODO ローカルナビのコンポーネントを挿入 */}</div>

        <div css={contentsAreaStyle}>
          <div css={pageNameArticleStyle}>
            <h1 css={pageNameStyle}>プロジェクト編集</h1>
          </div>

          <div css={projectEditArticleStyle}>
            <form css={projectEditInformationStyle}>
              <div css={projectNameContentStyle}>
                <TextField value={''} onChange={() => {}} labelText={'プロジェクト名'} />
              </div>
              <div css={taskKeyWrapStyle}>
                <TextField value={''} onChange={() => {}} labelText={'タスクキー'} />
              </div>
              <div css={projectLeadContentStyle}>
                <Select labelText={'プロジェクトリード'} options={[]} />
              </div>
              <div css={contactPersonContentStyle}>
                <Select labelText={'担当者'} options={[]} />
              </div>
              <div css={storageButtonContentStyle}>
                <BaseButton
                  textColor={styleTheme.colors.text.contrastText}
                  backGroundColor={styleTheme.colors.primary.main}
                  hoverColor={styleTheme.colors.primary.light}
                  onClick={() => {}}
                  disabled={true}
                >
                  保存
                </BaseButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const sideColumnWidth = 248; // この数字は暫定的な値
const headerRowHeight = 56;

const pageWholeLayOutStyle = css`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template:
    'header header header' ${headerRowHeight}px
    'side  contents contents'
    'side  contents contents'
    / ${sideColumnWidth}px;
  ${tablet} {
    grid-template:
      'header' 5%
      'contents' 85%
      'footer' 5%
      /100%;
  }
  ${mobile} {
    grid-template:
      'header' 10%
      'contents' 90%
      /100%;
  }
`;

const headerAreaStyle = css`
  grid-area: header;
  width: 100%;
  z-index: 2;
  position: fixed;
`;

const sidebarAreaStyle = css`
  grid-area: side;
  ${tablet} {
    grid-area: footer;
  }
`;

const contentsAreaStyle = css`
  grid-area: contents;
  ${mobile} {
    padding: 0 ${styleTheme.spacing(2)}px;
  }
`;

const pageNameArticleStyle = css`
  position: relative;
  top: 24px;
  left: 40px;
  ${mobile} {
    display: none;
  }
`;

const pageNameStyle = css`
  font-size: 2.4rem;
`;

const projectEditArticleStyle = css`
  display: flex;
  justify-content: center;
  position: relative;
  top: 20%;
  ${tablet} {
    display: flex;
    justify-content: center;
  }
`;

const projectEditInformationStyle = css`
  width: 352px;
`;

const projectNameContentStyle = css`
  width: 100%;
`;

const taskKeyWrapStyle = css`
  width: 100%;
  position: relative;
  top: 16px;
`;

const projectLeadContentStyle = css`
  width: 100%;
  position: relative;
  top: 32px;
`;

const contactPersonContentStyle = css`
  width: 100%;
  margin-top: ${styleTheme.spacing(1)}px;
  position: relative;
  top: 76px;
`;

const storageButtonContentStyle = css`
  width: 62px;
  margin-top: ${styleTheme.spacing(1)}px;
  position: relative;
  top: 120px;
  ${tablet} {
    height: 36px;
    width: 352px;
  }
`;
