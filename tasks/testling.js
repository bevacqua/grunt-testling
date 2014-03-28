var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;

module.exports = function (grunt) {
  grunt.registerTask('testling', function () {
    var done = this.async();
    var local = path.join(process.cwd(), 'node_modules/testling/bin/cmd.js');
    var isLocal = fs.existsSync(local);
    var opts = { stdio: 'inherit' };

    spawn(isLocal ? local : 'testling', [], opts).on('exit', done);
  });
};
