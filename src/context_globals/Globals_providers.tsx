

import React, {createContext, Dispatch, useReducer} from "react";
import {initialStateType, globals_initial_state_type, SettingsActions, ShoppingCartActions} from "./globals_crud_names";
import {productReducer, shoppingCartReducer} from "./globals_reducers";



//=== DOC https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
	// 		6C7A1103-B904-426C-AC0B-1A2D3A42221A

// BF6B5EED-08AD-4B50-AE9C-C911B70AF4FF	0C8D46A3-AA75-44AF-A113-A1BED2A9B14B	7CC0DC77-AB05-4F10-A47B-A85F6E29F2B7	2E69EB90-EFC7-4870-98DB-04C80A0EBB9C	0EF092AC-993A-4DB4-A59B-EDE5BD5348B0	0D00B1B5-40EC-494E-ABB7-51ABFBB913C0	645EF396-E2BF-4DCB-BC44-5DC5C9EF5C9A	144E6477-506E-4564-A33A-3AF784391AC7	1D2A31CC-C842-4B56-B37F-3E8DE1E2B5C1	8E43F603-D2BD-4B9A-AEC6-0C9DF7C9DAE8	A106F55A-78D7-448F-9CEA-2896CE5A15ED	13C1D33B-B7E2-4B1E-BF5D-8B6972579B5C

const initialState:initialStateType = {
    settings_array:[
        {
            line_name:'settings_user_color_primary',
            line_value:'#387FFA',
            line_guid:'7A59355D-32DC-42E0-B295-75B25ABFFAA8'
        }
        ,
        {
            line_name:'settings_user_color_text_over_primary',
            line_value:'floralwhite',
            line_guid:'3131ED5A-B960-4288-91F2-EB10E72D9BB9'
        }
        ,        {
            line_name:'settings_user_background_color',
            line_value:'#0D9D46',
            line_guid:'3D128875-0C2D-4701-B9E6-F5CB00452078'
        }
        ,
        {
            line_name:'settings_user_background_image',
            line_value:'',
            line_guid:'3D128875-0C2D-4701-B9E6-F5CB00452078'
        }
        ,
        {
            line_name:'settings_user_color_secondary',
            line_value:'#C258A1',
            line_guid:'2CBC3F5D-6B05-490E-BB1F-2F3DACF59BF3'
        }
        ,
        {
            line_name:'settings_user_color_tertiary',
            line_value:'#AD63FC',
            line_guid:'F3A0C1D9-F5FB-4B83-B493-2519AD69E0F8'
        }
        ,
        {
            line_name:'settings_user_color_quaternary',
            line_value:'#FA8124',
            line_guid:'934BD488-8BF9-472B-B454-FAF304FDD101'
        }
        ,
        {
            line_name:'settings_user_color_fivenary',
            line_value:'#FF5D5A',
            line_guid:'A3CD4128-6CEA-4C1F-B1CE-A52EFF954616'
        }
    ],
    shoppingCart:0
}


const mainReducer = (
    { settings_array, shoppingCart }: globals_initial_state_type,
    action: SettingsActions | ShoppingCartActions
) => ({
    settings_array: productReducer(settings_array, action),
    shoppingCart: shoppingCartReducer(shoppingCart, action)
});

interface Props {
    children?: JSX.Element|JSX.Element[]
}

const AppContext = createContext<{
    global_props: globals_initial_state_type;
    dispatch: Dispatch<SettingsActions | ShoppingCartActions>;
}>({
    global_props: initialState,
    dispatch: () => null
});


const GlobalsProvider: React.FC<Props> = ({ children }): (React.ReactElement)=> {
    const [global_props, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContext.Provider value={{ global_props, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export {GlobalsProvider,AppContext,initialState} ;
