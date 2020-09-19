import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Application from './views/application/application';
import MainLayout from './layouts/mainLayout';

export default function Routes(props) {

    return (
        <Router>
            <div>
                <Switch>
                    <MainLayout>
                        <Route path="/application">
                            <Application />
                        </Route>
                    </MainLayout>
                </Switch>
            </div>
        </Router>
    );
}