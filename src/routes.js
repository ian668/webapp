import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Lottery from "./components/lottery/Lottery";
import Gameselection from "./components/lottery/Gameselection";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/lottery" component={Lottery} />
                <Route exact path="/gameselection" component={Gameselection} />
            </Switch>
        </Router>
    );
};


export default Routes;