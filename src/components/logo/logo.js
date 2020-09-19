import React from 'react';
import './logo.scss';
import { ReactComponent as LogoIcon } from './logo.svg';

export default function Logo() {

    return (
        <div className="logo-box">
            <LogoIcon/>
        </div>
    );

}