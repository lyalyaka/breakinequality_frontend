(function (global) {
  System.config({
    map: {
      '@angular': 'node_modules/@angular',
      '@angular/router': 'node_modules/@angular/router',
      'rxjs': 'node_modules/rxjs',
      'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js',
      'materialize-css': 'node_modules/materialize-css',
      'materialize': 'node_modules/angular2-materialize',
      'angular2-materialize': 'node_modules/angular2-materialize',
      '_translate': 'src/app/_translate'
    },
    paths: {
      'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
      '@angular/*': {'format': 'cjs'}
    },
    packages: {
      'src': {main: 'app/main', defaultExtension: 'js'},
      '@angular/core': {main: 'core.umd.min.js'},
      '@angular/common': {main: 'common.umd.min.js'},
      '@angular/compiler': {main: 'compiler.umd.min.js'},
      '@angular/forms': {main: 'forms.umd.min.js'},
      '@angular/http': {main: 'http.umd.min.js'},
      '@angular/router': { main: 'router.umd.min.js', defaultExtension: 'js' },
      '@angular/platform-browser': {main: 'platform-browser.umd.min.js'},
      '@angular/platform-browser-dynamic': {main:'platform-browser-dynamic.umd.min.js'},
      'rxjs': {defaultExtension: 'js'},
      'materialize-css': {format: 'global', main: 'dist/js/materialize', defaultExtension: 'js'},
      'angular2-materialize': {main: "dist/index", defaultExtension: "js"},
      '_translate': { main: 'index.js', defaultExtension: 'js' }
    },
    barrels: [
      // App specific barrels.
      'app/translate',
      'app/routing',
      'app/shared',
      'app/models'
    ]
  });
})(this);
