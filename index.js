const fs = require("fs")
const yargs = require("yargs")

yargs.command({
    command:"create",
    describe:"create a file",
    handler: function(argv){
        fs.writeFileSync('node.txt',`title:${argv.title}`)
    }
})

yargs.command({
    command:"read",
    describe:"read file",
    handler: function(argv){
        
        fs.readFile('./node.txt', 'utf8' , (err, data) => {
            if (err) {
            console.error(err)
            return
            }
            console.log(data)
        })
    }
})

yargs.command({
    command:"append",
    describe:"append content to file",
    handler: function(argv){
        fs.appendFileSync('./node.txt', `desc:${argv.desc}`)
    }
})

yargs.parse()