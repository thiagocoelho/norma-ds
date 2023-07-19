import { ModalProps, SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

export type RenderProps<E extends HTMLElement = HTMLElement> = { focusRef?: React.MutableRefObject<E | null>; id?: string };

export type ModalBaseProps = Omit<ModalProps, 'sx'> & {
  sx?: SxProps<Theme>; 
  children?: ((props: RenderProps<E>) => React.ReactElement) | React.ReactElement | React.ReactElement[];
  open?: boolean;
  onClose?: (event?: React.MouseEvent | React.KeyboardEvent | React.TouchEvent, contextId?: string) => void;
  className?: string;
  full?: boolean;
}; 


