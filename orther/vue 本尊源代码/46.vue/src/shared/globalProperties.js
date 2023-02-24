export default {
  install (app) {
    app.provide('globalProperties', {
      a: 1,
      b: 2,
      $http
    });
  }
}

function $http () {
  console.log('http')
}