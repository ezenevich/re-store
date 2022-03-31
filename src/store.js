import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import reducer from "./reducers";


const logMiddleware = () => (next) => (action) => {
  console.log(action.type)
  return next(action)
}

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }
  return next(action)
}



const store = createStore(reducer, applyMiddleware(
  ThunkMiddleware,
  stringMiddleware
  // ,
  // logMiddleware
));


const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), timeout)
}

store.dispatch(delayedActionCreator(3000))

export default store;