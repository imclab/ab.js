(function(c,d){function g(a,b){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&b.call(null,a[e],e)}function h(a){var b=[];g(a,function(a,c){(a||0===a)&&b.push(f(c)+'='+f(a))});return b.join('&')}c[d]=c[d]||{};var f='function'===typeof encodeURIComponent?encodeURIComponent:escape;c[d].log=function(a,b,c){a=b+(-1!==b.indexOf('?')?'&':'?')+h(a);a=a.substring(0,2E3);b=document.createElement('img');b.onload=b.onerror=c;b.src=a}})(window,'AB');