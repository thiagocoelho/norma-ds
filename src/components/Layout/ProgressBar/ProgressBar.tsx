import React, { forwardRef, Ref } from 'react';
import { ProgressBarBaseProps } from './types';
import { LinearProgress as MuiProgressBar } from "@mui/material";

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarBaseProps>(
   (
    {
      value = null,
      variant = 'determinate',
      ...props
    },
    forwardedRef: Ref<HTMLDivElement>,
  ): React.ReactElement<ProgressBarBaseProps> => {
    return (
      <MuiProgressBar value={value} ref={forwardedRef} variant={variant} {...props} />
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
