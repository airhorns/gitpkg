"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configFileName = void 0;
exports.default = readConfig;
exports.defaultConfig = void 0;
exports.getNearestConfigFile = getNearestConfigFile;
var _findUp = _interopRequireDefault(require("find-up"));
var _fs = _interopRequireDefault(require("fs"));
var _bluebird = _interopRequireDefault(require("bluebird"));
var _path = _interopRequireDefault(require("path"));
var _getGitTagName = require("../Publish/get-git-tag-name");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const access = _bluebird.default.promisify(_fs.default.access);

/**
 * The name of the config file.
 */
const configFileName = exports.configFileName = 'gitpkg.config.js';

/**
 * Here goes any default values.
 */
const defaultConfig = exports.defaultConfig = {
  registry: null,
  getTagName: _getGitTagName.defaultTagNameFormat
};
async function getNearestConfigFile() {
  // First check if config file is in same dir
  try {
    if (await access(_path.default.resolve(process.cwd(), configFileName))) {
      return configFileName;
    }
  } catch (e) {
    // Ignore
  }

  // Then check in parent directories
  return (0, _findUp.default)(configFileName);
}

/**
 * Returns an object with configurable settings.
 *
 * @param {string} directory Path to config file.
 */
async function readConfig(configPath) {
  try {
    const configClass = await import(configPath);
    let config = {};
    if (typeof configClass.default === 'function') {
      config = configClass.default();
    } else if (typeof configClass === 'function') {
      config = configClass();
    }
    return {
      ...defaultConfig,
      ...config
    };
  } catch (e) {
    return defaultConfig;
  }
}
//# sourceMappingURL=read-config.js.map