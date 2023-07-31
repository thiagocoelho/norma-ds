import React from 'react';
import { BoxBaseProps } from './types';
import { Box as MuiBox } from '@mui/material';

export const Box = ({ children, ...rest }: BoxBaseProps) => {
  return <MuiBox {...rest}>{children}</MuiBox>;
};

Box.defaultProps = {
  children: `Box`,
};
