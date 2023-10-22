// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end("hello");
//     if(req.url === '/') {
//         res.end('Home Page');
//     } else if (req.url === '/about') {
//         res.end('About Page');
//     } else {
//         res.end('Error');
//     }
// });

// server.listen(5000, ()=>{
//     console.log('Server is listening on port 5000...')
// })

// const {readFile} = require('fs');

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/subfolder/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// const start = async() => {
//     try {
//         const first = await getText('./content/subfolder/first.txt')
//         console.log(first)
//     } catch (error) {
//         console.log(err)
//     }
// }

// start()


let promise = new Promise((resolve, reject) => {
    //executor
});