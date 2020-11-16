const project_folder = "docs";
const source_folder = "src";

const path = {
    // сборка
    build: {
        html: project_folder + "/",
        php: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
        php_mailer: project_folder + "/php-mailer/"
    },
    // исходники
    src: {
        html: source_folder + "/build.html",
        php: source_folder + "/*.php",
        css: source_folder + "/css/*.css",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml}",
        fonts: source_folder + "/fonts/**/*",
        php_mailer: source_folder + "/php-mailer/**/*"
    },
    // отслеживание в реальном времени
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/css/**/*.css",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    // очистка сборки
    clean: "./" + project_folder + "/"
};

const { src, dest } = require('gulp'),
    gulp = require('gulp'),
    //html
    browsersync = require('browser-sync').create(),  //обновляем html
    htmlmin = require('gulp-htmlmin');

    //css
    concat_css = require('gulp-concat-css'), //сборка css
    clean_css = require('gulp-clean-css'),   //сокращение css файлов
    group_media = require('gulp-group-css-media-queries'),  //группировка медиа-запросов в конец файла

    //js
    concat_js = require('gulp-concat'), //сборка js
    uglify_js = require('gulp-uglify-es').default, //сокращение js файлов

    //images
    imagemin = require('gulp-imagemin'), //сжимает изображения

    //project
    rename = require('gulp-rename'),
    del = require('del');   //очистка папки сборки

// отображает все изменения в режиме реального времени в браузере
function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], img);
}

// открывает окно с собранный проектом в браузере
function browserSync(params) {
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

// очистка папки сборки перед новой сборкой
function clean(params){
    return del(path.clean)
}

// собирает html
function html() {
    return src(path.src.html)
        //переименовываем файл
        .pipe(rename({
            basename: "index"
        }))
        .pipe(dest(path.build.html))    //собираем html файлы в папку path.build.html
        .pipe(htmlmin({ collapseWhitespace: true }))    //сжимаем файл
        //переименовываем файл
        .pipe(rename({
            extname: ".min.html"
        }))
        .pipe(dest(path.build.html))    //собираем html файлы в папку path.build.html
        .pipe(browsersync.stream())     //обновить страницу в браузере
}

// собирает fonts
function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))    //собираем fonts файлы в папку path.build.fonts
        .pipe(browsersync.stream())     //обновить страницу в браузере
}

// собирает php_mailer
function php_mailer() {
    return src(path.src.php_mailer)
        .pipe(dest(path.build.php_mailer))    //собираем php_mailer в папку path.build.php_mailer
        .pipe(browsersync.stream())         //обновить страницу в браузере
}

// собирает php
function php() {
    return src(path.src.php)
        .pipe(dest(path.build.php))    //собираем php файлы в папку path.build.php
        .pipe(browsersync.stream())     //обновить страницу в браузере
}

// собирает css
function css() {
    return src(path.src.css)
        .pipe(concat_css( 'styles.css'))             //объединяем файлы в styles.css
        .pipe(group_media())                         //медиа запросы в конец файла
        .pipe(dest(path.build.css))                  //собираем css файлы в папку path.build.css - 1 файл не сжатый
        .pipe(clean_css({compatibility: 'ie8'}))     //сжимаем файл
        .pipe(rename({                               //переименовываем файл для выгрузки - 2 файл сжатый
            extname: ".min.css"
        }))
        .pipe(dest(path.build.css))                          //собираем css файлы в папку path.build.css
        .pipe(browsersync.stream())                          //обновить страницу в браузере
}

// собирает js
function js() {
    return src(path.src.js)
        .pipe(concat_js('index.js'))
        .pipe(dest(path.build.js))                          //собираем js файлы в папку path.build.js 1 - файл
        .pipe(uglify_js())
        .pipe(rename({                                  //переименовываем файл для выгрузки - 2 файл сжатый
            extname: ".min.js"
        }))
        .pipe(dest(path.build.js))                          //собираем js файлы в папку path.build.js 2 - файл
        .pipe(browsersync.stream())                         //обновить страницу в браузере
}

//собирает img
function img() {
    return src(path.src.img)
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [
                {
                    removeViewBox: false
                }
            ]
        }))
        .pipe(dest(path.build.img))    //собираем img файлы в папку path.build.img
        .pipe(browsersync.stream())     //обновить страницу в браузере
}

const build = gulp.series(clean, gulp.parallel(js, css, html, img, fonts, php, php_mailer));     //функция сборки проекта
const watch = gulp.parallel(build, watchFiles, browserSync);    //запуск сборки с синхронизацией в браузере

exports.fonts = fonts;
exports.php_mailer = php_mailer;
exports.php = php;
exports.img = img;
exports.js = js;
exports.html = html;
exports.css = css;

exports.build = build;
exports.watch = watch;
exports.default = watch;