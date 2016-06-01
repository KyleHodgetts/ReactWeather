import React from 'react';

export default class WeatherForm extends React.Component {
  onFormSubmit = (e) => {
    e.preventDefault();

    let location = this.refs.location.value;
    if(location) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render = () => {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="location"
               placeholder="Search for weather by city e.g. London"/>
        <button className="button expanded hollow">Get Weather</button>
      </form>
    );
  }
}
