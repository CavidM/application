import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UsersHtml from './users.html';
import {
    useHistory
} from "react-router-dom";

export default function Users() {

    let history = useHistory();
    let [showUserFormModal, setShowUserFormModal] = useState('');

    const users = useSelector(state => state.users);

    const goBack = () => {
        history.goBack();
    }

    return (
        <UsersHtml
            goBack={goBack}
            showUserFormModal={showUserFormModal}
            setShowUserFormModal={setShowUserFormModal}
            users={users}
        />
    );
}