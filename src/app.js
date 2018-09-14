/** @format */

import Vue from 'vue';
import router from './router';

import App from './App.vue';

import './assets/favicons/favicon-16x16.png';
import './assets/favicons/favicon-32x32.png';
import './assets/favicons/favicon-96x96.png';

new Vue( { el: '#app', router, ...App } ).$mount( '#app' );
