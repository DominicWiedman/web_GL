import {Redirect, Switch, Route} from "react-router-dom";
import {AuthPage} from "./pages/Auth/AuthPage";
import {HomePage} from "./pages/HomePage";
import React from "react";
import {TaskPage} from "./pages/Tasks/TaskPage";
import {RegPage} from "./pages/Auth/RegPage";
import {IsAuthPage} from "./pages/Auth/IsAuthPage";


export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/tasks' component={TaskPage} exact>
                    {/*<Route path={"/"} component={TaskPage}/>*/}
                    {/*<Route path={"/show/:id"} component={TaskPage}/>*/}
                </Route>
                <Route path='/home' exact>
                    <HomePage/>
                </Route>
                <Route path='/login' exact>
                    <IsAuthPage/>
                </Route>
                <Redirect to='/tasks'/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/home' exact>
                <HomePage/>
            </Route>
            <Route path='/reg' exact>
                <RegPage/>
            </Route>
            <Route path='/login' exact>
                <AuthPage/>
            </Route>
            <Route path='/tasks' exact>
                <AuthPage/>
            </Route>
            <Redirect to='/home'/>
        </Switch>
    )
}