const welcome = require('cli-welcome')
const pkg = require('./../package.json')
module.exports = ({ clear = true })=>{
  welcome({
    title: "create-node-cli",
    description: pkg.description,
    version: pkg.version,
    bgColor: '#6cc24a',
		color: '#000000',
    bold: true,
    clear
  })
}