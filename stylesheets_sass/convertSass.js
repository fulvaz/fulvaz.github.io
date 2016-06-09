
var vfs = require('vinyl-fs');
var converter = require('sass-convert');

vfs.src('./*.+(sass|scss|css)')
    .pipe(converter({
        from: 'sass',
        to: 'scss',
        force: true,
        rename: true
    }))
    .pipe(vfs.dest('./output'));