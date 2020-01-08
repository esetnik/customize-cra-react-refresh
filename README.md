# Description

Provides a simple, no frills way to integrate `react-refresh` into your `create-react-app` using [customize-cra](https://github.com/arackaf/customize-cra).

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
   module.exports = override(addReactRefresh({ disableRefreshCheck: true }));
   ```

# Credits

Original idea based on [comment by @drather19](https://github.com/facebook/react/issues/16604#issuecomment-561961608).
