"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNpmClient;
var _getYarnLineage = _interopRequireDefault(require("./get-yarn-lineage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function getNpmClient() {
  const yarnLineage = await (0, _getYarnLineage.default)();
  const npmClient = yarnLineage === null ? 'npm' : 'yarn';
  return npmClient;
}
//# sourceMappingURL=get-npm-client.js.map