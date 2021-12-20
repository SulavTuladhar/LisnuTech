//  Root component and supplying contnent to index.js
import React from "react";
import {Header} from './common/header/Header.components'
import { AppRouting } from "./App.routing";

const App = (args) => {
    return (
        <div>
            <AppRouting />
        </div>
    )
}

export default App;