import { createStore, compose } from 'redux'
import reducers from 'store/reducer'
import { loadState, saveState } from 'tools/localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localState = loadState();

const store = createStore(reducers, localState, composeEnhancers())

store.subscribe(() => {
    saveState(store.getState());
});

export default store;