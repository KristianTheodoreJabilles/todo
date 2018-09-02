import Vue from 'vue';
Vue.filter('toSGD', function (value) {
  return `S$ ${value}`;
});