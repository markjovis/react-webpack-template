# react-webpack-template
A fully configured React webpack boiler plate. It includes ***Tailwind***, ***Environments***, ***ESLint***, and support for ***TypeScript*** (**ts**, **tsx**) and ***JavaScript*** (**js**, **jsx**).  t is fully customizable. You can remove, add, or modify default configuration according to your requirements.

In this latest release (version **1.0.3**), I have added full configuration and implementation of ***TypeScript***. You can now run your project in ***JavaScript*** or ***TypeScript*** via a simple variable setting in package.json.

**NOTICE**: **The default development setting is TypeScript. If you prefer regular JavaScript instead, you must set variable isTypeScript to false in package.json**!



## TypeScript Development

To run your project in TypeScript, go to the package.json file, and set variable **isTypeScript** to **true** (by default this is set to true). Then, in a terminal, type `npm start` to start the app. As you can see from the picture below, the terminal start-up display confirms that the project is configured for TypeScript:
 ![](./readme/starting_dev_ts.png)

After loading completes, you should see the following page:
![](./readme/ts-screenshot.png)

**Notice the TypeScript (TS) logo**. The TypeScript Hello World sample files are located in the **src/ts/** directory. You should see **HelloWorld.tsx** and **index.tsx**. Notice that the import feature of PNG image files is configured in **global.d.ts** located in the root of the project. Here, you can add support for other image types and  other global declarations.

Notice that when variable **isTypeScript** in package.json is set to **true**, this development setup expects **.ts** and **.tsx** files. Therefore, you must code in TypeScript and be familiar with it.



## JavaScript Development

To run your project in regular JavaScript, go to the package.json file, and set variable **isTypeScript** to **false**. Then, in a terminal, type `npm start` to start the app. As you can see from the picture below, the terminal start-up display confirms that the project is configured for regular JavaScript:
![](./readme/starting_dev_js.png)

After loading completes, you should see the following page:
![](./readme/js-screenshot.png)

**Notice the JavaScript (JS) logo**. The JavaScript Hello World sample files are located in the **src/js/** directory. You should see **HelloWorld.js** and **index.js**. Notice that ***tsconfig.json*** and ***global.d.ts*** have no effect in this development mode.

Notice that when variable **isTypeScript** in package.json is set to **false**, this development setup expects **.js** and **.jsx** files. Therefore, you must code in regular JavaScript and be familiar with it.

If you'll never use TypeScript, and don't care to have the option for TypeScript, you can remove TypeScript as follows:

- Remove all **TypeScript configuration files**, and **uninstall** all **TypeScript packages**.
- In **webpack.config.js**, remove lines **16**, **21**, and **115 to 120**. Also, in line **31** change the value of variable **entry** to just  **/src/index.js**.
- In **package.json**, remove variable **isTypeScript**.
- Delete file **.eslintrc.json** and **rename** ***.eslintrc_js_only.json*** to **.eslintrc.json**.



## Other Considerations

In directory **src**, the sub-directories **js** and **ts** are used for demo purpose to show TypeScript code (folder ts) and non-TypeScript code (folder js).  Once you set variable **isTypeScript** to **true** or **false** in package.json, you'll be using either TypeScript or regular JavaScript based on the value of variable **isTypeScript**. Therefore, there is no need to specify a sub-directory **js** or **ts**. You should start your app code in **src** root directory. 
