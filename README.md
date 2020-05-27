# Description

Provides a simple, no frills way to integrate `react-refresh` into your `create-react-app` using [customize-cra](https://github.com/arackaf/customize-cra) and [@pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin).

# Installation

1. Install dependencies

   ```
   npm install -D react-app-rewired customize-cra customize-cra-react-refresh
   ```

2. Create or update your `config-overrides.js`

   ```js
   const { override } = require("customize-cra");
   const { addReactRefresh } = require("customize-cra-react-refresh");

   /* config-overrides.js */
   module.exports = override(addReactRefresh());
   
3. 'Flip' the existing calls to `react-scripts` in `npm` scripts for start, build and test

   ```diff
     /* package.json */

     "scripts": {
   -   "start": "react-scripts start",
   +   "start": "react-app-rewired start",
   -   "build": "react-scripts build",
   +   "build": "react-app-rewired build",
   -   "test": "react-scripts test --env=jsdom",
   +   "test": "react-app-rewired test --env=jsdom",
       "eject": "react-scripts eject"
   }
   ```

# Credits

Original idea based on [comment by @drather19](https://github.com/facebook/react/issues/16604#issuecomment-561961608).
