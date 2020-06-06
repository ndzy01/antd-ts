import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/demo01"
            activeStyle={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            demo01
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
