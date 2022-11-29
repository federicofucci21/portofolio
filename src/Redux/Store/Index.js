import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// eslint-disable-next-line import/no-named-default
import { default as rootReducer } from "../Reducer/Index";

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
