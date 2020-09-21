import AppFooter from 'components/app-footer/appFooter';
import AppNotification from 'components/app-notification/appNotification';
import React from 'react';
import AppHeader from '../components/app-header/appHeader';
import './mainLayout.scss';

export default function MainLayout(props) {

    return (
        <div className="app-wrapper container-md">
            <AppHeader />

            <AppNotification/>

            {props.children}

            <AppFooter />
        </div>
    );
}