# xhrpolyfill
cross browser xhr object

# USAGE
```js
var xhrpolyfill = require('xhrpolyfill');

var xhr = xhrpolyfill(); // default behavior - sets no globals
// => return new XMLHttpRequest();

var xhr = xhrpolyfill({global:true}); // will set window.XMLHttpRequest globally
// => return new XMLHttpRequest();
```
