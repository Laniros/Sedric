import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'
import {verifyAuth} from "../auth/authActions";

export function configStore() {
  const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

  store.dispatch(verifyAuth());

  return store
}
