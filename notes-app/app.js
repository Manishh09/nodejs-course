const fs = require('fs');

fs.writeFileSync('Notes.txt', 'Node.js - Introduction.');
fs.appendFileSync('Notes.txt',' Section-1: Node.JS Module System')