import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { dts } from "rollup-plugin-dts";

import packageJson from './package.json' assert { type: 'json' };

export default [
  // JavaScript/TypeScript 打包配置
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.publishConfig.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.publishConfig.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(),
      commonjs(),
      babel({
        presets: ['@babel/preset-env'],
        babelHelpers: 'bundled',
      }),
    ],
    external: ['react', 'react-dom'],
  },

  // 类型定义文件打包配置
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.publishConfig.types, format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];