import React, { Suspense, Fragment } from 'react';
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
  Redirect,
} from 'react-router-dom';
import routes from './config/routes';
import hooks from './hooks';
import api from './http';

import './App.scss';

function App() {
  const setLogo = (url: string) => {
    let link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
  };
  hooks.useSetLogo(() => {
    api('/layout/getLogo', 'GET').then((res: any) => {
      setLogo(res.data.data.url);
    });
  });
  return (
    <HashRouter>
      <Switch>
        <Fragment>
          <section className="app">
            <header>HEADER</header>
            <section className="app-body">
              <aside>ASIDE</aside>
              <section className="app-body-main">
                <section className="app-body-main-content">
                  <Suspense fallback={<span className="page-spin"></span>}>
                    <Switch>
                      {routes.map((route, i) => {
                        return <Route key={i} {...route} />;
                      })}
                      <Redirect path="/" to={{ pathname: '/home' }} />
                    </Switch>
                  </Suspense>
                </section>
                <footer>FOOTER</footer>
              </section>
            </section>
          </section>
        </Fragment>
      </Switch>
    </HashRouter>
  );
}

export default App;
