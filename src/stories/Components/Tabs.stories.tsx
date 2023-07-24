import React from 'react';
import { Tab, Tabs } from "../../components/Layout/Tabs";
import { Box, TabsProps, Typography } from '@mui/material';
import { TabPanelBaseProps } from "../../components/Layout/Tabs/types";

export default {
  title: 'Components/Tabs',
  component: Tabs,
  excludeStories: /.*Data$/,
};

const defaultArgs = {
  value: 0,
  variant: 'primary' as TabsProps['variant'],
};

const Template = () => <Tabs {...defaultArgs} />;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: TabPanelBaseProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export const Basic = () => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('HANDLECHANGE ==> ', newValue)
    setValue(newValue);
  };

    return(
      <Box sx={{ width: '100%' }}>
        <Typography variant='h4'>Basic Tabs</Typography>
        <Typography variant='body1'>Tabs make it easy to explore and switch between different views.</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab label="Item One" {...a11yProps(0)} onClick={(e) => handleChange(e,0) } />
            <Tab label="Item Two" {...a11yProps(1)} onClick={(e) => handleChange(e,1)} />
            <Tab label="Item Three" {...a11yProps(2)} onClick={(e) => handleChange(e,2)} />
          </Tabs>
            <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
        </Box>
      </Box>
    );
}

Basic.storyName = 'Basic Tabs';

