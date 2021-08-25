import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { rootSaga } from './store';
import {ColorModeScript, ChakraProvider} from '@chakra-ui/react';
import './index.css';
import App from './App';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App customHistory={customHistory} />
    </ChakraProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
