import * as React from 'react';
import { NextPage } from "next";

import { Box, Grid, Tabs, Tab, Divider } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import theme from "../utils/theme";
import TabPanel from '../components/TabPanel';
import About from './about';

function tabProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

const NavigationInfo: NextPage = () => {
   const [value, setValue] = React.useState(0);
   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   }

   const matches_lgSize = useMediaQuery(theme.breakpoints.down('lg'));
   const matches_mobile = useMediaQuery(theme.breakpoints.down('sm'));

   function onReady() {
      console.log('is ready');
   }

   return (
      <Grid
         sx={{
            display: "flex",
            flexDirection: "column",
            pt: theme.spacing(2),
         }}
      >
         <Box sx={{ width: '100%', pb: theme.spacing(3) }}>
            <Divider sx={{ 'display': matches_lgSize ? '' : 'none' }} />
            <Tabs
               value={value}
               onChange={handleChange}
               textColor="inherit"
               variant={matches_mobile ? "scrollable" : "fullWidth"}
               aria-label="tabs"
               allowScrollButtonsMobile
            >
               <Tab label="Sobre" defaultChecked {...tabProps(0)} />
               <Tab label="Competencias" {...tabProps(1)} />
               <Tab label="Projetos" {...tabProps(2)} />
               <Tab label="Experiência" {...tabProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
               <About></About>
            </TabPanel>
         </Box>
      </Grid>
   );
}

export default NavigationInfo;