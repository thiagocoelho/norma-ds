import React from "react";
import { ComponentStory } from "@storybook/react";
import Box from '../../components/Layout/Box';
import {Typography} from "@mui/material";

export default {
  title: "Layout/Box",
  component: Box,
};

export const Basic: ComponentStory<typeof Box> = () => (
  <>
    <Typography variant='h4'>Basic</Typography>
    <Typography variant='body1'>The Box component serves as a wrapper component for most of the CSS utility needs.</Typography>
      <Box
          sx={{
            width: 300,
            height: 300,
            display: "block",
            backgroundColor: '#f2f2f2',
            
          }}
    />
    </>
);
