/* eslint-env node */
/* global require, module */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    nodeAssets: {
      'html2canvas': {
        vendor: {
          srcDir: 'dist',
          destDir: 'html2canvas',
          include: ['html2canvas.min.js']
        }
      }
    },
    snippetPaths: ['tests/dummy/snippets'],
    'ember-cli-babel': {
      includePolyfill: true
    }
  });

  app.import('vendor/html2canvas/html2canvas.min.js');

  return app.toTree();
};
