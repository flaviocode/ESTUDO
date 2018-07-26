var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
    .pipe(sass()) //converter os arquivos sass em css
    .pipe(gulp.dest('src/css')); //destino dos arquivos convertidos
});

gulp.task('watch', function() {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch']);