import React, { Component } from 'react';
import { connect } from 'react-redux';

import Weather from '../../../components/Weather/Weather';
import Spinner from '../../../components/UI/Spinner/Spinner';


class WeatherSection extends Component {

    state = {
        imgSrc: 'https://www.metaweather.com/static/img/weather/'
    }

    componentDidMount() {
        if (!this.props.weather.selectedLocation) {
            setTimeout(() => {
                this.props.history.replace('/');
            }, 5000);
        }

    }

    toHomeHandler = () => {
        this.props.history.replace('/');
    }

    render() {


        let weatherField = (
            <React.Fragment>
                {!this.props.weather.selectedLocation ? <div>No data, redirecting in 5 seconds...</div> : null}
                <Spinner />;
            </React.Fragment>
        );
        if (this.props.weather.weather) {
            weatherField = <Weather 
                                weather={this.props.weather.weather} 
                                img={this.state.imgSrc} 
                                clicked={this.toHomeHandler}/>
        }
        
        return (
            <React.Fragment>
                {weatherField}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    };
};

export default connect( mapStateToProps )(WeatherSection);