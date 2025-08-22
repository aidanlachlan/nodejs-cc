// import fs from 'fs'; 


// // readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// // readFileSync() - synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data); 

import fs from 'fs/promises';

// fs.readFile('./test.txt', 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

  // readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readFile()
