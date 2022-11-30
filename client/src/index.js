import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux'
import allReducers from './States/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))
let persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

