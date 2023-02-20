
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import * as React from 'react';
import {Globals_context} from "../context_globals_logrec/globals_context";
import LogrecForm from "./LogrecForm";
import LogrecList from "./LogrecList";
import Settings from "../settings_page/Settings";


const LogWork: React.FC = () => {

    const { global_props, global_dispatch } = React.useContext(Globals_context);

    const [state, setState] = React.useState({

    });

    return (

      <IonContent>

          <div className="App"
               style={{zIndex:20}}
          >
              <LogrecForm/>
              <LogrecList/>
              <div className="rules">
                  <p>Double click - complete log </p>
                  <p>X - delete log</p>
              </div>

          </div>



      </IonContent>

  );
};

export default LogWork;
