import React from 'react';
import { useForm } from "react-hook-form";
import { saveUser } from 'store/actions/userAction';
import UserInformationFormHtml from './userInformationForm.html';

export default function UserInformationForm({setShowUserFormModal}) {

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async data => {
        let res = await saveUser(data);

        if(res instanceof Error) {
            return;
        }

        setShowUserFormModal('');
        reset();
    };

    return (
        <UserInformationFormHtml
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
        />
    );
}