const path = require('path');
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import deletePlugin from 'rollup-plugin-delete';
import { uglify } from 'rollup-plugin-uglify';
import { babel } from '@rollup/plugin-babel';

//批量添加lib下所有的js
import autoExternal from 'rollup-plugin-auto-external';
import multiEntry from 'rollup-plugin-multi-entry';
export default [
  {
    input: 'lib/*.js', // 入口文件
    output: {
      file: 'dist/xr-tool.min.js', // 输出文件
      format: 'umd',
      name: 'xrTools', //这将指定在 UMD 模块中使用的全局变量名称。
    },
    plugins: [
      autoExternal(),
      multiEntry(),
      resolve(),
      commonjs(),
      babel({
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**', // 不编译 node_modules 中的代码
        plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]], //删除所有 console.log 语句
      }),
      deletePlugin({
        targets: 'dist/*',
      }),
      // js 压缩插件，需要在最后引入
      uglify(),
    ],
  },
  {
    input: 'lib/*.js', // 入口文件
    output: {
      file: 'dist/xr-tool.cjs.js', // 输出文件
      format: 'cjs',
      name: 'xrTools', //这将指定在 UMD 模块中使用的全局变量名称。
    },
    plugins: [
      autoExternal(),
      multiEntry(),
      resolve(),
      commonjs(),
      babel({
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**', // 不编译 node_modules 中的代码
        plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]],
      }),
      // js 压缩插件，需要在最后引入
      uglify(),
    ],
  },
  {
    input: 'lib/*.js', // 入口文件
    output: {
      file: 'dist/xr-tool.amd.js', // 输出文件
      format: 'amd',
      name: 'xrTools', //这将指定在 UMD 模块中使用的全局变量名称。
    },
    plugins: [
      autoExternal(),
      multiEntry(),
      resolve(),
      commonjs(),
      babel({
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**', // 不编译 node_modules 中的代码
        plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]],
      }),
      // js 压缩插件，需要在最后引入
      uglify(),
    ],
  },
];
