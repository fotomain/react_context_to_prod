
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Settings_Part_Application from "./Settings_Part_Application";
import {a11yProps, TabPanel} from "./MUITools";
import { styled } from '@mui/material/styles';

const Settings: React.FC = () => {


    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    interface StyledTabsProps {
        children?: React.ReactNode;
        value: number;
        orientation:"horizontal" | "vertical" | undefined;
        variant:"standard" | "scrollable" | "fullWidth" | undefined;
        onChange: (event: React.SyntheticEvent, newValue: number) => void;
    }

    const StyledTabs = styled((props: StyledTabsProps) => (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
    ))({




        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            // minWidth: 15,
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            minWidth: 5,
            width: '100%',
            backgroundColor: 'green',
        },
    });

    return (


      <div id={'main'}
          style={{

              display:'flex',
              // step2
              flexDirection:'column',
              justifyContent:'space-between',
              alignItems:'top',

          }}
      >
          <Box id={'box1'}
              sx={{
                  flexGrow: 1,

                  bgcolor: 'background.paper',
                  height: 500,
              }}
          >

              <Box id={'box2'}
              >
              <StyledTabs

                  // orientation='vertical'
                  // variant="scrollable"
                  // step1
                  orientation='horizontal'
                  variant="standard"

                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs"
                  sx={{
                      minWidth:'150px', borderRight: 1, borderColor: 'divider'
                  }}

              >
                  <Tab sx={{alignItems: 'start',}} label="Application" {...a11yProps(0)} />
                  <Tab sx={{alignItems: 'start',}} label="Device" {...a11yProps(2)} />
                  <Tab sx={{alignItems: 'start',}} label="Post List" {...a11yProps(3)} />
                  <Tab sx={{alignItems: 'start',}} label="Post Card" {...a11yProps(4)} />
                  <Tab sx={{alignItems: 'start',}} label="Types List" {...a11yProps(5)} />
                  {/*<Tab label="Item Six" {...a11yProps(6)} />*/}
                  {/*<Tab label="Item Seven" {...a11yProps(7)} />*/}
              </StyledTabs>
              </Box>

              <TabPanel value={value} index={0}>
                  <Box sx={{paddingLeft: '15px',}}>
                      <Settings_Part_Application/>
                  </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                  Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                  Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                  Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                  Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                  Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                  Item Seven
              </TabPanel>
          </Box>

      </div>

  );
};

export default Settings;
