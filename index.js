const fs = require('fs')
const yargs = require('yargs')

yargs.command({
    command : 'userDetail',
    describe : 'make a new file',
    handler : function(argv){
        fs.writeFileSync('userDetail.txt',` user id is  ${argv.id}`)
    }
})

yargs.parse();

const user= fs.readFileSync('userDetail.txt','utf8')

console.log(user);

fs.appendFileSync('userDetail.txt',' this is my employee id')