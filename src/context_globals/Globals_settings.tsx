

import React from "react";

import {globals_crud_names} from "./globals_crud_names";
import {AppContext} from "./Globals_providers";

const Globals_settings = () => {
    const [form, setForm] = React.useState({
        name: "",
        price: '0'
    });
    const { global_props ,dispatch } = React.useContext(AppContext);

    const handleForm = (type: string, value: string) => {
        setForm(form => ({
            ...form,
            [type]: value
        }));
    };

    const createProduct = () => {
        dispatch({
            type: globals_crud_names.Create,
            payload: {
                line_guid: Math.round(Math.random() * 10000000000000).toString(),
                line_name: form.name,
                line_value: form.price
            }
        });
    };

    const deleteProduct = (line_guid: string) => {
        dispatch({
            type: globals_crud_names.Delete,
            payload: {
                line_guid,
            }
        })
    }

    return (
        <div style={{border:'2px solid teal'}}>
            <input
                value={form.name}
                onChange={e => {
                    handleForm("name", e.target.value);
                }}
                placeholder="Name"
            />
            <input
                value={form.price}
                type="text"
                onChange={e => {
                    handleForm("price", e.target.value);
                }}
                placeholder="Price"
            />
            <button onClick={createProduct}>create</button>
            <div style={{ marginTop: 20 }}>
                {global_props.settings_array.map((c, ii) => (
                    <div key={ii}>
                        <span>{c.line_name} --- </span>

                        <span>{c.line_value} --- </span>
                        <button style={{backgroundColor:c.line_value}} onClick={() => deleteProduct(c.line_guid)}>delete</button>
                        <span> --- {c.line_guid} --- </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Globals_settings;
