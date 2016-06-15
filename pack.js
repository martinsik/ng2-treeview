var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');
var rename = require('gulp-rename');

// https://github.com/SitePen/dts-generator

gulp.src('.build/ms-treeview.js')
    .pipe(embedTemplates({
        basePath: './src',
        minimize: {
            quotes: true,
            empty: true
        }
    }))
    .pipe(rename('ms-treeview.embeded.js'))
    .pipe(gulp.dest('.build'));
