# xhrpolyfill
cross browser xhr object

# USAGE
```js
var xhr = require('xhrpolyfill')(); // default behavior - sets no globals
// => return new XMLHttpRequest();

var xhr = require('xhrpolyfill')({global:true}); // will set window.XMLHttpRequest globally
// => return new XMLHttpRequest();
```
