import React from 'react';
import { TabBaseProps } from './types';
import { Tab as MuiTab } from "@mui/material";

export const Tab = ({ children, label = null, ...props }: TabBaseProps) => {
  return (
    <MuiTab label={label} {...props}>
      {children}
    </MuiTab>
  );
};

Tab.displayName = 'Tab';
