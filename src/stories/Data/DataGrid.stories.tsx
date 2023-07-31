import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from '../../components/Data/DataGrid';
import { Grid, Typography, Paper } from '@mui/material';
import {
  getBtnSizesArray,
  getBtnColorsArray,
  getBtnVariantsArray,
  BtnSizes,
  BtnColors,
  BtnVariants,
} from '../../helpers';

import data from '../../sample-data.json';

const meta: Meta<typeof DataGrid> = {
  title: 'Data display/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  // argTypes: {
  //   primaryColor: {
  //     control: { disable: true },
  //   },
  // },
  // args: {
  //   primaryColor: "red",
  // },
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

const defaultArgs = {
  variant: 'standard',
  data: data,
};

export const Basic: Story = {
  args: {
    variant: 'standard',
    data: data,
  },
};

export const Sizes = () => {
  return (
    <>
      <Typography variant="h6">Sizes</Typography>
      <Typography variant="body1">The available sizes to scale the grid are:</Typography>
      <Grid container spacing={2}>
        <DataGrid data={data} variant="standard" width="640px" height="340px"></DataGrid>
      </Grid>
    </>
  );
};

Sizes.storyName = 'Sizes';

export const Colors = () => (
  <>
    <Typography variant="h6">Colors</Typography>
    <Typography variant="body1">The available colors to backgroud the grid are:</Typography>
    <Grid container spacing={2}>
      Colors
    </Grid>
  </>
);

Colors.storyName = 'Colors';

export const Variants = () => (
  <>
    <Typography variant="h6">Variant</Typography>
    <Typography variant="body1">The available variant to format the button are:</Typography>
    <Grid container spacing={2}>
      Variante
    </Grid>
  </>
);

Variants.storyName = 'Variants';
