
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Settings_Application from "./Settings_Application";
import {a11yProps, TabPanel} from "./MUITools";

const Settings: React.FC = () => {


    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (

    <IonPage>
      <IonHeader>

        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
          <Box id={'box1'}
              sx={{ flexGrow: 1, display: 'flex',
                  bgcolor: 'background.paper',
                  height: 500 }}
          >
              <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                  <Tab label="Application" {...a11yProps(0)} />
                  <Tab label="Device" {...a11yProps(2)} />
                  <Tab label="Post List" {...a11yProps(3)} />
                  <Tab label="Post Card" {...a11yProps(4)} />
                  <Tab label="Types List" {...a11yProps(5)} />
                  {/*<Tab label="Item Six" {...a11yProps(6)} />*/}
                  {/*<Tab label="Item Seven" {...a11yProps(7)} />*/}
              </Tabs>
              <TabPanel value={value} index={0}>
                  <div>
                      <Settings_Application/>
                  </div>
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

      </IonContent>
    </IonPage>
  );
};

export default Settings;
