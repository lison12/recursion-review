// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    // obj[0] += stringifyJSON(obj.slice(1));
    return '[' + result.join(',') + ']';
  } 
  if (typeof obj === 'object' && obj !== null) {
    var result = ''; 
    for (var key in obj) {
      if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
        continue;
      }
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    return '{' + result.slice(0, -1) + '}';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';  
  }
  return '' + obj;
};
