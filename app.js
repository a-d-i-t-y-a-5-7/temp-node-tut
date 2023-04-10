const {readFile} = require('fs').promises;
const {writeFile} = require('fs').promises;
/*const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Home Page');
}
else if(req.url === '/about'){
    for(let i=0;i<1000;i++){
        for(let j=0;j<1000;j++){
            console.log(`${j}`);
        }
    }
    res.end('About us page');
}
else{
    res.end('Error Page');
}
})

server.listen(5000,()=>{
    console.log('server listening on port 5000....');
})
const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}
*/

// getText('./content/first.txt').then(result=>console.log(result)).catch(err=>console.log(err))

const start = async() => {
    try {
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        console.log(first,second);
        await writeFile('./content/result-mind-grenade.txt',`This is awesome: ${first} ${second}`,{flag:'a'});
    } catch (error) {
        console.log(error);
    }
}

start();