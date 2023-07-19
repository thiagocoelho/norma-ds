import React from 'react';
import Tag from "../../components/Layout/Tag";
import { Box, Typography } from '@mui/material';

export default {
  title: 'Layout/Tag',
  component: Tag,
  excludeStories: /.*Data$/,
};

const defaultArgs = {
  label: '99',
  color: 'primary',
  outlined: true,
};

const Template = () => <Tag {...defaultArgs} />;

export const Playground = Template.bind({});

Playground.args = {
  ...defaultArgs
};

export const Basic = () => (
    <>
      <Typography variant='h4'>Basic Tag</Typography>
      <Typography variant='body1'>The Tag component supports outlined and filled styling.</Typography>
      <Box>
        <Tag label="Basic Tag" color="primary" />
      </Box>
    </>
);

Basic.storyName = 'Basic Tag';

