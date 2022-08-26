import { style } from '@vanilla-extract/css';

export const sideBarStyle = style({
  position: 'fixed',
  top: '0px',
  width: '100%',
  maxWidth: '280px',
  height: '100vh',
  backgroundColor: 'rgba(23, 23, 23, 0.5)',
  transition: 'transform 0.5s ease 0s',
});
