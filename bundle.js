var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');
var rename = require('gulp-rename');
var SystemBuilder = require('systemjs-builder');

// https://github.com/SitePen/dts-generator

var builder = new SystemBuilder('.', {
    paths: {
        '*': '*.js'
    },
    meta: {
        '@angular/*': { build: false },
        'rxjs/*': { build: false }
    }
});
var result = builder.bundle('ms-treeview', '.build/ms-treeview.bundle.js');

result.then(function(e) {
    gulp.src('.build/ms-treeview.bundle.js')
        .pipe(embedTemplates({
            basePath: './ms-treeview',
            minimize: {
                quotes: true,
                empty: true
            }
        }))
        .pipe(rename('ms-treeview.js'))
        .pipe(gulp.dest('.build'));
});

