import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ApplicationSteps from 'components/application-header/application-steps/applicationSteps';
import CustomerInformationForm from 'components/customer-information-form/customerInformationForm';
import UserInformation from 'components/user-information/userInformation';

export default function Application() {

    return (
        <div>
            <ApplicationSteps/>
            <Switch>
                <Route path="/application/customer-information">
                    <CustomerInformationForm/>
                </Route>
                <Route path="/application/user-information">
                    <UserInformation/>
                </Route>
            </Switch>
        </div>
    );
}