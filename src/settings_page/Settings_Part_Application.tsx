
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

const Settings_Part_Application: React.FC = () => {

    const [tab_value, set_tab_value] = React.useState(0);

    const [state, setState] = React.useState({
        application_name: 'My Posts App',
    });




    const onChangeInput = (event: any) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        set_tab_value(newValue);
    };


    return (
<div>
      <Box>

          <Tabs value={tab_value} onChange={onChangeTab} aria-label="icon label tabs example">
              <Tab icon={<FavoriteIcon />} label="NAME"  {...a11yProps(0)} />
              <Tab icon={<WallpaperIcon />} label="BACKGROUND"  {...a11yProps(1)} />
              <Tab icon={<PersonPinIcon />} label="ABOUT"  {...a11yProps(2)}  />
          </Tabs>

          {/*id={'panel1'}*/}
          <TabPanel {...{paddingTop:'15px', paddingLeft:'5px'}}  value={tab_value} index={0}  >

              {/*{...{padding:10}}*/}
              <TextField

                  required
                  id="outlined-required"
                  label="Application name"
                  // defaultValue="My Posts App"
                  name={'application_name'}
                  value={state.application_name}
                  onChange={(e)=>onChangeInput(e)}
              />
              <TextField

                  required
                  id="outlined-required"
                  label="Application name"
                  defaultValue="Best Posts"
                  name={'application_name'}
                  value={state.application_name}
                  onChange={(e)=>onChangeInput(e)}
              />
              <TextField

                  required
                  id="outlined-required"
                  label="Application name"
                  defaultValue="Best Posts"
                  name={'application_name'}
                  value={state.application_name}
                  onChange={(e)=>onChangeInput(e)}
              />
              <TextField

                  required
                  id="outlined-required"
                  label="Application name"
                  defaultValue="Best Posts"
                  name={'application_name'}
                  value={state.application_name}
                  onChange={(e)=>onChangeInput(e)}
              />
          </TabPanel>
          <TabPanel value={tab_value} index={1} >
              Item Two
          </TabPanel>
          <TabPanel value={tab_value} index={2}  >
              Item Three
          </TabPanel>

      </Box>
</div>
  );
};

export default Settings_Part_Application;
