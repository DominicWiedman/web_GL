import './App.css';
import {inject, observer} from "mobx-react";

import React from "react";
import {useRoutes} from "./routes";
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from "./components/NavBar";


// const App = inject('store') (observer((props) => {
//     console.log(props.store.count)
//     return (
//         <div className="App">
//             <div>{props.store.count}</div>
//             <button  onClick={
//                 props.store.increment
//             }>incremen</button>
//         </div>
//     );
// }));
// export default App;

export default function  Homer(){
    const token = localStorage.getItem('token')
    const routes = useRoutes(token != null)

    return(
        <Router>
            <NavBar/>
            <div>{routes}</div>
        </Router>
    )
}


