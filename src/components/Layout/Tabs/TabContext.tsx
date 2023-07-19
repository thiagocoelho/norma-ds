import React from 'react';
import { TabContextBaseProps } from './types';
import { TabContext as MuiTabContext } from "@mui/lab";

export const TabContext = ({ children, value='', ...props }: TabContextBaseProps) => {
  return (
    <MuiTabContext value={value} {...props}>
      {children}
    </MuiTabContext>
  );
};

TabContext.displayName = 'TabContext';
