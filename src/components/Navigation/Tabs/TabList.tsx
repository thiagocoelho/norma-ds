import React from 'react';
import { TabListBaseProps } from './types';
import { TabList as MuiTabList } from "@mui/lab";

export const TabList = ({ children, ...props }: TabListBaseProps) => {
  return (
    <MuiTabList {...props}>
      {children}
    </MuiTabList>
  );
};

TabList.displayName = 'TabList';
