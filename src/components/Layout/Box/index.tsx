import React, { forwardRef, memo } from 'react';
import { BoxBaseProps } from './types';
import { Box as MuiBox } from "@mui/material";

const Box = forwardRef<HTMLDivElement, BoxBaseProps>((props, ref) => {
  const {...rest } = props;
  return (<MuiBox {...rest} ref={ref} />)
});

export default memo(Box);  