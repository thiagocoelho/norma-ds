import { ElementType, ReactNode, Ref } from 'react';

import { CardProps, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

export type CardBaseProps = Pick<CardProps, 'sx'> & {
  ref?: Ref<unknown>;
  sx?: SxProps<Theme>; 
  raised?: Boolean;
}; 


