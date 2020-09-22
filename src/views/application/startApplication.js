import React from 'react';
import {useHistory} from 'react-router-dom';

export default function StartApplication() {

    const history = useHistory();

    const style = {
        margin: "150px auto 200px"
    }

    return (
        <div className="start-application-wrapper text-center" style={style}>
            <button className="btn btn-primary" onClick={() => history.push('/application/customer-information')}>
                İnternet Bankçılıq xidmətinə qoşulun
            </button>
        </div>
    );
}