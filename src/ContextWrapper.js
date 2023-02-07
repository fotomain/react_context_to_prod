import * as React from 'react'
import styled from 'styled-components';
import {initialize} from "workbox-google-analytics";
import {useState} from "react";



const CountContext = React.createContext();

const theme_default ={

    // https://icolorpalette.com/color-palette-generator/508089
    main_color:'#f34da5',
    // main_color:'#880057',
    // main_color:'palevioletred',
    // main_color:'teal',
    button_border_radius:'3px',

}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? props.theme.main_color : "white"};
  color: ${props => props.primary ? 'white' : props.theme.main_color};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: ${props => props.primary ? props.theme.main_color : props.theme.main_color};
  border-radius: 3px;
`;

const Input = styled.input`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? props.theme.main_color : "white"};
  color: ${props => props.primary ? 'white' : props.theme.main_color};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: ${props => props.primary ? props.theme.main_color : props.theme.main_color};
  border-radius: 3px;
`;

const globalsInitial = { count:0, status:'LOADING', fetch_data:null,
    user_guid:null,
    theme:theme_default,
}

function globalsReducer(globals, activity) {
    console.log("=== globals_activity",activity)
    switch (activity.type) {
        case 'set_main_color': {
            var t_theme = globals.theme
            t_theme = {...t_theme,...{main_color: activity.main_color}}
            return {...globals,...{theme: t_theme }}
        }
        case 'data_fetch_loading': {
            return {...globals,...{status:"LOADING" }}
        }
        case 'data_fetch_loaded': {
            return {...globals,...{status:"LOADED", fetch_data: activity.activity_data }}
        }
        case 'increment': {
            return {...globals, ...{count: globals.count + 1}}
        }
        case 'decrement': {
            return {...globals, ...{count: globals.count - 1}}
        }
        default: {
            throw new Error(`=== Unhandled activity type: ${activity}`)
        }
    }
}

const  ApiRequests = async (props) =>{


    let [res1_local, res1_global] = await Promise.all([
        //=== LOCAL USERS
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then((response) => {
                console.log(response)
                return response
            })
            .then((json) => {
                    console.log('=== json', json)
                    console.log('=== props', props);

                    if(undefined == props.item_id  || (-1 == props.item_id)) {
                        return {ok:true, json:json};
                    }
                    return {ok:true, json:json[props.item_id]};
                }

            )
        ,
        //=== GLOBAL USERS
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then((response) => {
                console.log(response)
                return response
            })
            .then((json) => {
                    console.log('=== json', json)
                    console.log('=== props', props);

                    if(undefined == props.item_id  || (-1 == props.item_id)) {
                        return {ok:true, json:json};
                    }
                    return {ok:true, json:json[props.item_id]};
                }

            )
    ]);

    console.log("=== res1_local, res1_global")
    console.log(res1_local, res1_global)

    // if(res1_global NOT CONTAIN res1_local)
    //     SOME OPTIONS CLOSED = NOT SYNC DATA TO SERVER

    return res1_local;

}




const CountProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(globalsReducer, globalsInitial)
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context

    React.useEffect(() => {
        dispatch( {type:'data_fetch_loading', status: 'LOADING' }
        );

        // (async (): Promise<void> => {
        (async () => {
            const result = await ApiRequests({item_id: state.count});
            if (result.ok) {
                console.log("=== result",result)
                dispatch({
                    type:'data_fetch_loaded',
                    status: 'LOADED',
                    activity_data: result.json,
                });
            } else {
                dispatch({ status: 'ERROR' });
            }
        })();
    }, [state.count]);


    const value = {state, dispatch}
    return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

export const CountConsumer = ({children}) => {
    return (
        <CountContext.Consumer>
            {context => {
                if (context === undefined) {
                    throw new Error('CountConsumer must be used within a CountProvider')
                }
                return children(context)
            }}
        </CountContext.Consumer>
    )
}

export const Counter = () => {

    const [local_color,set_local_color] = useState(theme_default.main_color)

    return (
        <CountConsumer>
            {({state: globals, dispatch}) => (
                <div>
                    <div>{globals.count}</div>
                    <div>{globals.status}</div>
                    <Button primary  {...globals}
                            onClick={() => dispatch({...globals,...{type: 'increment'}})}>
                        Increment
                    </Button>
                    <Button {...globals}
                            onClick={() => dispatch({...globals,...{type: 'decrement'}})}>
                        Decrement
                    </Button>
                    <Input {...globals}
                           value={local_color}
                           onChange={(e) => {
                               set_local_color(e.target.value)
                               dispatch({
                                   ...globals, ...
                                       {
                                           type: 'set_main_color',
                                           main_color: e.target.value,
                                       }
                               })
                           }
                           }
                    />
                    <br/>
                    <div>{JSON.stringify(globals.fetch_data)}</div>
                </div>
            )}
        </CountConsumer>
    )

}

export const CountDisplay = ()  =>  {
    const cont = React.useContext(CountContext)
    console.log("=== cont",cont)
    const {count,status,data} = cont
    return (
        <div>
            {/*<div>{cont.state.count}</div>*/}
            {/*<div>{cont.state.status}</div>*/}
        </div>
    )

}
export {CountProvider}