import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
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

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then( function (temp) {
      _this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      _this.setState({
        isLoading: false,
        errorMessage: errorMessage.message
      });
    });
  }

  render = () => {
    const { location, temp, isLoading, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return (<h3 className="text-center">Fetching weather...</h3>);
      }
      else if (temp && location) {
        return (<WeatherMessage location={location} temp={temp}/>);
      }
    }

    function renderError () {
      if(typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
