const inquirer = require('inquirer');
const { Separator } = inquirer;
const { JS_REPO_URL, REACT_REPO_URL, ANGULAR_REPO_URL, cliAppBanner, getRepoName, getRepoPath, setupTasks } = require('./utils');
const separator = new Separator("======= Frameworks =======");


const repos = [
    {
        name: 'JS OpenFin Template',
        value: {
            repoName: getRepoName(JS_REPO_URL),
            repoUrl: JS_REPO_URL,
            repoPath: getRepoPath(JS_REPO_URL)
        }
    },
    {
        name: 'React OpenFin Template',
        value: {
            repoName: getRepoName(REACT_REPO_URL),
            repoUrl: REACT_REPO_URL,
            repoPath: getRepoPath(REACT_REPO_URL)

        }
    },
    {
        name: 'Angular Openfin',
        value: {
            repoName: getRepoName(ANGULAR_REPO_URL),
            repoUrl: ANGULAR_REPO_URL,
            repoPath: getRepoPath(ANGULAR_REPO_URL)
        }

    }
];

module.exports = {
    banner: () => cliAppBanner(),
    prompt: () => {
        return inquirer.prompt([{
            type: 'checkbox',
            name: 'framework',
            message: 'Please choose your template of choice to get started!',
            highlight: true,
            choices: repos,
            validate: (answer) => {

                if (answer.length == 0) {
                    return 'You must choose at least one color.';
                }
                return true;

            },
            // filter: async()
            // default: () => ({name: this.name, value: this.value})
        }])
    },
    setupTasks

}
