define(function (require) {

  'use strict';

  require('bower_components/moment/moment');

  var $ = require('jquery');
  var flightComponents = require('flight-components');
  var uiFlightComponents = require('component/ui_flight_components');
  var uiResultFilter = require('component/ui_result_filter');
  var uiTopComponentsList = require('component/ui_top_components_list');
  var loaderSwitcher = require('component/loader_switcher');

  return initialize;

  function initialize() {
    $('#filter').focus();

    loaderSwitcher.attachTo(document, {
      mainSelector: '.components-wrapper'
    });

    flightComponents.attachTo('#components', {
      except: ['flight-jasmine', 'flight-mocha']
    });

    uiResultFilter.attachTo("#filter");

    uiTopComponentsList.attachTo('#top-stars', {
      compare: 'stars'
    });

    uiTopComponentsList.attachTo('#top-forks', {
      compare: 'forks'
    });

    uiTopComponentsList.attachTo('#recently-created', {
      compare: 'created',
      compareFunction: function() {
        return function (rawDate) {
          return new Date(rawDate);
        };
      },
      displayFunction: function() {
        return function (rawDate) {
          var date = new Date(rawDate);
          return moment(date).fromNow();
        };
      }
    });

    uiFlightComponents.attachTo('#components');
  }

});
