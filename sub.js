const  logger  = require('./logger'); 
 
//submodule has to be declared as a IIFE 
 
const log = ()=>{
    const content = logger()
    const parsed = JSON.parse(content)
    return parsed.message
}



const message = log()

process.send(message);