import React from 'react';
import './customerInformationForm.scss';
import {
    useHistory
} from "react-router-dom";
import { useForm } from "react-hook-form";
import {  useSelector } from 'react-redux';
import { saveCustomerInformation } from 'store/actions/customerInformationAction';


export default function CustomerInformationForm() {

    let history = useHistory();
    const customerInformation = useSelector(state => state.customerInformation);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async data => {
        let res = await saveCustomerInformation(data);

        if(res instanceof Error) {
            return;
        }

        history.push('/application/user-information');
    };

    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-6 col-7">
                    <form>
                        <div className="form-group">
                            <label htmlFor="customer-code">Müştəri kodu</label>
                            <input type="text"
                                className={`form-control ${errors?.customerCode ? `is-invalid` : ''}`}
                                id="customer-code"
                                name="customerCode"
                                data-testid="customer-code"
                                defaultValue={customerInformation?.customerCode}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                    minLength: { value: 7, message: 'Ən azı 7 simvol daxil edin' },
                                    pattern: { value: /[0-9]/g, message: 'Yalnız rəqəmlər daxil edin' }
                                })} />
                            {
                                errors?.customerCode ?
                                    (<div className="invalid-feedback" data-testid="error">
                                        {errors.customerCode.message}
                                    </div>) : null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="customer-name">Adı</label>
                            <input type="text"
                                className={`form-control ${errors?.customerName ? `is-invalid` : ''}`}
                                id="customer-name"
                                name="customerName"
                                data-testid="customer-name"
                                defaultValue={customerInformation.customerName}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} />
                            {
                                errors?.customerName ?
                                    (<div className="invalid-feedback">
                                        {errors.customerName.message}
                                    </div>) : null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="customer-voen">VÖEN</label>
                            <input type="text"
                                className={`form-control ${errors?.customerVoen ? `is-invalid` : ''}`}
                                id="customer-voen"
                                name="customerVoen"
                                data-testid="customer-voen"
                                defaultValue={customerInformation.customerVoen}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} />
                            {
                                errors?.customerVoen ?
                                    (<div className="invalid-feedback">
                                        {errors.customerVoen.message}
                                    </div>) : null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="customer-branch">Filial</label>
                            <select name="customerBranch"
                                defaultValue={customerInformation.customerBranch || ""}
                                className={`form-control ${errors?.customerBranch ? `is-invalid` : ''}`}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} 
                                data-testid="branches">
                                <option value="">Siyahıdan seçin</option>
                                <option value="1">Neftçilər</option>
                                <option value="2">Azadlıq</option>
                                <option value="3">Yasamal</option>
                            </select>
                            {
                                errors?.customerBranch ?
                                    (<div className="invalid-feedback">
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
                        className="btn btn-primary float-right next-step"
                        onClick={handleSubmit(onSubmit)}
                        data-testid="submit-customer-info"
                        >
                        İrəli
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}