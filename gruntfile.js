module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    gardener: {
      this: {}
    }
  });

  grunt.loadTasks('lib');
};
