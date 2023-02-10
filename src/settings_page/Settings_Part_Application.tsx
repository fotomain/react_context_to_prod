
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
import {Context} from "../context_globals_logrec/context";

const Settings_Part_Application: React.FC = () => {

    const { global_props, global_dispatch } = React.useContext(Context);

    const [tab_value, set_tab_value] = React.useState(0);

    const [state, setState] = React.useState({
        'current_application.name':  global_props.current_application.name,
        // 'My Posts App',
    });


    const onChangeInput = (event: any) => {
        const tname = event.target.name
        const tvalue = event.target.value
        setState({
            ...state,
            [tname]: tvalue
        });

        if('current_application.name'==tname){
            const tdata = global_props.current_application
            tdata.name = tvalue
            global_dispatch({
                type: 'SETTER_APPLICATION',
                global_new_data:{current_application:tdata},
            })
        }

    };

    const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        set_tab_value(newValue);
    };


    return (
<div>
      <Box>

          <p>global_props.current_application.name {global_props.current_application.name}</p>

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
                  name={'current_application.name'}
                  value={state['current_application.name']}
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
