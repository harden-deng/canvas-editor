// import { execSync } from 'child_process'
// import fs from 'fs'
// import path from 'path'

// const pkgPath = path.resolve('package.json')

// // 校验包合法性
// fs.accessSync(path.resolve('dist'), fs.constants.F_OK)
// fs.accessSync(path.resolve('dist/canvas-editor.es.js'), fs.constants.F_OK)
// fs.accessSync(path.resolve('dist/canvas-editor.umd.js'), fs.constants.F_OK)

// // 缓存项目package.json
// const sourcePkg = fs.readFileSync(pkgPath, 'utf-8')

// // 删除无用属性
// const targetPkg = JSON.parse(sourcePkg)
// Reflect.deleteProperty(targetPkg, 'dependencies')
// Reflect.deleteProperty(targetPkg.scripts, 'postinstall')
// fs.writeFileSync(pkgPath, JSON.stringify(targetPkg, null, 2))

// // 发布包
// try {
//   execSync('npm publish')
// } catch (error) {
//   throw new Error(error)
// } finally {
//   // 还原
//   fs.writeFileSync(pkgPath, sourcePkg)
// }


import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const pkgPath = path.resolve('package.json')

// 校验包合法性
fs.accessSync(path.resolve('dist'), fs.constants.F_OK)
fs.accessSync(path.resolve('dist/canvas-editor.es.js'), fs.constants.F_OK)
fs.accessSync(path.resolve('dist/canvas-editor.umd.js'), fs.constants.F_OK)

// 缓存项目package.json
const sourcePkg = fs.readFileSync(pkgPath, 'utf-8')

// 删除无用属性
const targetPkg = JSON.parse(sourcePkg)
Reflect.deleteProperty(targetPkg, 'dependencies')
Reflect.deleteProperty(targetPkg.scripts, 'postinstall')
fs.writeFileSync(pkgPath, JSON.stringify(targetPkg, null, 2))

// 获取 OTP（从命令行参数或环境变量）
const otp = process.argv.find(arg => arg.startsWith('--otp='))?.split('=')[1] || process.env.NPM_OTP

// 发布包
try {
  const publishCommand = otp ? `npm publish --otp=${otp}` : 'npm publish'
  execSync(publishCommand, { stdio: 'inherit' })
} catch (error) {
  throw new Error(error)
} finally {
  // 还原
  fs.writeFileSync(pkgPath, sourcePkg)
}