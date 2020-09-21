import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ApplicationSteps from 'components/application-header/application-steps/applicationSteps';
import CustomerInformationForm from 'components/customer-information-form/customerInformationForm';
import UserInformation from 'components/user-information/userInformation';
import './application.scss';

export default function Application() {

    return (
        <div className="row justify-content-center">
            <div className="col-10">
                <ApplicationSteps />
                <Switch>
                    {/* <div className="step-container"> */}
                        <Route path="/application/customer-information">
                            <CustomerInformationForm />
                        </Route>
                        <Route path="/application/user-information">
                            <UserInformation />
                        </Route>
                    {/* </div> */}
                </Switch>
            </div>
        </div>
    );
}