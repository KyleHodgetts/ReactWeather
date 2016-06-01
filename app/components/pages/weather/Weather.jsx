import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends React.Component {

  constructor () {
    super();
    this.state = {
      isLoading: false
    };
  }

  handleSearch = (location) => {
    let _this = this;

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then( function (temp) {
      _this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      this.setState({ isLoading: false });
    });
  }

  render = () => {
    const { location, temp, isLoading } = this.state;

    function renderMessage() {
      if (isLoading) {
        return (<h3>Fetching weather...</h3>);
      }
      else if (temp && location) {
        return (<WeatherMessage location={location} temp={temp}/>);
      }
    }

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}
