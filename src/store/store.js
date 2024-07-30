import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { dataReducer } from './reducers/data.reducer';

let store;

function initStore(preloadedState) {
  return configureStore({
    reducer: { dataReducer },
    preloadedState,
  });
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
