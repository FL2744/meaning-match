import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('./dist/',import.meta.url);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
createServer(async(req,res)=>{try{const name=new URL(req.url,'http://localhost').pathname;const file=new URL('.'+(name==='/'?'/index.html':name),root);if(!file.href.startsWith(root.href))throw Error();const data=await readFile(fileURLToPath(file));res.writeHead(200,{'Content-Type':types[file.pathname.slice(file.pathname.lastIndexOf('.'))]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(4175,'127.0.0.1',()=>console.log('Meaning Match: http://127.0.0.1:4175'));
