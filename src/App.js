import React from 'react';

import Layout from './hoc/Layout/Layout';
import WeatherBoard from './containers/WeatherBoard/WeatherBoard';


function App() {

  return (
    <div className="App">
      <Layout>
        <WeatherBoard />
      </Layout>
    </div>
  );
}

export default App;
