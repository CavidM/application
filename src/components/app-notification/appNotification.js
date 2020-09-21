import React from 'react';
import './appNotification.scss';
import {useSelector} from 'react-redux';
import { removeNotification } from 'store/actions/notificationAction';

let showNotification = false;

export default React.memo(function AppNotification() {

    const notification = useSelector(state => state.notification);

    if(notification.type.length === 0) {

        return null;
    }

    showNotification = true;

    setTimeout(() => {

        if(!showNotification) {
            return;
        }

        removeNotification();

        showNotification = false;
    }, 2500);

    return (
        <div>
            <div class={`alert alert-${notification.type} alert-dismissible fade show`} role="alert">
                <strong>{notification.message}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={removeNotification}>
                    <span aria-hidden="true">×</span>
                </button></div>
        </div>
    );
});