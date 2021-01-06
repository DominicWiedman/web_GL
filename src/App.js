import './App.css';
import {inject, observer} from "mobx-react";

import React from "react";


const App = inject('store') (observer((props) => {
    console.log(props.store.count)
    return (
        <div className="App">
            <div>{props.store.count}</div>
            <button  onClick={
                props.store.increment
            }>incremen</button>
        </div>
    );
}));
export default App;



