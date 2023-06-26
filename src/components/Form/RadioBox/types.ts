import React, { ReactNode } from 'react';

import { SwitchBaseProps as MuiRadioBaseProps } from '@mui/material/internal/SwitchBase';

export type RadioBaseProps = Omit<MuiRadioBaseProps, 'checkedIcon' | 'color' | 'icon' | 'type'> & {
  inputRef?: React.Ref<any>;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  label?: ReactNode;
  checked?: MuiRadioBaseProps['checked'];
  checkedIcon?: ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}; 


