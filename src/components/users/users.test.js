import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import store from 'store';

import * as userService from 'services/userService';
import Users from './users';

let wrapper;

beforeEach(() => {
    global.MutationObserver = class {
        constructor() { }
        disconnect() { }
        observe() { }
    };

    wrapper = render(
        <Provider store={store}>
            <Router history={history}>
                <Users />
            </Router>
        </Provider>
    )
});

const history = createMemoryHistory();

const userServiceResponse = 'İstifadəçi yadda saxlanıldı';

jest.spyOn(userService, 'saveUserService')
    .mockImplementation(() => Promise.resolve(userServiceResponse));

afterEach(() => cleanup())

test('Must create new user', async () => {

    const { getByTestId } = wrapper;

    await act(async () => {

        fireEvent.click(getByTestId('open-user-form-modal'));

        fireEvent.change(getByTestId('user-name'), { target: { value: 'test user' } });
        fireEvent.change(getByTestId('user-phin-code'), { target: { value: 'FSFDFS311' } });
        fireEvent.change(getByTestId('user-email'), { target: { value: 'user@gmail.com' } });
        fireEvent.change(getByTestId('user-code-name'), { target: { value: 'randomName' } });
        fireEvent.change(getByTestId('user-phone'), { target: { value: '+994559214874' } });
        fireEvent.change(getByTestId('user-sms-otp'), { target: { value: true } });

        fireEvent.click(getByTestId('submit-new-user-form'))
    });

    expect(getByTestId('users').children.length).toEqual(1);

    await act(async () => {

        fireEvent.click(getByTestId('open-user-form-modal'));

        fireEvent.change(getByTestId('user-name'), { target: { value: 'test user' } });
        fireEvent.change(getByTestId('user-phin-code'), { target: { value: 'FSFDFS311' } });
        fireEvent.change(getByTestId('user-email'), { target: { value: 'user@gmail.com' } });
        fireEvent.change(getByTestId('user-code-name'), { target: { value: 'randomName' } });
        fireEvent.change(getByTestId('user-phone'), { target: { value: '+994559214874' } });
        fireEvent.change(getByTestId('user-sms-otp'), { target: { value: true } });

        fireEvent.click(getByTestId('submit-new-user-form'))
    });

    expect(getByTestId('users').children.length).toEqual(2);

})