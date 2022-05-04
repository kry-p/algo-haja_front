/*
 * React app core
 */
// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser, check } from './modules/user';
// Redux-persist
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
// Components
import App from './App';

// 개발용
import { composeWithDevTools } from 'redux-devtools-extension';

// Redux-saga 미들웨어
const sagaMiddleware = createSagaMiddleware();
// Redux store
// TODO: deprecated createStore()
const store =
  process.env.NODE_ENV === 'development'
    ? createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
      )
    : createStore(rootReducer, applyMiddleware(sagaMiddleware));
// 세션 정보를 가져올 때 미리 로드, 화면 깜박임 방지
const loadUser = () => {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log(
      'localStorage is not working. Please check if localStorage is enabled.'
    );
  }
};
const persistor = persistStore(store); // Redux-persist
sagaMiddleware.run(rootSaga);
loadUser();

// React app endpoint
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
