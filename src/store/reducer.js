const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + 10
        }
    } else if (action.type === 'SUBTRACT') {
        return {
            ...state,
            counter: state.counter -8
        }
    }
    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

//Dispatching action
store.dispatch({ type: 'INC_COUNTER'});
console.log(store.getState());
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());