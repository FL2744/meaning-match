import {readFile,writeFile} from 'node:fs/promises';
import {Script} from 'node:vm';
const directory=new URL('./dist/',import.meta.url);
const read=name=>readFile(new URL(name,directory),'utf8');
const files=await Promise.all(['index.html','style.css','languages.js','levels.js','engine.js','app.js'].map(read));
const [html,css,...modules]=files;
const script=modules.map(source=>source.replace(/^import .*;\r?\n/gm,'').replace(/^export /gm,'')).join('\n');
// Parse the combined code to catch collisions and leftover module syntax.
new Script(script);
const bundled=html.replace('<link rel="stylesheet" href="style.css">',()=>`<style>\n${css}\n</style>`)
 .replace('<script type="module" src="app.js"></script>',()=>`<script type="module">\n${script.replace(/<\/script/gi,'<\\/script')}\n</script>`)
 .replace('class="brand" href="./"','class="brand" href="./meaning-match.html"');
if(/<script[^>]+src=|<link[^>]+rel="stylesheet"/.test(bundled))throw Error('External application assets remain.');
await writeFile(new URL('meaning-match.html',directory),bundled);
console.log('Built dist/meaning-match.html — all application code and styles included.');
