
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import * as React from 'react';
import {Globals_context} from "../context_globals_logrec/globals_context";


const Comp0: React.FC = () => {

    const { global_props, global_dispatch } = React.useContext(Globals_context);

    const [state, setState] = React.useState({

    });

    return (

    <IonPage>
      <IonHeader>

        <IonToolbar>
          <IonTitle>Comp0</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>


      </IonContent>
    </IonPage>
  );
};

export default Comp0;
