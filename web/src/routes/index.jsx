import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRotes } from "./auth.routes";


export function Routes() {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}