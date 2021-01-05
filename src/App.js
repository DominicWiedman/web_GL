import './App.css';
import {inject, observer} from "mobx-react";

import React from "react";
import counterStore from "./CounterStore";


const App = observer(() => {
    return (
        <div className="App">
            <div>{counterStore.count}</div>
            <button  onClick={() => {
                counterStore.increment()
            }}>increment</button>

        </div>
    );
});

export default App;

