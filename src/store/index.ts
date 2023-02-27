import { configureStore } from '@reduxjs/toolkit';

import appReducer from './appStore'




const store = configureStore({
    reducer: { app: appReducer },
});

export type RootState = ReturnType<typeof store.getState>

export const dispatchStore = store.dispatch as typeof store.dispatch

export default store;
