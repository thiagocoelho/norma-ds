import React, { forwardRef, memo } from 'react';
import { TextFieldBaseProps } from './types';
import { TextField as MuiTextField } from "@mui/material";

const TextField = forwardRef<HTMLInputElement, TextFieldBaseProps>((props, ref) => {
  const { label, disabled = false, onChange, ...rest } = props;
  return (<MuiTextField {...rest} inputRef={ref}>{label}</MuiTextField>)
});

export default memo(TextField);