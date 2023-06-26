import React, { ReactNode } from 'react';

import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldValue = string | number;
export type TextFieldVariant = 'standard' | 'outlined' | 'filled'

export type TextFieldBaseProps = Pick<MuiTextFieldProps, 
  'onChange'        | 
  'onBlur'          | 
  'onFocus'         | 
  'defaultValue'    | 
  "variant"         | 
  "size"            | 
  "value"           | 
  "id"              | 
  "fullWidth"       | 
  "helperText"      | 
  "type"            |  
  "InputProps"      | 
  "InputLabelProps" | 
  "autoComplete"    | 
  "label"           | 
  "helperText"      | 
  "InputLabelProps" | 
  "margin"          | 
  "maxRows"         | 
  "minRows"         | 
  "multiline"       | 
  "name"            | 
  "placeholder"     | 
  "rows"            | 
  "select"          | 
  "SelectProps"     | 
  "sx"              | 
  "autoFocus"       | 
  "error"           | 
  "classes"         | 
  "children"        | 
  "color"
  > & {
  inputRef?: React.Ref<any>;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  hasError?: boolean;
  label?: ReactNode;
  children?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: TextFieldValue) => void;
}; 


