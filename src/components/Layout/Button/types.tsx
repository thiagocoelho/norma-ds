import { ReactNode } from 'react';
import { Theme } from '@emotion/react';

import {
  ButtonPropsColorOverrides,
  ButtonPropsSizeOverrides,
  ButtonPropsVariantOverrides,
  ButtonProps as MuiButtonProps,
  SxProps
} from "@mui/material";

import { OverridableStringUnion } from '@mui/types';

type MuiButtonBaseProps = Pick<MuiButtonProps, 'sx' | 'color' | 'size' | 'variant'>;

export interface ButtonBaseProps extends MuiButtonBaseProps {
  label: string;
  sx?: SxProps<Theme>; 
  children?: ReactNode;
  color?: OverridableStringUnion<
      'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
      ButtonPropsColorOverrides
    >;
  size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>;
  variant?: OverridableStringUnion<
      'text' | 'outlined' | 'contained',
      ButtonPropsVariantOverrides
    >;
}


