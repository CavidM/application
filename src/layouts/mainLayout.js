import React from 'react';
import AppHeader from '../components/app-header/appHeader';

export default function MainLayout(props) {

    return (
        <div className="app-wrapper">
            <AppHeader/>

            {props.children}
        </div>
    );
}