import React from "react";
import { Story, Meta } from "@storybook/react";
import CheckBox from '../../components/Form/CheckBox';
import { Box, Typography, FormGroup, FormControlLabel } from '@mui/material';
import { pink } from '@mui/material/colors';

export default {
  title: "Form/CheckBox",
  component: CheckBox,
} as Meta;

const Template: Story<typeof CheckBox> = (args) => <CheckBox {...args} />;

const defaultArgs = {};

export const Playground = Template.bind({});
Playground.args = {
  ...defaultArgs
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Basic: Story<typeof CheckBox> = () => (
  <>
    <Typography variant='h4'>Basic CheckBox</Typography>
    <Typography variant='body1'>Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.</Typography>
      <Box
        component="form"
      >
        <CheckBox {...label} defaultChecked />
        <CheckBox {...label} />
        <CheckBox {...label} disabled />
        <CheckBox {...label} disabled checked />
      </Box>
    </>
);

Basic.storyName = 'Basic TextField';

export const Label: Story<typeof CheckBox> = () => (
  <>
    <Typography variant='h4'>Label</Typography>
    <Typography variant='body1'>You can provide a label to the Checkbox thanks to the FormControlLabel component.</Typography>
      <Box
        component="form"
      >
        <FormGroup>
      <FormControlLabel control={<CheckBox defaultChecked />} label="Label" />
      <FormControlLabel required control={<CheckBox />} label="Required" />
      <FormControlLabel disabled control={<CheckBox />} label="Disabled" />
    </FormGroup>
      </Box>
  </>
);

export const Size: Story<typeof CheckBox> = () => (
  <>
    <Typography variant='h4'>Size</Typography>
    <Typography variant='body1'>Use the size prop or customize the font size of the svg icons to change the size of the checkboxes.</Typography>
      <Box
        component="form"
      >
        <CheckBox {...label} defaultChecked size="small" />
        <CheckBox {...label} defaultChecked />
        <CheckBox
          {...label}
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
      </Box>
  </>
);

export const Color: Story<typeof CheckBox> = () => (
  <>
    <Typography variant='h4'>Color</Typography>
      <Box
        component="form"
      >
        <CheckBox {...label} defaultChecked />
      <CheckBox {...label} defaultChecked color="secondary" />
      <CheckBox {...label} defaultChecked color="success" />
      <CheckBox {...label} defaultChecked color="default" />
      <CheckBox
        {...label}
        defaultChecked
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
         />
      </Box>
  </>
);
