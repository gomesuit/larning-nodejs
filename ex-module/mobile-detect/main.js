var MobileDetect = require('mobile-detect');
var md = new MobileDetect('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1');


console.log( md.mobile() );
console.log( md.phone() );
console.log( md.tablet() );
console.log( md.userAgent() );
console.log( md.os() );
console.log( md.is('iPhone') );
console.log( md.is('bot') );
console.log( md.version('Webkit') );
console.log( md.versionStr('Build') );
console.log( md.match('playstation|xbox') );
