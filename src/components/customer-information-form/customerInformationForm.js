import React from 'react';
import './customerInformationForm.scss';
import {
    useHistory
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { saveCustomerInformation } from 'store/actions/customerInformation';


export default function CustomerInformationForm() {

    let history = useHistory();
    const dispatch = useDispatch();
    const customerInformation = useSelector(state => state.customerInformation);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        dispatch(saveCustomerInformation(data));
        history.push('/application/user-information');
    };

    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-6 col-7">
                    <form>
                        <div class="form-group">
                            <label for="customer-code">Müştəri kodu</label>
                            <input type="text"
                                class={`form-control ${errors?.customerCode ? `is-invalid` : ''}`}
                                id="customer-code"
                                name="customerCode"
                                defaultValue={customerInformation?.customerCode}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                    minLength: { value: 7, message: 'Ən azı 7 simvol daxil edin' },
                                    pattern: { value: /[0-9]/g, message: 'Yalnız rəqəmlər daxil edin' }
                                })} />
                            {
                                errors?.customerCode ?
                                    (<div class="invalid-feedback">
                                        {errors.customerCode.message}
                                    </div>) : null
                            }
                        </div>
                        <div class="form-group">
                            <label for="customer-name">Adı</label>
                            <input type="text"
                                class={`form-control ${errors?.customerName ? `is-invalid` : ''}`}
                                id="customer-name"
                                name="customerName"
                                defaultValue={customerInformation.customerName}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} />
                            {
                                errors?.customerName ?
                                    (<div class="invalid-feedback">
                                        {errors.customerName.message}
                                    </div>) : null
                            }
                        </div>
                        <div class="form-group">
                            <label for="customer-voen">VÖEN</label>
                            <input type="text"
                                class={`form-control ${errors?.customerVoen ? `is-invalid` : ''}`}
                                id="customer-voen"
                                name="customerVoen"
                                defaultValue={customerInformation.customerVoen}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} />
                            {
                                errors?.customerVoen ?
                                    (<div class="invalid-feedback">
                                        {errors.customerVoen.message}
                                    </div>) : null
                            }
                        </div>
                        <div class="form-group">
                            <label for="customer-branch">Filial</label>
                            <select name="customerBranch"
                                defaultValue={customerInformation.customerBranch}
                                class={`form-control ${errors?.customerBranch ? `is-invalid` : ''}`}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} >
                                <option selected value="">Siyahıdan seçin</option>
                                <option value="1">Neftçilər</option>
                                <option value="2">Azadlıq</option>
                                <option value="3">Yasamal</option>
                            </select>
                            {
                                errors?.customerBranch ?
                                    (<div class="invalid-feedback">
                                        {errors.customerBranch.message}
                                    </div>) : null
                            }
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-between step-navigation">
                <div className="col pr-0">
                    <button
                        type="submit"
                        class="btn btn-primary float-right next-step"
                        onClick={handleSubmit(onSubmit)}>
                        İrəli
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}