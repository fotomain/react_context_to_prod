
import Globals_counter from "./globals_counter";
import Globals_settings from "./Globals_settings";
import {GlobalsProvider} from "./Globals_providers";

export default function Test_Globals() {
    return (
        <GlobalsProvider>
            <Globals_counter />
            <Globals_settings />
        </GlobalsProvider>
    );
}
