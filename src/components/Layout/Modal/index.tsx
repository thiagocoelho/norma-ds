import React, { forwardRef, memo, Ref } from 'react';
import { ModalBaseProps } from './types';
import { Modal as MuiModal } from "@mui/material";

const Modal = forwardRef<HTMLDivElement, ModalBaseProps>(
  (
    {
      children,
      className,
      full = false,
      open = false,
      ...props
    },
    forwardedRef: Ref<HTMLDivElement>,
  ): React.ReactElement<ModalBaseProps> => {
    
    return (
      <MuiModal open={open} onClose={props.onClose} ref={forwardedRef} {...props}>
        {children}
      </MuiModal>
    );
  }
);

Modal.displayName = 'Modal';

export default memo(Modal);
