"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _events = _interopRequireDefault(require("events"));
var _readPackageManifest = _interopRequireDefault(require("./read-package-manifest"));
var _readConfig = _interopRequireWildcard(require("./read-config"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class Task extends _events.default.EventEmitter {
  constructor() {
    super();
    this.pkg = null;
    this.config = _readConfig.defaultConfig;
  }
  async readPackageManifest(pkgPath) {
    this.pkg = await (0, _readPackageManifest.default)(pkgPath);
  }
  async readConfigFile(configPath) {
    this.config = await (0, _readConfig.default)(configPath);
  }
}
exports.default = Task;
//# sourceMappingURL=index.js.map