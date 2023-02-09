
import * as React from "react";

import { globals_crud_names } from "./globals_crud_names";
import {AppContext} from "./Globals_providers";

const Globals_counter = () => {
  const { global_props, dispatch } = React.useContext(AppContext);

  return (
    <div style={{ paddingLeft:'4px', border:'2px solid teal'}} >
      <button
        onClick={()=>{
          dispatch({
                  type: globals_crud_names.Add,
              // data_set:{a:1,b:2}
          });
        }}
      >
        click
      </button>
      {global_props.shoppingCart}
    </div>
  );
};

export default Globals_counter;
