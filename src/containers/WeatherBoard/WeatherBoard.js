import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './WeatherBoard.module.css';

import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
import Locations from '../../components/Locations/Locations';

import * as actions from '../../store/actions/index';


const asyncWeatherSection = asyncComponent(() => {
    return import('./WeatherSection/WeatherSection');
});

class WeatherBoard extends Component {


    inputHandler = (event) => {
        this.props.onFetchLocation(event.target.value);
    }

    getWeatherHandler = (id) => {
        this.props.onFetchWeatherByLocation(id);
        this.props.history.replace('/weather');
    }

    render() {
        let routes = (
            <Switch>
              <Route 
                path="/weather" 
                component={asyncWeatherSection}
                />
              <Route 
                path="/" 
                exact 
                render={ () => <Locations 
                                    changed={this.inputHandler}
                                    weather={this.props.weather} 
                                    clicked={this.getWeatherHandler}
                                    /> }  
                />
              <Redirect to="/" />
            </Switch>
          );

        return (
            <div className={classes.WeatherBoard}>
                <div className={classes.Title}>
                    <h1>SIMPLE WEATHER APPLICATION</h1>
                    <hr />
                </div>
                <div className={classes.Content}>
                    {routes}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchLocation: (location) => dispatch( actions.fetchLocation(location) ),
        onClearLocation: (location) => dispatch( actions.clearLocation() ),
        onFetchWeatherByLocation: (id, location) => dispatch ( actions.fetchWeatherByLocation(id) )
    };
};
  

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(WeatherBoard));