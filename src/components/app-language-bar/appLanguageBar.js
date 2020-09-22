import React from 'react';
import Select from 'react-select'
import './appLanguageBar.scss';

const langs = ['az', 'en'];

const options = langs.map(lang => ({
    value: lang,
    label: (
        <div className="options">
            <img
                alt={lang}
                src={`${process.env.PUBLIC_URL}/icons/country/${lang}.svg`}
                className="country-icon">
            </img>
            <label className="lang-label">{`${lang.toUpperCase()}`}</label>
        </div>
    )
}))

const indicatorSeparatorStyle = {
    display: 'none'
};

const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

export default function ApplanguageBar() {

    return (
        <div className="app-language-bar">
            <Select options={options}
                components={{ IndicatorSeparator }}
                style={{ backgroundColor: "#F4F5F6" }}
                defaultValue={options[0]}
                isSearchable={false}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary: '#F4F5F6',
                        neutral20: '#bfbfbf'
                    },
                })}
            />
        </div>
    );
}