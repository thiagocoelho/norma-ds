import React from 'react';
import { TabPanelBaseProps } from './types';
import { TabPanel as MuiTabPanel } from "@mui/lab";

export const TabPanel = ({ children, value = '', ...props }: TabPanelBaseProps) => {
  return (
    <MuiTabPanel value={value} {...props}>
      {children}
    </MuiTabPanel>
  );
};

TabPanel.displayName = 'TabPanel';
