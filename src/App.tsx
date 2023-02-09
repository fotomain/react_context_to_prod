


// git remote add origin https://github.com/fotomain/vit_ionic_play1.git
// ionic build
// ionic build--prod; ionic cap copy --prod; ionic serve
// npm i swiper
//=== DOC COOL https://thetechbee.medium.com/creating-a-slide-using-swiper-js-in-ionic-react-in-5-steps-2022-mobile-app-development-for-52f4cb80d2ce

// npm install --save-dev @types/styled-components-react-native

import React, {ReactNode} from 'react';

import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonContent, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Test_Globals from "./z_context_globals/Test_Globals";

//start_globals_from_todo

import { Provider } from "./context_globals_todo/context";
import TodoList from "./context_globals_todo/TodoList";
import TodoForm from "./context_globals_todo/TodoForm";


setupIonicReact();


const App: React.FC = () => (
  <IonApp>

      <IonContent fullscreen>

          eturn (
          <Provider>
              <div className="App">
                  <TodoForm />
                  <TodoList />
                  <div className="rules">
                      <p>Double click - complete task </p>
                      <p>X - delete task</p>
                  </div>
              </div>
          </Provider>

          {/*<TodoProvider>*/}
          {/*    <main className='App'>*/}
          {/*        <h1>My Todos</h1>*/}
          {/*        <AddTodo />*/}
          {/*        <Todos />*/}
          {/*    </main>*/}
          {/*</TodoProvider>*/}

          {/*<Home />*/}

          {/*<App_To_Do/>*/}

          {/*globals start*/}
          {/*<Test_Globals/>*/}

      </IonContent>
  </IonApp>
);

export default App;
