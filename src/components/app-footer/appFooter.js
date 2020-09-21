import React from 'react';
import './appFooter.scss';

export default function AppFooter() {

    return (
        <div className="app-footer container-md">

            <div className="row">
                <div className="col company-info">
                    <label>
                        <img src={`${process.env.PUBLIC_URL}/icons/logo/logo-company-name.svg`} />
                    </label>
                    <p>
                        AR Mərkəzi Bankı tərəfindən "Azər-Türk Bank" ASC-yə 29.06.1995-ci il tarixində 234№-li lisenziya verilib
                    </p>
                    <p>
                        © 2002-2020 Azər-Türk Bank

                    </p>
                </div>
                <div className="col company-contacts">
                    <label>
                        BİZİMLƏ ƏLAQƏ
                    </label>
                    <p>
                        +994 12 945 Azərbaycan daxilində zəng edin <br/>
                        +994 12 945 Xaricdən gələn zənglər üçün
                    </p>
                </div>
                <div className="col company-social-media">
                    <label>
                        BİZİ İZLƏYİN
                    </label>
                    <p>
                        Xəbərlərimizdən ilk olaraq Siz xəbərdar olun!
                    </p>
                    <ul className="social-links list-group list-group-horizontal">
                        <li className="list-group-item">
                            <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/icons/social/fb.svg`} />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/icons/social/instagram.svg`} />
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/icons/social/linkedin.svg`} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}