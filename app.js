

// const names = require('./4-name');
// const sayHi = require('./5-utils');



// console.log (names);
// console.log(sayHi);
// sayHi(names.John);
// sayHi(names.Seetha);


const os = require('os')


const user = os.userInfo();
console.log(user);

console.log(`The system uptime is ${os.uptime()/60/60} minutes`);