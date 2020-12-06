import localStorage from "./middleware/localStorage";
import authorizationRefresh from "./middleware/authorizationRefresh";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import authorization from "./auth/authorization";
import group from "./auth/group";

const middleware = [
  ...getDefaultMiddleware(),
  localStorage,
  authorizationRefresh,
];
const reducer = combineReducers({ authorization, group });
const store = configureStore({ reducer, middleware });

export default store;
