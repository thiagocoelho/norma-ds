import { Ref } from 'react';

import { ChipProps, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

export type TagBaseProps = Pick<ChipProps, 'sx'> & {
  ref?: Ref<unknown>;
  sx?: SxProps<Theme>;
  avatar?: React.ReactElement;
  label?: React.ReactNode;
  outlined: Boolean;
}; 
