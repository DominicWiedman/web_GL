import './App.css';
import {observer} from "mobx-react-lite";

import Counter from "./CounterStore"

import React from "react";

const App = observer(() => {

    return (
        <div className="App">
            <div>{Counter.count}</div>
            <button  onClick={() => {
                Counter.increment()
            }}>incremet</button>

        </div>
    );
});

export default App;

