
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {Box, TextField} from "@mui/material";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import {a11yProps, TabPanel} from "./MUITools";

const Settings_Application: React.FC = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
<div>
      <Box>

          <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
              <Tab icon={<FavoriteIcon />} label="NAME"  {...a11yProps(0)} />
              <Tab icon={<WallpaperIcon />} label="BACKGROUND"  {...a11yProps(1)} />
              <Tab icon={<PersonPinIcon />} label="ABOUT"  {...a11yProps(2)}  />
          </Tabs>

          <TabPanel value={value} index={0}  >

              <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
              />
          </TabPanel>
          <TabPanel value={value} index={1} >
              Item Two
          </TabPanel>
          <TabPanel value={value} index={2}  >
              Item Three
          </TabPanel>

      </Box>
</div>
  );
};

export default Settings_Application;
