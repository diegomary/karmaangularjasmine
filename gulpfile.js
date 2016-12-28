var gulp = require("gulp");
var shell = require("gulp-shell");
var coffee = require('gulp-coffee');
var Server = require('karma').Server;
var watch = require('gulp-watch');

var jsFiles   = ['./app/*.js','./tests/*.js'];
var coffeeFiles   = ['./app/*.coffee','./tests/*.coffee'];

gulp.task('jstocoffee', function () {
  return gulp.src(jsFiles, {read: true})
    .pipe(shell([
      'js2coffee <%= file.path %> > <%= file.path + ".coffee" %>'
    ]
  ))
});

gulp.task('coffeetojs', function() {
  gulp.src(coffeeFiles)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./public/'));
});


gulp.task('default', ['jstocoffee'], function(done) {

  process.stdout.write('Gulp started...___________________________')

  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();


  return watch(jsFiles, { ignoreInitial: false })
  .pipe(shell([
    'js2coffee <%= file.path %> > <%= file.path + ".coffee" %>'
  ]))


});
