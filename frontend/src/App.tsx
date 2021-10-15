import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import './App.css';
import { History } from 'history';
import { useDispatch } from 'react-redux';
import { loginActions } from './store/auth/login';

const Home = React.lazy(() => import('./pages/Home'));
const Adder = React.lazy(() => import('./pages/Adder'));
interface HistoryType {
  customHistory: History;
}

function App({ customHistory }: HistoryType) {

  return (
    <>
      <Router history={customHistory}>
        <Suspense fallback={<></>}>
          <Route exact
              path={`${process.env.PUBLIC_URL}/`}
              render={() => (
                  <Home />
              )}
          />
          <Route
              path={`${process.env.PUBLIC_URL}/add`}
              render={() => (
                  <Adder />
              )}
          />
        </Suspense>
      </Router>
    </>
  );
} 

export default App;
