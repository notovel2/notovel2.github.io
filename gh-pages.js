const ghPages = require('gh-pages');
const moment = require('moment');

ghPages.publish('out', {
    branch: 'master',
    dotfiles: true,
    message: `🚀 Deploy [${ moment().format('DD/MM/YY') }]`,
}, () => {
    console.log('yayyy');
});