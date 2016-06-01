import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>A few example locations for you to try out</p>
      <ol>
        <li>
          <Link to='/?location=london'>London</Link>
        </li>
        <li>
          <Link to="/?location=warsaw">Warsaw, PL</Link>
        </li>
      </ol>
    </div>
  );
}
