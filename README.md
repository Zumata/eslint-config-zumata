# eslint-config-zumata

# [![npm version](https://badge.fury.io/js/eslint-config-zumata.svg)](http://badge.fury.io/js/eslint-config-zumata)

This package provides Airbnb's .eslintrc as an extensible shared config specifically for Zumata's Node.js modules.

## Usage

We export ___ONLY___ one ESLint configurations for your usage.

### eslint-config-zumata

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, and `eslint-config-airbnb-base`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-zumata;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-zumata eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "zumata"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
