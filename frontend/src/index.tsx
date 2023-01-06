import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { rootSaga } from './store';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
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

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <App customHistory={customHistory} />
    </ChakraProvider>
  </Provider>,
);
