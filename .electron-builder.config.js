const { version, name } = require('./package.json')

// if (process.env.VITE_APP_VERSION === undefined) {
//   const now = new Date()
//   process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${
//     now.getUTCMonth() + 1
//   }.${now.getUTCDate()}-${now.getUTCHours() * 60 + now.getUTCMinutes()}`
// }

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  directories: {
    output: 'dist',
    buildResources: 'buildResources'
  },
  files: ['packages/**/dist/**'],
  appId: `com.zxy.${name}`,
  productName: 'BrainStrokeDiagnose',
  extraMetadata: {
    version: version
  }
}

module.exports = config
