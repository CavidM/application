import UserInformationForm from 'components/userInformationForm/userInformationForm';
import UserInformationFormModal from 'components/userInformationForm/userInformationFormModal';
import React from 'react';
import './users.scss';

export default function UsersHtml({ goBack, showUserFormModal, setShowUserFormModal, users }) {

    const usersComponent = users.map((user, i) => {

        let userSmsOtp = user.userSmsOtp ? '✓' : '';

        return (
            // must be uuid
            <tr key={i}>
                <th>{++i}</th>
                <td>{user.userName}</td>
                <td>{user.userPhinCode}</td>
                <td>{user.userEmail}</td>
                <td>{user.userCodeName}</td>
                <td>{user.userPhone}</td>
                <td>
                    {userSmsOtp}
                </td>
            </tr>
        );
    })

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>S.A.A.</th>
                        <th>FİN Kod</th>
                        <th>Email</th>
                        <th>Kod sözü</th>
                        <th>Mobil nömrə</th>
                        <th>SMS OTP</th>
                    </tr>
                </thead>
                <tbody data-testid="users">
                    {usersComponent}
                </tbody>
            </table>

            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-light" data-testid="open-user-form-modal" onClick={() => { setShowUserFormModal('show') }}>
                        Yeni istifadəçi əlavə et
                    </button>
                </div>
            </div>

            <UserInformationFormModal showUserFormModal={showUserFormModal} setShowUserFormModal={setShowUserFormModal}>
                <UserInformationForm setShowUserFormModal={setShowUserFormModal} />
            </UserInformationFormModal>

            <div className="row justify-content-between step-navigation">
                <div className="col pl-0">
                    <button type="submit" className="btn btn-light float-left next-step" onClick={goBack}>Geri</button>
                </div>
                <div className="col pr-0">
                    <button type="submit" className="btn btn-primary float-right next-step">İrəli</button>
                </div>
            </div>
        </div>
    );
}