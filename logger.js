const path = require("path");
const fs = require("fs");

module.exports = function(){
    const pathToFile = path.resolve(process.cwd(), "./test.json");
    const content = fs.readFileSync(pathToFile).toString();
    return content;
}

 

 