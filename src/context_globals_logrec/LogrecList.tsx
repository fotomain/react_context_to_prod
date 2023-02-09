// codesandbox typescript react context reducer logrec app
import * as React from "react";

import { Context } from "./context";
const LogrecList: React.FC<{}> = () => {
    const { global_props, global_dispatch } = React.useContext(Context);
    return (
        <div className="gridItems">

            <br/>
            <div>{global_props.current_user.email}</div>
            <br/>
            <br/>
            <button onClick={()=>{
                const tu = global_props.current_user
                tu.email = 'new'+Date.now().toString()+'@nn.vv'
                global_dispatch({type: "SETTER_USER", global_new_data:{user:tu}})
            }}>CHANGE{global_props.current_user.email}</button>
            <br/>

            {global_props.logrecs.map(item => {
                console.log(item);
                return (
                    <div
                        key={item.id}
                        onDoubleClick={() => {
                            console.log("=== global_new_data", item)
                            global_dispatch({type: "TOGGLE_TODO", global_new_data: item})
                        }
                        }
                    >
            <div
                 style={{backgroundColor: (item.completed) ? "yellow":"pink"}}
            >
              {item.text}
            </div>
                        <i onClick={() => global_dispatch({ type: "DELETE_TODO", global_new_data: item })}>
                            X
                        </i>
                    </div>
                );
            })}
        </div>
    );
};

export default LogrecList;
