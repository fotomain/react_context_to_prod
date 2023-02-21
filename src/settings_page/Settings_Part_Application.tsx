
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {
    Box,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel, Radio,
    RadioGroup,
    Switch, TextareaAutosize,
    TextField
} from "@mui/material";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import {a11yProps, TabPanel} from "./MUITools";
import {Globals_context} from "../context_globals_logrec/globals_context";
import {useState} from "react";
import Settings_Part_Background from "./Settings_Part_Background";

const Settings_Part_Application: React.FC = () => {

    const { global_props, global_dispatch } = React.useContext(Globals_context);

    const [tab_value, set_tab_value] = React.useState(0);

    const [state, setState] = React.useState({
        'current_application.title.text':  global_props.current_application.title.text,
        'current_application.title.mode_position':  global_props.current_application.title.mode_position,
        'current_application.title.mode_show':  global_props.current_application.title.mode_show,
        // is_disabled:true,
        // 'My Posts App',
    });



    const onChangeInput = (event: any) => {
        const tname = event.target.name
        const tvalue = event.target.value
        setState({
            ...state,
            [tname]: tvalue
        });

        if('current_application.title.text'==tname){
            const tdata = global_props.current_application
            tdata.title.text = tvalue
            global_dispatch({
                type: 'SETTER_APPLICATION',
                global_new_data:{current_application:tdata},
            })
        }

    };

    const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        set_tab_value(newValue);
    };


    function onChange_left_right(event:any) {
        console.log("=== onChange_left_right")
        let t_ev_type = (event.target.value).trim()
        console.log(t_ev_type)
        if(t_ev_type=="left"){
            console.log('=== go left' )
            setState({...state, ['current_application.title.mode_position']: 'left'})
        }
        else{
            console.log('=== go right' )
            setState({...state, ['current_application.title.mode_position']: 'right'})
        }

        const tdata = global_props.current_application
        tdata.title.mode_position = t_ev_type
        global_dispatch({
            type: 'SETTER_APPLICATION',
            global_new_data:{current_application:tdata},
        })

    }



    return (
<div>
      <Box>


          <Tabs value={tab_value} onChange={onChangeTab} aria-label="icon label tabs example">
              <Tab icon={<FavoriteIcon />} label="Title"  {...a11yProps(0)} />
              <Tab icon={<WallpaperIcon />} label="Bacgground"  {...a11yProps(1)} />
              <Tab icon={<PersonPinIcon />} label="About"  {...a11yProps(2)}  />
              <Tab icon={<PersonPinIcon />} label="Globals"  {...a11yProps(3)}  />
          </Tabs>

          {/*id={'panel1'}*/}
          <TabPanel value={tab_value} index={3}  >
              <Box id={'box_state'} sx={{marginLeft:'24px' ,
                  marginTop:'24px',
                  display:'flex',
                  flexDirection:"row",
                  flexWrap:"wrap",

              }} >
              <p>global_props.current_application.title.text {global_props.current_application.title.text}</p>
              <p>global_props.current_application.title.mode_position {global_props.current_application.title.mode_position}</p>
              <p>global_props.current_application.title.mode_position {global_props.current_application.title.mode_position}</p>
                  <Box sx={{p:'24px'}}>

                      <TextareaAutosize
                          aria-label="empty textarea"
                          placeholder="Empty"
                          style={{ width: 500 }}
                          value={"global_props = " + JSON.stringify(global_props) }
                      />

                  </Box>
              </Box>

          </TabPanel>
          <TabPanel value={tab_value} index={0}  >
              <Box  sx={{marginLeft:'24px' , marginTop:'24px' }} >

              <FormControl  component="fieldset" variant="standard">
                  <FormLabel component="legend">Title settings</FormLabel>
                  <FormGroup>

                      <Divider style={{marginTop:'10px', marginBottom:'10px'}}/>

                      <FormControlLabel
                          control={
                              // <Switch checked={state.mode_show} onChange={handleChange} name="slides_mirrored" />
                              <Switch checked={state['current_application.title.mode_show']}
                                  onChange={(e)=>{
                                  console.log(e)
                                  setState({...state, 'current_application.title.mode_show': !state['current_application.title.mode_show']})
                              }}  />
                          }
                          label="Show"
                      />

                      <fieldset disabled={!state['current_application.title.mode_show']}
                                style={
                                    {
                                        border:'none',
                                        display:'flex',
                                        flexDirection:'column',
                                        justifyContent:'top',
                                        alignItems:'left',
                                    }
                                }
                      >

                          <Divider style={{marginTop:'10px', marginBottom:'10px'}}/>

                                  <TextField

                                      required
                                      variant={'standard'}
                                      id="outlined-required"
                                      label="Title text"
                                      name={'current_application.title.text'}
                                      value={state['current_application.title.text']}
                                      onChange={(e)=>onChangeInput(e)}
                                  />

                          <FormControl style={{marginTop:'4px'}}component="fieldset">
                              <RadioGroup row aria-label="gender" name="row-radio-buttons-group"
                                          onChange={onChange_left_right}
                                          // defaultValue={state['current_application.title.mode_position']}

                                      value={state['current_application.title.mode_position']}
                              >
                                  <FormLabel sx={{marginTop:'10px', marginRight:'7px'}} component="legend">show at </FormLabel>
                                  <FormControlLabel labelPlacement="end" value="left"
                                        control={
                                          <Radio
                                              sx={{
                                                  '&, &.Mui-checked': {
                                                      color: (state['current_application.title.mode_show'])?'primary':'gray',
                                                  },
                                              }}
                                          />}
                                                    label="left"
                                  />
                                  <FormControlLabel labelPlacement="end" value="right"
                                        control={
                                            <Radio
                                                sx={{
                                                    '&, &.Mui-checked': {
                                                        color: (state['current_application.title.mode_show'])?'primary':'gray',
                                                    },
                                                }}
                                            />}

                                                    label="right" />
                                  {/*<FormControlLabel*/}
                                  {/*    value="disabled"*/}
                                  {/*    disabled*/}
                                  {/*    control={<Radio />}*/}
                                  {/*    label="other"/>*/}
                              </RadioGroup>

                          </FormControl>
                      </fieldset>

                    </FormGroup>

              </FormControl>

              </Box>

          </TabPanel>
          <TabPanel value={tab_value} index={1} >

              <Box  sx={{marginLeft:'24px' , marginTop:'24px' }} >
                  <Settings_Part_Background/>
              </Box>

          </TabPanel>
          <TabPanel value={tab_value} index={2}  >
              Item Three
          </TabPanel>



      </Box>
</div>
  );
};

export default Settings_Part_Application;
