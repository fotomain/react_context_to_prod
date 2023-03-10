import * as React from "react";
import { Globals_context } from "../context_globals_logrec/globals_context";

export default function() {
    const [logrec, setLogrec] = React.useState("");
    const { global_props, global_dispatch } = React.useContext(Globals_context);
    let handleSubmit = (event: React.MouseEvent<HTMLFormElement>): void => {
        event.preventDefault();
        global_dispatch({ type: "ADD_TODO",
            global_new_data: {
                text: logrec,
                id: (Math.random()*10000).toString(),
                completed: false,
                is_active: false,
            }
        }
        );
        setLogrec("");
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input value={logrec} onChange={event => setLogrec(event.target.value)} />
            </form>
        </div>
    );
}
