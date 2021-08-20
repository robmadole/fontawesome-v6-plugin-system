import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'entry-points/fontawesome.js',
  output: {
    dir: 'dist',
    format: 'iife'
  },
  plugins: [nodeResolve(), terser()]
};
