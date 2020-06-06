import React from 'react';
import { createHashHistory } from 'history'
const history = createHashHistory()
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <button onClick={
            () => {
              history.push('/demo01')
            }
          }> demo01</button>
        </li>
      </ul>
    </div>
  );
}
