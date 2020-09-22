import React from 'react';
import './userInformationFormModal.scss';

export default function UserInformationFormModal({ showUserFormModal, setShowUserFormModal, children }) {

    return (
        <div className={`modal fade ${showUserFormModal}`}
            style={{ display: showUserFormModal ? 'block' : 'none' }}
            id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">İstifadəçi məlumatları</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={() => { setShowUserFormModal('') }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}