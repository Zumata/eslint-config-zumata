# eslint-config-zumata

> This package provides Airbnb's .eslintrc as an extensible shared config specifically for Zumata's Node.js modules.

[![NPM][nodei-image]][nodei-url]

[![Node][node-image]][node-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![NSP Status][nsp-image]][nsp-url]
[![GitHub license][license-image]][license-url]

## Use case

This `ESLint` config file does not aim to reinvent the wheel to suit our internal purpose in Zumata when writing a Node.js module. It basically extends and modifies the widely known Airbnb's Javascript style guide by not including dependencies such as `eslint-plugin-jsx-a11y` and `eslint-plugin-react` which are not being used in linting any of our Node.js modules so that to keep our dependencies' hierarchy clean, tidy and small as possible.

## Setup

### Prerequisites

Please make sure that you have the followings installed on your machine:

- `node >= 6.9.1` ___(In Zumata, we internally use the latest LTS version ([`node:boron`](https://nodejs.org/en/download/releases/)) for all our Node.js applications.)___
- `npm >= 3.10.8` ___(The minimum NPM version for [`node:boron`](https://nodejs.org/en/download/releases/).)___
- `eslint >= 3.8.0` ___(No guarantee it will work below the version specified here)___
- `eslint-plugin-import >= 2.0.1` ___(No guarantee it will work below the version specified here)___
- `eslint-plugin-optimize-regex >= 1.1.1` ___(No guarantee it will work below the version specified here)___
- `eslint-plugin-security >= 1.3.0` ___(No guarantee it will work below the version specified here)___
- [`ESLint extension for your favorite text editor`](http://eslint.org/docs/user-guide/integrations)

### Usage

1. Create `.eslintrc.json` or `.eslintrc` (See [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)) and add the following into the file:

    ```sh
    # Extend .eslintrc.json
    {
      "extends": [ "zumata" ]
    }
    ```

1. Create `.eslintignore` to tell [ESLint](http://eslint.org/) to skip linting the files inside directories. For example,

    ```sh
    # Ignore files to skip linting.
    dist/**
    **dist/**
    ```

1. Then install the required dependencies to start the integration.

    ```sh
    # Install with NPM
    $ npm install --save-dev eslint eslint-config-zumata
    ```

1. [ESLint](http://eslint.org/) should be up and running in your favorite text editor with all the config files needed. Enjoy [#eslint](https://twitter.com/search?q=%23eslint&src=typd)ing!~

## About the config

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires the followings:-

- [eslint](https://github.com/eslint/eslint)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-optimize-regex](https://github.com/brainmaestro/eslint-plugin-optimize-regex)
- [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## License

[MIT License](http://the-zumata-team.mit-license.org/) © The Zumata Team

[nodei-image]: https://nodei.co/npm/eslint-config-zumata.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://nodei.co/npm/eslint-config-zumata/
[node-image]: https://img.shields.io/node/v/eslint-config-zumata.svg
[node-url]: https://nodejs.org/en/download/
[npm-image]: https://badge.fury.io/js/eslint-config-zumata.svg
[npm-url]: https://npmjs.org/package/eslint-config-zumata
[travis-image]: https://travis-ci.org/Zumata/eslint-config-zumata.svg?branch=master
[travis-url]: https://travis-ci.org/Zumata/eslint-config-zumata
[daviddm-image]: https://david-dm.org/Zumata/eslint-config-zumata.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Zumata/eslint-config-zumata
[nsp-image]: https://nodesecurity.io/orgs/motss/projects/6e9fabde-73e1-456c-a2d7-8588023ed1ce/badge
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/6e9fabde-73e1-456c-a2d7-8588023ed1ce
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://the-zumata-team.mit-license.org/
