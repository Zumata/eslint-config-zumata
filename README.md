# eslint-config-zumata

> This package provides Airbnb's .eslintrc as an extensible shared config specifically for Zumata's Node.js modules.

[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Use case

This `ESLint` config file does not aim to reinvent the wheel to suit our internal purpose in Zumata when writing a Node.js module. It basically extends and modifies the widely known Airbnb's Javascript style guide by not including dependencies such as `eslint-plugin-jsx-a11y` and `eslint-plugin-react` which are not being used in linting any of our Node.js modules so that to keep our dependencies' hierarchy clean, tidy and small as possible.

## Setup

### Prerequisites

Please make sure that you have the followings installed on your machine:

-  `node >= 6.9.1` ___(In Zumata, we internally use the latest LTS version ([`node:boron`](https://nodejs.org/en/download/releases/)) for all our Node.js applications.)___
-  `npm >= 3.10.8` ___(The minimum NPM version for [`node:boron`](https://nodejs.org/en/download/releases/).)___
-  `eslint >= 3.8.0` ___(No guarantee it will work below the version specified here)___
-  `eslint-plugin-import >= 2.0.1` ___(No guarantee it will work below the version specified here)___
- [`ESLint extension for your favorite text editor`](http://eslint.org/docs/user-guide/integrations)

### Usage

1. Create `.eslintrc.json` or `.eslintrc` (See [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)) and add the following into the file:

    ```
    {
      "extends": [ "zumata" ]
    }
    ```

2. Create `.eslintignore` to tell `ESLint` to skip linting the files inside directories. For example,
    ```
    dist/**
    **dist/**
    ```

3. Then install the required dependencies to start the integration.

    #### With [`NPM`](https://github.com/npm/npm):
    ```sh
    npm install --save-dev eslint eslint-config-zumata
    ```

    #### With [`Yarn`](https://github.com/yarnpkg/yarn):
    ```sh
    yarn add --dev eslint eslint-config-zumata
    ```

4. `ESLint` should be up and running in your favorite text editor with all the config files needed. Enjoy [#eslint](https://twitter.com/search?q=%23eslint&src=typd)ing!~

## eslint-config-zumata

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, and `eslint-config-airbnb-base`.

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## License

[MIT License](http://the-zumata-team.mit-license.org/) © The Zumata Team


[npm-image]: https://badge.fury.io/js/eslint-config-zumata.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-zumata
[daviddm-image]: https://david-dm.org/Zumata/eslint-config-zumata.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Zumata/eslint-config-zumata