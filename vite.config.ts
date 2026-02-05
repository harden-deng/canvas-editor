import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import * as path from 'path'

export default defineConfig(({ mode }) => {
  const name = 'canvas-editor'
  if (mode === 'lib') {
    return {
      plugins: [ // 插件
        cssInjectedByJsPlugin({  // 样式注入插件
          styleId: `${name}-style`, // 样式ID
          topExecutionPriority: true // 优先执行
        }),
        {
          ...typescript({ // TypeScript插件 
            tsconfig: './tsconfig.json', // TypeScript配置文件
            include: ['./src/editor/**'] // 包含的文件
          }),
          apply: 'build',
          declaration: true, // 生成声明文件
          declarationDir: 'types/', // 声明文件目录
          rootDir: '/' // 根目录
        }
      ],
      build: { // 打包选项
        lib: { // 库选项
          name, // 库名称
          fileName: name, // 文件名称
          entry: path.resolve(__dirname, 'src/editor/index.ts') // 入口文件
        },
        minify: 'terser', // 压缩代码
        terserOptions: {  // 压缩选项
          compress: { // 压缩选项
            drop_console: true, // 删除console.log
            drop_debugger: true // 删除debugger
          }
        },
        rollupOptions: { // 打包选项
          output: { // 输出选项
            sourcemap: true // 生成sourcemap
          }
        }
      }
    }
  }
  return {
    base: `/${name}/`,
    server: {
      host: '0.0.0.0'
    },
    build: {   //打包时压缩代码,去除console.log和debugger
      minify: 'terser',   
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
})
