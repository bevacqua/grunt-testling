# grunt-testling

> Grunt task to run tests using the Testling CLI.

Check for updates in the [changelog](CHANGELOG.md).

## Install

To consume it, install it from `npm`.

```shell
npm i -D grunt-testling testling
```

## Usage

No Grunt configuration is required. To configure testling, please check out their [Quick Start][1] documentation. You'll need to configure `package.json` with something like the following.

```js
"testling": {
  "files": "test/*.js"
}
```

## License

MIT

[1]: https://ci.testling.com/guide/quick_start
