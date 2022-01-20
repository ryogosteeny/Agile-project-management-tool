import React from 'react';
import { TextField } from '../../components/atoms/TextField';
import { Select } from '../../components/atoms/Select';
import { css } from '@emotion/react';
import { BaseButton } from '../../components/atoms/BaseButton';
import { styleTheme } from '../../theme/theme';
import { mediaQuery } from '../../providers/StyleThemeProvider';

// TODO プロジェクト情報更新のリクエストボディに乗せる為のstateを作成
// TODO エンドポイントの関数のセット
// TODO バリデーション関数の作成
// TODO ページ遷移の為の関数のセット

export const ProjectEdit = () => {
  return (
    <div>
      <div css={pageContainerStyle}>
        {/* TODO モバイルサイズ ハンバーガメニューコンポーネントの挿入 */}
        <div css={headerAreaStyle}>{/* TODO グローバルナビのコンポーネントを挿入 */}</div>

        <div css={sidebarAreaStyle}>{/* TODO ローカルナビのコンポーネントを挿入 */}</div>

        <div css={contentsAreaStyle}>
          <div css={pageNameWrapStyle}>
            <h1 css={pageNameStyle}>プロジェクト編集</h1>
          </div>

          <div css={projectEditWrapStyle}>
            <form>
              <div css={projectNameWrapStyle}>
                <TextField value={''} onChange={() => {}} labelText={'プロジェクト名'} />
              </div>
              <div css={taskKeyWrapStyle}>
                <TextField value={''} onChange={() => {}} labelText={'タスクキー'} />
              </div>
              <div css={projectLeadWrapStyle}>
                <Select labelText={'プロジェクトリード'} options={[]} />
              </div>
              <div css={contactPersonWrapStyle}>
                <Select labelText={'担当者'} options={[]} />
              </div>
              <div css={storageButtonWrapStyle}>
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

const pageContainerStyle = css`
  display: grid;
  grid-template:
    'header header header' 56px
    'side  main main'
    'side  main main'
    /248px;
  height: 100vh;
  width: 100vw;
  ${mediaQuery[0]} {
    grid-template:
      'header' 5%
      'main' 85%
      'footer' 5%;
  }
  ${mediaQuery[1]} {
    grid-template:
      'header' 10%
      'main' 90%;
  }
`;

const headerAreaStyle = css`
  width: 100%;
  z-index: 2;
  position: fixed;
`;

const sidebarAreaStyle = css`
  grid-area: side;
  ${mediaQuery[0]} {
    grid-area: footer;
  }
`;

const contentsAreaStyle = css`
  grid-area: main;
  ${mediaQuery[1]} {
    padding: 0 ${styleTheme.spacing(2)}px;
  }
`;

const pageNameStyle = css`
  font-size: 2.4rem;
`;

const pageNameWrapStyle = css`
  position: relative;
  top: 24px;
  left: 40px;
  ${mediaQuery[1]} {
    display: none;
  }
`;

const projectEditWrapStyle = css`
  display: flex;
  justify-content: center;
  position: relative;
  top: 20%;
  ${mediaQuery[0]} {
    display: flex;
    justify-content: center;
  }
`;

const projectNameWrapStyle = css`
  width: 352px;
`;

const taskKeyWrapStyle = css`
  width: 352px;
  position: relative;
  top: 16px;
`;

const projectLeadWrapStyle = css`
  width: 352px;
  position: relative;
  top: 32px;
`;

const contactPersonWrapStyle = css`
  width: 352px;
  margin-top: ${styleTheme.spacing(1)}px;
  position: relative;
  top: 76px;
`;

const storageButtonWrapStyle = css`
  width: 62px;
  margin-top: ${styleTheme.spacing(1)}px;
  position: relative;
  top: 120px;
  ${mediaQuery[0]} {
    height: 36px;
    width: 352px;
  }
`;
