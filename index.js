const fs = require('fs');
const convert = require('./src/convert');
const lists = require('./src/lists');

const output = convert(lists);

fs.writeFileSync('./README.md', output);
