const fork = require('child_process').fork;

const path = require('path');

const file = path.resolve('./child.js');
const ls = fork(file, {
  execArgv: ['--inspect=9229', '--inspect-brk']
});

