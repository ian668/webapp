import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Lottery from "./components/lottery/Lottery";
import Gameselection from "./components/lottery/Gameselection";
import Carts from "./components/lottery/Carts";
import Trace from "./components/lottery/Trace";
import Login from "./components/login/Login";
import Registered from "./components/login/Registered";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/lottery" component={Lottery} />
                <Route exact path="/gameselection" component={Gameselection} />
                <Route exact path="/carts" component={Carts} />
                <Route exact path="/trace" component={Trace} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registered" component={Registered} />
            </Switch>
        </Router>
    );
};


export default Routes;