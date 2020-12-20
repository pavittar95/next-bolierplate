import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import user from "./reducer/user";

const rootReducer = combineReducers({
  user,
});

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(logger, ...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore() {
  const store = createStore(rootReducer, bindMiddleware([thunk]));

  return store;
}

export default configureStore;
