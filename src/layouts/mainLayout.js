import AppFooter from 'components/app-footer/appFooter';
import React from 'react';
import AppHeader from '../components/app-header/appHeader';
import './mainLayout.scss';

export default function MainLayout(props) {

    return (
        <div className="app-wrapper container">
            <AppHeader/>

            {props.children}

            <AppFooter/>
        </div>
    );
}