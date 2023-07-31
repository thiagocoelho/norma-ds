import React from 'react';
import { ButtonBaseProps } from './types';
import { Button as MuiButton } from "@mui/material";
import { useTranslation } from 'react-i18next';

export const Button = ({ label, ...rest }:ButtonBaseProps ) => { 
  const { t } = useTranslation();
  const newLabel = label ? label : t('buttonText');
  return(<MuiButton {...rest} sx={{color: rest.variant === 'contained' ? '#FFFF' : rest.color }}>{newLabel}</MuiButton>)
};

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary"
};
