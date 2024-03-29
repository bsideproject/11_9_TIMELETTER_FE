import { style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';
import { spacing } from '~components/styles/tools';

const letterFormPaddingX = spacing(20);

export const letterFormStyle = style({
  flex: '1 1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  paddingTop: '8px',
});

export const letterFormContentStyle = style({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  padding: `40px ${letterFormPaddingX} 32px`,
  overflow: 'auto',
});

export const letterFormActionsBaseStyle = style({
  position: 'sticky',
  bottom: 16,
  display: 'flex',
  padding: '8px 0',
  backgroundColor: vars.colors.black,
});

export const letterFormActionsStyle = style([
  letterFormActionsBaseStyle,
  {
    flexDirection: 'row-reverse',
    paddingLeft: `${letterFormPaddingX}`,
    paddingRight: `${letterFormPaddingX}`,
  },
]);

export const letterFormActionButtonStyle = style({ width: 54, height: 54, borderRadius: 12 });
