import React, { forwardRef, memo } from 'react';
import { CardBaseProps } from './types';
import { Card as MuiCard } from "@mui/material";

const Card = forwardRef<HTMLDivElement, CardBaseProps>((props, ref) => {
  const {...rest } = props;
  return (<MuiCard {...rest} ref={ref} />)
});

export default memo(Card);  