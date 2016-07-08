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
var result = builder.bundle('ng2-treeview', '.build/ng2-treeview.bundle.js');

result.then(function(e) {
    gulp.src('.build/ng2-treeview.bundle.js')
        .pipe(embedTemplates({
            basePath: './ng2-treeview',
            minimize: {
                quotes: true,
                empty: true
            }
        }))
        .pipe(rename('ng2-treeview.js'))
        .pipe(gulp.dest('.build'));
});

