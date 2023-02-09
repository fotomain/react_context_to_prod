import * as React from "react";
import { Context } from "./context";

export default function() {
    const [todo, setTodo] = React.useState("");
    const { state, dispatch } = React.useContext(Context);
    let handleSubmit = (event: React.MouseEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch({ type: "ADD_TODO", payload: { text: todo } });
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
