import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "../../components/Layout/Button"
import { Grid, Typography, Paper } from '@mui/material';
import { getBtnSizesArray, getBtnColorsArray, getBtnVariantsArray,  BtnSizes, BtnColors, BtnVariants } from '../../helpers';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;


const defaultArgs = {
  variant: 'outlined',
  size: 'medium',
  color: 'primary',
  label: 'Button'
};

export const Basic: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    label: 'Button'
  },
};

export const Sizes = () => (
    <>
      <Typography variant='h6'>Sizes</Typography>
      <Typography variant='body1'>The available sizes to scale the button are:</Typography>
      <Grid 
        container 
        spacing={2} 
       >

        {getBtnSizesArray().map((size: BtnSizes) => (
          <Grid item xs={4} key={size} spacing={2}>
            <Paper sx={{padding: 4, minHeight: '64px', width: '100%', display:'flex', alignItems:"center", justifyContent:"center", flexDirection: "column" }}>
              <Button {...defaultArgs} size={size}/>
              <Typography variant={"body2"}> {size} </Typography>
            </Paper>
          </Grid>
          ))}
      </Grid>
    </>
);

Sizes.storyName = 'Sizes';


export const Colors = () => (
    <>
      <Typography variant='h6'>Colors</Typography>
      <Typography variant='body1'>The available colors to backgroud the button are:</Typography>
      <Grid 
        container 
        spacing={2} 
       >
        {getBtnColorsArray.map((color: BtnColors) => (
          <Grid item xs={3} key={color} spacing={2}>
            <Paper sx={{padding: 2, minHeight: '80px', width: '100%', display:'flex', alignItems:"center", justifyContent:"center", flexDirection: "column", backgroudColor: "#ccc" }}>
              <Button {...defaultArgs} color={color} />
              <Typography variant={"body2"}> {color} </Typography>
            </Paper>
          </Grid>
          ))}
      </Grid>
    </>
);

Colors.storyName = 'Colors';

export const Variants = () => (
    <>
      <Typography variant='h6'>Variant</Typography>
      <Typography variant='body1'>The available variant to format the button are:</Typography>
      <Grid 
        container 
        spacing={2} 
       >
        {getBtnVariantsArray.map((variant: BtnVariants) => (
          <Grid item xs={4} key={variant} spacing={2}>
            <Paper sx={{padding: 2, minHeight: '80px', width: '100%', display:'flex', alignItems:"center", justifyContent:"center", flexDirection: "column", backgroudColor: "#ccc" }}>
              <Button {...defaultArgs} variant={variant} />
              <Typography variant={"body2"}> {variant} </Typography>
            </Paper>
          </Grid>
          ))}
      </Grid>
    </>
);

Variants.storyName = 'Variants';


