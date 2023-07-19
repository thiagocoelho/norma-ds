import React, { forwardRef, memo, Ref } from 'react';
import { TabsBaseProps } from './types';
import { Tabs as MuiTabs } from "@mui/material";

export const Tabs = forwardRef<HTMLDivElement, TabsBaseProps>(
   (
    {
      children,
      value = null,
      onChange,
      component,
      ...props
    },
    forwardedRef: Ref<HTMLDivElement>,
  ): React.ReactElement<TabsBaseProps> => {
    return (
      <MuiTabs value={value} component={component}  ref={forwardedRef} {...props}>
        {children}
      </MuiTabs>
    );
  }
);

Tabs.displayName = 'Tabs';
