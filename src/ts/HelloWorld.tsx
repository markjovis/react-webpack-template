import React, { Fragment } from 'react';

import '../assets/styles/global.css';
import reactLogo from '../assets/images/logo512.png';
import webpackLogo from '../assets/images/webpack.png';
import tsLogo from '../assets/images/ts.png';
import hello from '../assets/images/hello.png';

const HelloWorld = () => {
  const env = process.env.REACT_APP_ENV;

  return (
    <Fragment>
      <p>&nbsp;</p>
      <div>
        <div className="flex justify-center items-center">
          <img src={hello} alt="Hello" className="w-[800px] h-[300px]" />
        </div>
        <div className="flex justify-center items-center space-x-4">
          <img src={reactLogo} width="300" height="300" alt='React Logo'></img>
          <img src={webpackLogo} width="300" height="300" alt='Webpack Logo'></img>
          <img src={tsLogo} width="300" height="300" alt='TypeScript Logo'></img>
        </div>
        <div className="text-center">
          <a
            href="https://www.npmjs.com/package/create-react-webpack-proj?activeTab=readme"
            target="_blank"
            rel="noreferrer"
            className="text-[20px] no-underline text-custom-link hover:text-[yellowgreen]"
          >Created with &quot;create-react-webpack-proj&quot; CLI</a>
        </div>
      </div>
      <p>&nbsp;</p>
      <div>
        <div className="border-b p-4 m-4 rounded text-center font-bold max-w-[400px] mx-auto text-[24px] bg-red-500">
          Environment: {env}
        </div>
        <p>&nbsp;</p>
      </div>
    </Fragment>
  );
};

export default HelloWorld;
