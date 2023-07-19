import { SxProps, LinearProgressProps } from '@mui/material';
import { Theme } from '@emotion/react';
import { OverridableStringUnion } from '@mui/types';
export interface LinearProgressPropsColorOverrides {}

export type ProgressBarBaseProps = Pick<LinearProgressProps, 'sx'> & {
  sx?: SxProps<Theme>; 
  value?: any;
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit',
    LinearProgressPropsColorOverrides
  >;
}; 

