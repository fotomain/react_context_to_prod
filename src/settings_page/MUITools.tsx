import * as React from "react";
import Box from "@mui/material/Box";

export interface TabPanelProps {
    // other?: any;
    children?: React.ReactNode;
    index: number;
    value: number;

    // id?:string;
}

export const TabPanel = (props: TabPanelProps) => {
    const {  children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (

                    children
 
            )}
        </div>
    );
}

export const a11yProps = (index: number) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
