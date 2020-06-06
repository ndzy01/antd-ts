import { RouteProps } from 'react-router';
import { lazy } from 'react';

let routes: IRouteItem[] = [
  {
    path: '/home', // 主页
    view: 'Home',
  },
  /* -------------------------------------------- */

  {
    path: '/demo1',
    view: 'layout/demo01-show',
  },
];
interface IRouteItem extends RouteProps {
  view?: string;
}

for (const item of routes) {
  if (item.view) {
    item.component = lazy(() => import(('../views/' + item.view) as string));
  }
}

export default routes;
