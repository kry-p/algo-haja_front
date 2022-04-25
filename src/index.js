import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import rootReducer from './modules';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(rootReducer, composeWithDevTools())
    : createStore(rootReducer);

const persistor = persistStore(store);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
