import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="text-center">
      <h1 className="page-title">Examples</h1>
      <p>A few example locations for you to try out</p>
      <ol className="no-bullet">
        <li>
          <Link to='/?location=London'>London</Link>
        </li>
        <li>
          <Link to="/?location=Warsaw">Warsaw, PL</Link>
        </li>
      </ol>
    </div>
  );
}
