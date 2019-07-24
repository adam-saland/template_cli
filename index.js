const inquirer = require('inquirer');
const {getRepoPath} = require('./lib/utils.js')
const { launch, connect } = require('hadouken-js-adapter');
const REACT_REPO_URL = 'https://github.com/adam-saland/openfin-react-devtools-demo.git'; const ANGULAR_REPO_URL = ''; const JS_REPO_URL = '';
console.log(getRepoPath(REACT_REPO_URL))
//console.log(getDirName('https://github.com/openfin/openfin-cli.git'))
// Prompt user for the framework they would like to use