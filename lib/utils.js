const chalk = require('chalk');
const figlet = require('figlet');
const url = require('url');
const git = require('simple-git')(process.cwd());
const util = require('util'); 
const exec = util.promisify(require('child_process').exec);


const REACT_REPO_URL = "https://github.com/adam-saland/openfin-react-devtools-demo.git";
const ANGULAR_REPO_URL = "https://github.com/adam-saland/angular-app-template.git";
const JS_REPO_URL = "https://github.com/adam-saland/app-template.git";

function cliAppBanner() {
    console.log(
        chalk.blue(
            figlet.textSync('Openfin\nTemplater', { font: "epic", horizontalLayout: "universal smushing", verticalLayout: "universal smushing" })
        )
    );
}


function getRepoName(gitUrl) {
    return `${url
        .parse(gitUrl)
        .path
        .split('/')
        .find(s => s.includes('.git'))
        .replace('.git', '')
        }`
}

function getRepoPath(gitUrl) {
    return `${process.cwd()}/${getRepoName(gitUrl)}`
}

async function setupTasks({ repoUrl }) {
    console.log("Cloning Repository ...")
    await git.clone(repoUrl)
    console.log("Changing to repo directory")
    process.chdir(getRepoPath(repoUrl));

     (async ()=> {
        const { stdout, stderr } = await exec("npm-run-all -l -s i start");
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    })().then(console.log)
}
module.exports = {
    REACT_REPO_URL,
    ANGULAR_REPO_URL,
    JS_REPO_URL,
    cliAppBanner,
    getRepoName,
    getRepoPath,
    setupTasks
}