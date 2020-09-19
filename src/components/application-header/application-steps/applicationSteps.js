import React from 'react';
import './applicationSteps.scss';

export default function ApplicationSteps() {

    return (
        <React.Fragment>
            <h1 className="application-title">ƏRİZƏ</h1>
            <h2 className="application-title-label"> İnternet Bankçılıq xidmətinə qoşulma </h2>

            <div className="row steps">
                <div className="col step pl-0 pr-0 complete">
                    <label>MÜŞTƏRİ MƏLUMATI</label>
                    <div className="line"></div>
                </div>
                <div className="col step pl-0 pr-0">
                    <label>İSTİFADƏÇİ MƏLUMATI</label>
                    <div className="line"></div>
                </div>
                <div className="col step pl-0 pr-0">
                    <label>HÜQUQLAR</label>
                    <div className="line"></div>
                </div>
                <div className="col step pl-0 pr-0">
                    <label>TƏSDİQ</label>
                    <div className="line"></div>
                </div>
            </div>
        </React.Fragment>
    );
}