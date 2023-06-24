querystring = require('querystring');
const JSONobj = querystring.parse('name=Adarsh&company=NCS');
console.log(JSONobj);
const qString = querystring.stringify({name : 'Adarsh', compay: 'NCS'});
console.log(qString);