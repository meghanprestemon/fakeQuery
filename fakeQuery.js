var $ = function(selector) {
  if (selector.startsWith('#')) {
    return document.getElementById(selector.substr(1));
  } else if (selector.startsWith('.')) {
    return document.getElementsByClassName(selector.substr(1));
  }
};
