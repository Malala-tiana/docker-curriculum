var chokidar = require('chokidar');
var execshell = require('exec-sh');

// Initialize watcher.
var watcher = chokidar.watch('file, dir, glob, or array', {
  ignored: /[\/\\]\./,
  persistent: true
});

// Watch the readme for changes
watcher.add('README.md');

// kick off the first generate
execshell("./generate");

// on change - run the generator
watcher.on('change', function(path) { 
    console.log("Readme has changed. Re-generating HTML.");
    execshell("./generate");
})