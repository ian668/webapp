import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Lottery from "./components/lottery/Lottery";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/lottery" component={Lottery} />
            </Switch>
        </Router>
    );
};


export default Routes;