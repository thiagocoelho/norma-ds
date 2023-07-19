import React from 'react';
import Card from "../../components/Layout/Card";
import { Box, Typography } from '@mui/material';


export default {
  title: 'Layout/Card',
  component: Card,
  excludeStories: /.*Data$/,
};

const defaultArgs = {
  sx: { minWidth: 275, minHeight: 100 }
};

const Template = () => <Card {...defaultArgs} />;

export const Playground = Template.bind({});

Playground.args = {
  ...defaultArgs
};

export const Basic = () => (
    <>
      <Typography variant='h4'>Basic Card</Typography>
      <Typography variant='body1'>Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.</Typography>
      <Box>
        <Card sx={{minHeight:100, marginTop: 2, padding:2}}>Basic Card</Card>
      </Box>
    </>
);

Basic.storyName = 'Basic Card';

