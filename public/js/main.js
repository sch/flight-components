'use strict';

requirejs.config({
  baseUrl: '',
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'flight': 'bower_components/flight',
    'flight-components': 'bower_components/flight-components/lib/flight-components',
    'mustache': 'bower_components/mustache',
    'underscore': 'bower_components/underscore-amd/underscore',
    'component': 'js/component',
    'page': 'js/page'
  }
});

require(
  [
    'flight/lib/compose',
    'flight/lib/registry',
    'flight/lib/advice',
    'flight/lib/logger',
    'flight/lib/debug'
  ],

  function(compose, registry, advice, withLogging, debug) {
    debug.enable(true);
    compose.mixin(registry, [advice.withAdvice, withLogging]);

    require(['page/default'], function(initializeDefault) {
      initializeDefault();
    });
  }
);
