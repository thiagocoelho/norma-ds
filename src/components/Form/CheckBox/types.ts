import React, { ReactNode } from 'react';

import { SwitchBaseProps as MuiCheckBoxProps } from '@mui/material/internal/SwitchBase';

export type CheckBoxBaseProps = Pick<MuiCheckBoxProps, 'checkedIcon' | 'color' | 'icon' | 'type' | 'defaultChecked'> & {
  inputRef?: React.Ref<any>;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  label?: ReactNode;
  children?: ReactNode;
  checked?: MuiCheckBoxProps['checked'];
  checkedIcon?: ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}; 


