const {readFileSync, writeFileSync} = require('fs')

const text = readFileSync('./contents/sub-folder/demo.txt', 'utf8');

writeFileSync('./contents/writeFile.txt', `Copying from Demo... ${text}`)
