import React from 'react';

export default ({ location, temp }) => {
  return(
    <h3 className="text-center">The temperature in {location} is {temp} &#8451;</h3>
  );
}
