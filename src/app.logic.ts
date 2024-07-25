import fs from 'fs';
import { yarg } from  './config/plugins/yargs.plugin';



const {b: base, l:limit, s:showtable } = yarg;
let outputMessage = '';
const headermassage =`
============================
    Tabla del ${ base }
============================\n
`

for (let i=1; i <= limit; i++) {
    outputMessage += `${ base } X ${ i } = ${ base * i }\n`
    
}

outputMessage = headermassage + outputMessage;

if ( showtable ) {
    console.log(outputMessage);
}


const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`outputs/tabla-${ base }.txt`, outputMessage);
console.log('File Created! ');

