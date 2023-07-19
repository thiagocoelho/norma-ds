import React, { forwardRef, memo } from 'react';
import { TagBaseProps } from './types';
import { Chip as MuiChip } from "@mui/material";

const Tag = forwardRef<HTMLDivElement, TagBaseProps>((props, ref) => {
  const {...rest } = props;
  return (<MuiChip {...rest} ref={ref} />)
});

export default memo(Tag);  