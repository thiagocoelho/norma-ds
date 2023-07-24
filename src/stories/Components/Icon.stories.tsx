import type { Meta } from '@storybook/react';
import { Icons as DefaultIconSVG} from "../../components/Docs/Icon/DefaultIcon"
import {getColorsArray, getSizesArray} from '../../components/Docs/Icon/types';
import { Box, Grid, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const meta: Meta<typeof DefaultIconSVG> = {
  title: 'Components/Icon',
  component: DefaultIconSVG,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: getColorsArray(),
      control: { type: 'select' },
    },
    scale: {
      options: getSizesArray(),
      control: { type: 'select' },
    },
    fill: { control: 'color' }
  },
  parameters: {
    colorPicker: {
      applyColorTo: ['background']
    }
  }
};

export default meta;
type Story = StoryObj<typeof DefaultIconSVG>;


const defaultArgs = {
  icon: 'user',
  scale: '3xlarge',
  color: 'default'
};

export const Basic: Story = {
  args: {
    icon: 'user',
    scale: '3xlarge',
  },
};

export const Sizes = () => (
    <>
      <Typography variant='h4'>Sizes</Typography>
      <Typography variant='body1'>The available sizes to scale the icons are:</Typography>
      <Grid 
        container 
        spacing={2} 
       >

        {getSizesArray().map((key) => (
          <Grid item xs={1} key={key} spacing={2}>
            <Paper sx={{padding: 2, minHeight: '80px', width: '100%', display:'flex', alignItems:"center", justifyContent:"center", flexDirection: "column" }}>
              <DefaultIconSVG {...defaultArgs}  scale={key}/>
              <Typography variant={"body2"}> {key} </Typography>
            </Paper>
          </Grid>
          ))}
      </Grid>
    </>
);

Sizes.storyName = 'Sizes';


export const Colors = () => (
    <>
      <Typography variant='h4'>Colors</Typography>
      <Typography variant='body1'>The available colors to fill and path the icons are:</Typography>
      <Grid 
        container 
        spacing={2} 
       >

        {getColorsArray().map((key) => (
          <Grid item xs={1} key={key} spacing={2}>
            <Paper sx={{padding: 2, minHeight: '80px', width: '100%', display:'flex', alignItems:"center", justifyContent:"center", flexDirection: "column", backgroudColor: "#ccc" }}>
              <DefaultIconSVG {...defaultArgs}  color={key} scale="3xlarge" />
              <Typography variant={"body2"}> {key} </Typography>
            </Paper>
          </Grid>
          ))}
      </Grid>
    </>
);

Colors.storyName = 'Colors';


