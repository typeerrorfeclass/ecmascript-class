var fs = require('fs')
var path = require('path')
var childProcess = require('child_process')

var rootPath = path.resolve(__dirname, '../')
var indexFilename = path.resolve(rootPath, './index.js')

function run (cmd) {
  childProcess.exec(cmd, function (err, stdout, stderr) {
    if (err) {
      console.error(stderr)
    } else {
      console.log(stdout)
    }
  })
}

fs.watch(indexFilename, function () {
  run('clear && babel-node index.js')
})
