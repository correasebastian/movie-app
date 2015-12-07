var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    lazy: true
});
var root = './';
var test = './test/';
gulp.task('wiredep-1', function() {
    gulp.src('./karma.conf.js')
        .pipe($.inject(gulp.src(['./src/app/**/*.js'], {
            read: false
        }), {
            starttag: '\/', //'files: [',
            endtag: ']',
            transform: function(filepath, file, i, length) {
                return '  "' + filepath + '"' + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe(gulp.dest('./'));
});



gulp.task('wiredep', function() {
    log('Wire up the bower css js and our app js into the html');

    var clientApp = './src/app/';
    var options = {
        bowerJson: require('./bower.json'),
        directory: './src/lib',
        ignorePath: '../..',
        devDependencies: true
    };
    var wiredep = require('wiredep').stream;
    var jsCss = [
        clientApp + '**/*.module.js',
        clientApp + '**/*.js',
        clientApp + '**/*.css',
        '!' + clientApp + '**/*.spec.js'
    ]
    return gulp
        .src([root + 'index.html'])
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(jsCss, {
            read: false
        }), {
            ignorePath: 'public',
            relative: true
        }))
        .pipe(gulp.dest(root))
});


//////////////////////////////////////////////////////////////////

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
