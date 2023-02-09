import * as React from "react";
import { Context } from "./context";

export default function() {
    const [todo, setTodo] = React.useState("");
    const { global_props, global_dispatch } = React.useContext(Context);
    let handleSubmit = (event: React.MouseEvent<HTMLFormElement>): void => {
        event.preventDefault();
        global_dispatch({ type: "ADD_TODO",
            global_new_data: {
                text: todo,
                id: (Math.random()*10000).toString(),
                completed: false,
                is_active: false,
            }
        }
        );
        setTodo("");
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={event => setTodo(event.target.value)} />
            </form>
        </div>
    );
}
