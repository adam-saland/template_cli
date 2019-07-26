const { setupTasks, banner, prompt } = require('./lib/cli.js');
async function init() {
    banner();
    const app = await prompt()
    const {framework} = app;
    const frameworkDetails = Object.assign({}, ...framework);
    setupTasks(frameworkDetails).then(console.log)

    
    console.log(frameworkDetails)
}

init()