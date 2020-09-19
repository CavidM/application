import React from 'react';
import Select from 'react-select'
import './appLanguageBar.scss';

const langs = ['az'];

const options = langs.map(lang => ({
    value: lang,
    label: <div><img src={`${process.env.PUBLIC_URL}/icons/country/${lang}.svg`}></img><label className="lang-label">{`${lang.toUpperCase()}`}</label></div>
}))

export default function ApplanguageBar() {

    return (
        <div className="app-language-bar">
            <Select options={options}
                style={{ backgroundColor: "#F4F5F6" }}
                defaultValue={options[0]}
            />
        </div>
    );
}