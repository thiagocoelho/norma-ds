import { ElementType, ReactNode, Ref } from 'react';

import { BoxProps, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

export type BoxBaseProps = Pick<BoxProps, 'sx'> & {
  ref?: Ref<unknown>;
  sx?: SxProps<Theme>; 
  component?: ElementType;
  children?: ReactNode;
}; 


