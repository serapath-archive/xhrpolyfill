var factories = [
  function () {return new XMLHttpRequest();}, // IE10+, Firefox, Chrome, Opera, Safari
  function () {return new ActiveXObject("Msxml3.XMLHTTP");},     // IE9
  function () {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}, // IE8
  function () {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}, // IE7
  function () {return new ActiveXObject("Msxml2.XMLHTTP");},     // IE6
  function () {return new ActiveXObject("Microsoft.XMLHTTP");},  // IE5
  function () {return null;}
];
module.exports = function getXHR(param) {
  for (var i=0, xhr, len=factories.length; i<len; i++) {
    try {
      xhr = factories[i]();
      if (param.global) { window.XMLHttpRequest = factories[i]; }
      return xhr;
    } catch (e) { continue; }
  }
};
