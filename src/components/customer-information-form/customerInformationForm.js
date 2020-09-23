import React from 'react';
import './customerInformationForm.scss';
import {
    useHistory
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { saveCustomerInformation } from 'store/actions/customerInformationAction';
import CustomerInformationFormHtml from './customerInformationForm.html';


export default function CustomerInformationForm() {

    let history = useHistory();
    const customerInformation = useSelector(state => state.customerInformation);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async data => {
        let res = await saveCustomerInformation(data);

        if (res instanceof Error) {
            return;
        }

        history.push('/application/user-information');
    };

    return (
        <CustomerInformationFormHtml
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            customerInformation={customerInformation}
        />
    );
}