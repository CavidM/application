import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'

import * as customerInformationActions from 'store/actions/customerInformationAction';
import rootReducer from 'store/reducer';
import CustomerInformationForm from './customerInformationForm';

const store = createStore(rootReducer);
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
                <CustomerInformationForm />
            </Router>
        </Provider>
    )
});

const history = createMemoryHistory();

const customerInformationServiceResponse = 'Müştəri məlumatları yadda saxlanıldı';

jest.spyOn(customerInformationActions, 'saveCustomerInformation')
    .mockImplementation(() => Promise.resolve(customerInformationServiceResponse));

afterEach(() => cleanup())

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

test('CustomerInformationForm validation', async () => {

    const { getByTestId, getByText, getAllByText } = wrapper;

    expect(getByText('Müştəri kodu')).toBeInTheDocument();

    expect(getByText('Adı')).toBeInTheDocument();

    expect(getByTestId('branches').children.length).toEqual(4);

    await act(async () => {
        fireEvent.click(getByTestId('submit-customer-info'))
    })

    expect(getAllByText('Bu xana vacibdi')).toHaveLength(4);

    await act(async () => {
        fireEvent.change(getByTestId('customer-code'), { target: { value: 'aabbccdd' } });
        fireEvent.click(getByTestId('submit-customer-info'))
    })

    expect(getByText('Yalnız rəqəmlər daxil edin')).toBeInTheDocument();

    await act(async () => {
        fireEvent.change(getByTestId('customer-code'), { target: { value: 'aabbcc' } });
        fireEvent.click(getByTestId('submit-customer-info'))
    })

    expect(getByText('Ən azı 7 simvol daxil edin')).toBeInTheDocument();
})

test('CustomerInformationForm submit successfully', async () => {

    const { getByTestId } = wrapper;

    await act(async () => {
        fireEvent.change(getByTestId('customer-code'), { target: { value: '12345678' } });
        fireEvent.change(getByTestId('customer-name'), { target: { value: 'Test user' } });
        fireEvent.change(getByTestId('customer-voen'), { target: { value: 'AFDGS42342' } });
        fireEvent.change(getByTestId('branches'), { target: { value: '2' } });

        fireEvent.click(getByTestId('submit-customer-info'))
    });

    expect(mockHistoryPush).toHaveBeenCalledWith('/application/user-information');
})