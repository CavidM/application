import React from 'react';
import Logo from 'components/logo/logo';
import AppLanguageBar from 'components/app-language-bar/appLanguageBar';

export default function AppHeader() {

    return (
        <React.Fragment>

            <div className="row justify-content-between">
                <div className="col-auto">
                    <Logo />
                </div>
                <div className="col-auto">
                    <AppLanguageBar />
                </div>
            </div>



        </React.Fragment>
    );
}