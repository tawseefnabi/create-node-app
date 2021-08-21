const welcome = require('cli-welcome')

module.exports = ({clear=true})=>{
  welcome({
    title: "node-cli"
  })
}