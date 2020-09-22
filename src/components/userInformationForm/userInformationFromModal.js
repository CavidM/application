import React from 'react';
import './userInformationFormModal.scss';

export default function UserInformationFormModal({ showUserFormModal, setShowUserFormModal, children }) {

    return (
        <div class={`modal fade ${showUserFormModal}`}
            style={{ display: showUserFormModal ? 'block' : 'none' }}
            id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">İstifadəçi məlumatları</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                            onClick={() => { setShowUserFormModal('') }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}