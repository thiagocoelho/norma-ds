import React from 'react';
import { ProgressBar } from "../../components/Layout/ProgressBar";
import { Box, Typography } from '@mui/material';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  excludeStories: /.*Data$/,
};

const defaultArgs = {
  variant: 'determinate',
  color: 'primary',
  value: 10,
};

const Template = () => <ProgressBar {...defaultArgs} />;

export const Playground = Template.bind({});

Playground.args = {
  ...defaultArgs
};

export const Basic = () => (
    <>
      <Typography variant='h4'>Basic ProgressBar</Typography>
      <Typography variant='body1'>Progress indicators commonly known as progress, express an unspecified wait time or display the length of a process.</Typography>
      <Box>
        <ProgressBar variant="determinate" color="primary" value={10} />
      </Box>
    </>
);

Basic.storyName = 'Basic ProgressBar';

