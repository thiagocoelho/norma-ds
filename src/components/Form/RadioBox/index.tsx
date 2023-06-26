import React, { forwardRef, memo } from 'react';
import { RadioBaseProps } from './types';
import { Radio as MuiRadio } from "@mui/material";

const RadioBox = forwardRef<HTMLInputElement, RadioBaseProps>((props, ref) => {
  const { label, disabled = false, onChange, ...rest } = props;
  return (<MuiRadio {...rest} inputRef={ref} />)
});

export default memo(RadioBox);