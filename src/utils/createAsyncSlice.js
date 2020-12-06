import { createSlice } from "@reduxjs/toolkit";
import { fetchLocalStorage } from "./localStorage";

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Boolean} config.authorizationRefresh
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess: {
        reducer(state, action) {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        },
        prepare(payload) {
          return {
            payload: payload?.data ? payload.data : payload,
            meta: {
              code: payload?.code,
              message: payload?.message,
              authorization: payload?.authorization,
              localStorage: config?.localStorage,
            },
          };
        },
      },
      fetchFail(state) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchFail } = slice.actions;

  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());

      const { url, options } = config.fetchConfig(payload);
      const authorization = fetchLocalStorage("accessToken", undefined);

      const response = await fetch(url, {
        mode: "cors",
        cache: "default",
        ...options,
        headers: {
          Authorization: authorization,
          ...options.headers,
        },
      });

      const data = await response.json();

      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchFail(error.message));
    }
  };

  return { ...slice, asyncAction };
};

export default createAsyncSlice;
