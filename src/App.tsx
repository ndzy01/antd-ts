import React, { Suspense, Fragment,useState } from 'react';
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
  Redirect,
} from 'react-router-dom';
import { createHashHistory } from 'history'
import config from './config';
import hooks from './hooks';
import api from './http';

import Err404 from './views/404'
import './App.scss';
const history = createHashHistory()

function App() {
  const [isExpend,setIsExpend]=useState(true)
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
            <header>
              <section style={{
                display: "flex",
                width:"100%"
              }}>
                <section style={{
                  display: "inline-block",
                  height: "60px", width: "60px", padding: "5px",
                  lineHeight:"50px",
                  boxSizing: "border-box"

                }}>
                <button onClick={
              () => {
                setIsExpend(!isExpend)
              }
            }>{isExpend?"收缩":"展开"}</button>
                </section>
                <section style={{
                  flex: "auto",
                  lineHeight:"60px",
                  textAlign:"center"
                }}> 
                 <button onClick={
              () => {
                history.push("/home")
              }
            }>主页
                     
            </button>  
                     <button onClick={
              () => {
                history.push("/add")
              }
            }>添加</button>  
                     <button onClick={
              () => {
                history.push("/edit")
              }
            }>编辑</button>  
            </section>
             
              </section>
            </header>
            <section className="app-body">
              <aside className={isExpend?"app-body-aside-expend":"app-body-aside-collapse"}>ASIDE</aside>
              <section className="app-body-main">
                <section className="app-body-main-content">
                  <Suspense fallback={<span className="page-spin"></span>}>
                    <Switch>
                      {config.routers.map((route, i) => {
                        console.log(route)
                        return <Route key={i} {...route} />;
                      })}
                      <Route component={Err404} />
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
