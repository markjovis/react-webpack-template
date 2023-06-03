import React, { Fragment } from 'react';

import './assets/styles/global.css';
import reactLogo from './assets/images/logo512.png';
import webpackLogo from './assets/images/webpack.png';
import hello from './assets/images/hello.png';

const HelloWorld = () => {
  const env = process.env.REACT_APP_ENV;

  return (
    <Fragment>
      <p>&nbsp;</p>
      <div
          style={{textAlign: 'center', maxWidth: '800px', margin: 'auto'}}
        >
          <img src={hello} width="800" height="300"></img>
          <img src={reactLogo} width="300" height="300"></img>
          <img src={webpackLogo} width="300" height="300"></img>
          <p style={{color: '#8FD3F5'}}>Created with &quot;create-react-webpack&quot; CLI</p>
        </div>
      <p>&nbsp;</p>
      <div>
        <div
          className='border-b p-4 m-4 rounded  '
          style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bold', maxWidth: '400px', margin: 'auto', backgroundColor: 'red'}}
        >
          Environment: {env}
        </div>
        <p>&nbsp;</p>
      </div>
    </Fragment>
  );
};

export default HelloWorld;
