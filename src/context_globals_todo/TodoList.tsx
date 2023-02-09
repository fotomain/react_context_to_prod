// codesandbox typescript react context reducer todo app
import * as React from "react";

import { Context } from "./context";
const TodoList: React.FC<{}> = () => {
    const { global_props, dispatch } = React.useContext(Context);
    return (
        <div className="gridItems">
            {global_props.todos.map(item => {
                console.log(item);
                return (
                    <div
                        key={item.id}
                        onDoubleClick={() => {
                            console.log("=== payload", item)
                            dispatch({type: "TOGGLE_TODO", payload: item})
                        }
                        }
                    >
            <div
                 style={{backgroundColor: (item.completed) ? "yellow":"pink"}}
            >
              {item.text}
            </div>
                        <i onClick={() => dispatch({ type: "DELETE_TODO", payload: item })}>
                            X
                        </i>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
