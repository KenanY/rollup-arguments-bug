'use strict';

const rollup = require('rollup');
const fs = require('fs');
const cjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

rollup.rollup({
  entry: 'index.js',
  plugins: [
    cjs({
      include: [
        'node_modules/my-module/**'
      ]
    }),
    resolve({
      browser: true,
      jsnext: true,
      preferBuiltins: false
    })
  ]
}).then(function(bundle) {
  bundle.write({
    format: 'umd',
    dest: 'bundle.js'
  });
}).catch(function(error) {
  console.error(error);
});
