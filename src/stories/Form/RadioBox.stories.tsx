import React from "react";
import { ComponentStory } from "@storybook/react";
import RadioBox from '../../components/Form/RadioBox';

import { Box, Typography, RadioGroup,FormControl, FormControlLabel,  FormLabel, Radio } from '@mui/material';
import { pink } from '@mui/material/colors';

export default {
  title: "Form/RadioBox",
  component: RadioBox,
};

const Template: ComponentStory<typeof RadioBox> = (args) => <RadioBox {...args} />;

const defaultArgs = {
  fullWidth: true
};


export const Playground = Template.bind({});
Playground.args = {
  ...defaultArgs
};


export const Group: ComponentStory<typeof Radio> = () => (
    <>
     <Box component="div" sx={{ mb: 2 }}>
      <Typography variant='h4'>Radio group</Typography>
      <Typography variant='body1'>RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard accessibility to the group.</Typography>
    </Box>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<RadioBox />} label="Female" />
        <FormControlLabel value="male" control={<RadioBox />} label="Male" />
        <FormControlLabel value="other" control={<RadioBox />} label="Other" />
      </RadioGroup>
    </FormControl>
  </>
);

Group.storyName = 'RadioBox Group';

export const Direction: ComponentStory<typeof Radio> = () => (
    <>
     <Box component="div" sx={{ mb: 2 }}>
      <Typography variant='h4'>Direction</Typography>
      <Typography variant='body1'>To lay out the buttons horizontally, set the row prop:</Typography>
    </Box>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<RadioBox />} label="Female" />
        <FormControlLabel value="male" control={<RadioBox />} label="Male" />
        <FormControlLabel value="other" control={<RadioBox />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<RadioBox />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
  </>
);

Direction.storyName = 'RadioBox Direction';


export const Color: ComponentStory<typeof Radio> = () => {
   const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return(
    <>
     <Box component="div" sx={{ mb: 2 }}>
      <Typography variant='h4'>Color</Typography>
    </Box>
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
      <RadioBox {...controlProps('a')} />
      <RadioBox {...controlProps('b')} color="secondary" />
      <RadioBox {...controlProps('c')} color="success" />
      <RadioBox {...controlProps('d')} color="default" />
      <RadioBox
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
      </RadioGroup>
    </FormControl>
  </>
)};

Color.storyName = 'RadioBox Color';
