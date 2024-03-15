import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../../pages/login/slice/LoginSlice';
import httpApi from '../api/ServiceApi';

const appStore = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      thunk: {extraArgument: httpApi},
    });
  },
  devTools: false,
});

export default appStore;
