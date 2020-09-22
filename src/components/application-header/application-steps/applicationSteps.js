import React from 'react';
import './applicationSteps.scss';
import {
    useLocation
} from "react-router-dom";


const steps = {
    'customer-information': 'MÜŞTƏRİ MƏLUMATI',
    'user-information': 'İSTİFADƏÇİ MƏLUMATI',
    'rights': 'HÜQUQLAR',
    'confirmation': 'TƏSDİQ'
};

export default function ApplicationSteps() {

    const location = useLocation();
    const page = location.pathname.split('/')[2];

    let pageComplete = 'complete';

    const stepsComponent = Object.keys(steps).map((step, i) => {

        let current = '';

        if (page === step) {
            current = 'current';

            // Stop adding the "complete" class to further pages
            pageComplete = '';
        }

        return (
            <div className={`col step pl-0 pr-0 ${pageComplete} ${current}`} key={i}>
                <label>{steps[step]}</label>
                <div className="line"></div>
            </div>
        );
    });

    return (
        <React.Fragment>
            <h1 className="application-title text-center">ƏRİZƏ</h1>
            <h2 className="application-title-label text-center"> İnternet Bankçılıq xidmətinə qoşulma </h2>

            <div className="row steps text-center">
                
                {stepsComponent}

            </div>
        </React.Fragment>
    );
}