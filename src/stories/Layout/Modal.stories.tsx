import React from 'react';
import Modal from "../../components/Layout/Modal";
import { Box, Typography, Button, ModalHeader, ModalBody, ModalFooter } from '@mui/material';


export default {
  title: 'Layout/Modal',
  component: Modal,
  excludeStories: /.*Data$/,
};

const defaultArgs = {
   children: (
    <React.Fragment>
      <ModalHeader title="Hello world" />
      <ModalBody scrollable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, mi id scelerisque semper, leo turpis
        varius tortor, a elementum libero nisl ut tortor. Quisque sit amet facilisis est, quis vestibulum eros. Donec
        orci dui, ultrices ac orci suscipit, tempus iaculis felis. Ut rutrum accumsan ligula, ac elementum ex mattis
        maximus. Ut at enim bibendum, imperdiet lectus sed, lacinia elit. Proin nec cursus metus. Maecenas sagittis
        interdum libero, sit amet mattis diam facilisis sed. Sed ut lacus ut libero hendrerit tincidunt.
      </ModalBody>
      <ModalFooter>
        <Typography align="right" component="div" variant={"body1"}>
          To be continued ...
        </Typography>
      </ModalFooter>
    </React.Fragment>
  ),
};

const Template = (args) => <Modal {...args} />;


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Basic = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Typography variant='h4'>Basic Modal</Typography>
        <Typography variant='body1'>The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.</Typography>
        <Box>
          <Button onClick={handleOpen}>Open modal</Button>
          {open && (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          )}
        </Box>
      </>
  );
};

Basic.storyName = 'Basic Modal';
