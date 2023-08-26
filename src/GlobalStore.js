import { legacy_createStore as createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    count: 1000
}

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INC":
            return {...state, count: state.count + action.payload}
        case "DEC":
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

const loginReducer = (state = false, action) => {
    switch(action.type) {
        case "Login":
            return true
        default:
            return state
    }
}

const reducer = combineReducers({
    countReducer,
    loginReducer
})

const store = createStore(reducer)

const GlobalStore = ({ children }) => {
    return <Provider store={store}>
        {children}
    </Provider>
}

export default GlobalStore