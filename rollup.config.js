'use strict';

import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'index.js',
  format: 'umd',
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
};
