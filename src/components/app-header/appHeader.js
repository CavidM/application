import React from 'react';
import AppLanguageBar from 'components/app-language-bar/appLanguageBar';

export default function AppHeader() {

    return (
        <React.Fragment>

            <div className="row justify-content-between">
                <div className="col-auto">
                    <img src={`${process.env.PUBLIC_URL}/icons/logo/logo.svg`}/>
                </div>
                <div className="col-auto">
                    <AppLanguageBar />
                </div>
            </div>



        </React.Fragment>
    );
}