(function(d,e){function f(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c)}function g(a){var b="";f(a,function(a,d){if(a||0===a)b+="&"+d+"="+h(a)});return b}var h="function"==typeof encodeURIComponent?encodeURIComponent:escape;d[e].log=function(a,b,c){a=b+"?"+g(a);a=a.substring(0,2E3);b=document.createElement("img");b.onload=b.onerror=c;b.src=a}})(window,"AB");