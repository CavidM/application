import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import TodoView from './views/todos/todoView';
import MainLayout from './layouts/mainLayout';

export default function Routes(props) {

    return (
        <Router>
            <div>
                <Switch>
                    <MainLayout>
                        <Route path="/todos">
                            <TodoView />
                        </Route>
                    </MainLayout>
                </Switch>
            </div>
        </Router>
    );
}