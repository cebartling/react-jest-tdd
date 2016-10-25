import React, {Component} from "react";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import "./App.css";
import AppLayout from "./components/AppLayout";
import OptionsSelectionView from "./components/options/OptionsSelectionView";
import AppServerFormView from "./components/options/app_server/AppServerFormView";
import DatabaseServerFormView from "./components/options/database_server/DatabaseServerFormView";
import NoSqlSystemFormView from "./components/options/nosql_system/NoSqlSystemFormView";

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={AppLayout}>
                    <IndexRoute component={OptionsSelectionView}></IndexRoute>
                    <Route path="appServers" component={AppServerFormView}></Route>
                    <Route path="databaseServers" component={DatabaseServerFormView}></Route>
                    <Route path="noSqlServers" component={NoSqlSystemFormView}></Route>
                </Route>
            </Router>
        );
    }
}

export default App;

