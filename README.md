# github-url-to-object  [![Build Status](https://travis-ci.org/zeke/github-url-to-object.png?branch=master)](https://travis-ci.org/zeke/github-url-to-object)

A module for node.js and browsers that extracts useful properties like `user`,
`repo`, and `branch` from various flavors of GitHub URLs.

There's also a Bitbucket equivalent to this library: [bitbucket-url-to-object](https://github.com/zeke/bitbucket-url-to-object).

Check out the demo at https://github-url-to-object.herokuapp.com.

## Installation

For Node.js or Browserify usage:

```sh
npm install github-url-to-object --save
```

For bower usage:

```sh
bower install github-url-to-object
```

## Usage

Pass whatever flavor of github URL you like:

```js
var gh = require('github-url-to-object')

gh('github:monkey/business')
gh('https://github.com/monkey/business')
gh('https://github.com/monkey/business/tree/master')
gh('https://github.com/monkey/business/tree/master/nested/file.js')
gh('https://github.com/monkey/business.git')
gh('http://github.com/monkey/business')
gh('git://github.com/monkey/business.git')
gh('git+https://github.com/monkey/business.git')
```

Here's what you'll get:

```js
{
  user: 'monkey',
  repo: 'business',
  branch: 'master',
  https_url: 'https://github.com/monkey/business',
  tarball_url: 'https://api.github.com/repos/monkey/business/tarball'
  travis_url: 'https://travis-ci.org/monkey/business',
  api_url: 'https://api.github.com/repos/monkey/business'
}
```

The shorthand form lets you specify a branch:

```js
  gh('github:monkey/business#nachos')
{
  user: 'monkey',
  repo: 'business',
  branch: 'nachos',
  https_url: 'https://github.com/monkey/business/tree/nachos',
  tarball_url: 'https://api.github.com/repos/monkey/business/tarball/nachos',
  travis_url: 'https://travis-ci.org/monkey/business',
  api_url: 'https://api.github.com/repos/monkey/business'
}
```

If you provide a non-github URL or a falsy value, you'll get `null`.

## Test

```sh
npm install
npm test
```

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License

MIT
