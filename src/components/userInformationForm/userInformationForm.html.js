import React from 'react';
import './userInformationForm.scss';

export default function UserInformationFormHtml({ register, handleSubmit, onSubmit, errors }) {

    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-12">
                    <form className="user-information-form">
                        <div class="form-group">
                            <label for="userName">S.A.A.</label>
                            <input type="text"
                                class={`form-control ${errors?.userName ? `is-invalid` : ''}`}
                                id="userName"
                                name="userName"
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} />
                            {
                                errors?.userName ?
                                    (<div class="invalid-feedback">
                                        {errors.userName.message}
                                    </div>) : null
                            }
                        </div>
                        <div class="form-group">
                            <label for="customer-name">FİN Kod</label>
                            <input type="text"
                                class={`form-control ${errors?.userPhinCode ? `is-invalid` : ''}`}
                                id="user-phin-code"
                                name="userPhinCode"
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} />
                            {
                                errors?.userPhinCode ?
                                    (<div class="invalid-feedback">
                                        {errors.userPhinCode.message}
                                    </div>) : null
                            }
                        </div>
                        <div class="form-group">
                            <label for="user-email">Email</label>
                            <input type="text"
                                class={`form-control ${errors?.userEmail ? `is-invalid` : ''}`}
                                id="user-email"
                                name="userEmail"
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Daxil edilən düzgün email formati deyil"
                                    }
                                })} />
                            {
                                errors?.userEmail ?
                                    (<div class="invalid-feedback">
                                        {errors.userEmail.message}
                                    </div>) : null
                            }
                        </div>
                        <div class="form-group">
                            <label for="user-code-name">Kod sözü</label>
                            <input type="text"
                                name="userCodeName"
                                id="user-code-name"
                                class={`form-control ${errors?.userCodeName ? `is-invalid` : ''}`}
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                })} >
                            </input>
                            {
                                errors?.userCodeName ?
                                    (<div class="invalid-feedback">
                                        {errors.userCodeName.message}
                                    </div>) : null
                            }
                        </div>
                        <div class="form-group">
                            <label for="user-phone">Mobil nömrə</label>
                            <input type="text"
                                class={`form-control ${errors?.userPhone ? `is-invalid` : ''}`}
                                id="user-phone"
                                name="userPhone"
                                ref={register({
                                    required: { value: true, message: 'Bu xana vacibdi' },
                                    pattern: {
                                        value: /([+]?\994}?)?(\d{9})/g,
                                        message: "Daxil edilən düzgün nömrə formati deyil"
                                    }
                                })} />
                            {
                                errors?.userPhone ?
                                    (<div class="invalid-feedback">
                                        {errors.userPhone.message}
                                    </div>) : null
                            }
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox"
                                class="form-check-input"
                                id="user-sms-otp"
                                name="userSmsOtp"
                                ref={register()}
                            />
                            <label class="form-check-label" for="user-sms-otp">SMS OTP</label>
                        </div>

                        <button
                            type="submit"
                            class="btn btn-primary btn-block"
                            onClick={handleSubmit(onSubmit)}>
                            Əlavə et
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}