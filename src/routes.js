import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Application from './views/application/application';
import MainLayout from './layouts/mainLayout';
import StartApplication from 'views/application/startApplication';

export default function Routes() {

    return (
        <Router>
            <div>
                <Switch>
                    <MainLayout>
                        //Additional links for github page
                        <Route exact path={["/", "/start", "/application", "/application/start"]}>
                            <StartApplication />
                        </Route>
                        <Route path={["/application/customer-information", "/application/user-information"]}>
                            <Application />
                        </Route>
                    </MainLayout>
                </Switch>
            </div>
        </Router>
    );
}