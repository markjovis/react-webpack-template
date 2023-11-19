import React, { Fragment } from 'react';

import '../assets/styles/global.css';
import reactLogo from '../assets/images/logo512.png';
import webpackLogo from '../assets/images/webpack.png';
import jsLogo from '../assets/images/js.png';
import hello from '../assets/images/hello.png';

const HelloWorld = () => {
  const env = process.env.REACT_APP_ENV;

  return (
    <Fragment>
      <p>&nbsp;</p>
      <div
          style={{textAlign: 'center', maxWidth: '900px', margin: 'auto'}}
        >
          <img src={hello} width="800" height="300"></img>
          <img src={reactLogo} width="300" height="300"></img>
          <img src={webpackLogo} width="300" height="300"></img>
          <img src={jsLogo} width="300" height="300"></img>
          <p>
            <a
              href='https://www.npmjs.com/package/create-react-webpack-proj?activeTab=readme'
              target='_blank'
              rel='noreferrer'
            >
              Created with &quot;create-react-webpack-proj&quot; CLI
            </a>
          </p>
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
