import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Series from "./Components/Series";



function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/series"><Series/></Route>
                <Route path="/movies"><Movies/></Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;