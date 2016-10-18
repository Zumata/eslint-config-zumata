# eslint-config-zumata

# [![npm version](https://badge.fury.io/js/eslint-config-zumata.svg)](http://badge.fury.io/js/eslint-config-zumata)

This package provides Airbnb's .eslintrc as an extensible shared config specifically for Zumata's Node.js modules.

## Setup

### Prerequisites

Please make sure that you have the followings installed on your machine:

-  `eslint > 3.4.0`
- [`ESLint extension for your favorite text editor`](http://eslint.org/docs/user-guide/integrations)

### Usage

1. Create `.eslintrc.json` or `.eslintrc` (See [](http://eslint.org/docs/user-guide/configuring)) and add the following into the file:

```json
{
  "extends": [ "zumata" ]
}
```

2. Create `.eslintignore` to tell `ESLint` to skip linting the files inside directories. For example,

```
dist/**
**/dist/**
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

4. `ESLint` should be up and running in your favorite text editor with all the config files needed. Enjoy #eslinting!~

## eslint-config-zumata

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, and `eslint-config-airbnb-base`.

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## License

MIT