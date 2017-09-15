/* eslint-env node */
/* global require, module */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    snippetPaths: ['tests/dummy/snippets'],
    'ember-cli-babel': {
      includePolyfill: true
    }
  });

  app.import('node_modules/html2canvas/dist/html2canvas.min.js');

  return app.toTree();
};
