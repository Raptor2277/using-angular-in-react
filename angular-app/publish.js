const fs = require('fs');
const publishDir = './publish';
const publishPackage = publishDir + '/package.json';
const publishJs = publishDir + "/main.js";

fs.rmSync(publishDir, { recursive: true, force: true });
fs.mkdirSync(publishDir);

var buffers = [
    fs.readFileSync("dist/angular-app/runtime.js"),
    fs.readFileSync("dist/angular-app/polyfills.js"),
    fs.readFileSync("dist/angular-app/main.js")
]

fs.copyFileSync('./publish.json', publishPackage);
fs.writeFileSync(publishJs, Buffer.concat(buffers));