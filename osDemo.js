import os from 'os';

// userInfo()
console.log(os.userInfo().username);

// totalmem()
console.log(os.totalmem()) // in bytes

// freemem()
console.log(os.freemem()) // in bytes

// cpus()
console.log(os.cpus()) // array of objects - an object for each core on the system

