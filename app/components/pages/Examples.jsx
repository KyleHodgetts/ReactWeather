import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="text-center">
      <h1>Examples</h1>
      <p>A few example locations for you to try out</p>
      <ol className="no-bullet">
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
