const url = require('url');
module.exports = {
    getRepoPath: (gitUrl) => {
        return `${process.cwd()}/${url
                .parse(gitUrl)
                .path
                .split('/')
                .find(s => s.includes('.git'))
                .replace('.git', '')
            }`
    },
}