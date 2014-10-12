define(function (require) {

  'use strict';

  var $ = require('jquery');
  var defineComponent = require('flight/lib/component');

  return defineComponent(uiResultFilter);

  function uiResultFilter() {
    this.filter = function (ev) {
      var text = this.$node.val();
      this.trigger("ui-filter-flight-components", {
        matchRegex: new RegExp(text, 'i')
      });
    };

    this.after('initialize', function () {
      this.on("keyup", this.filter);
    });
  }

});
