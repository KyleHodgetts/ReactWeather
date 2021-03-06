import React from 'react';
import Nav from 'Nav';

export default (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns small-centered medium-6 large-6">
          { props.children }
        </div>
      </div>
    </div>
  );
}
