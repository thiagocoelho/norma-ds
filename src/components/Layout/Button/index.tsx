import React, { forwardRef } from 'react';
import { ButtonBaseProps } from './types';
import { Button as MuiButton } from "@mui/material";


export const Button = ({ label, ...rest }:ButtonBaseProps ) => (
  <MuiButton {...rest} sx={{color: rest.variant === 'contained' ? '#FFFF' : rest.color }}>{label}</MuiButton>
);

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
  label: "Button"
};
