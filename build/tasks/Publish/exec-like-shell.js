"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = execLikeShell;
var _execa = _interopRequireDefault(require("execa"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
async function execLikeShell(command, cwd) {
  const [program, ...options] = command.split(' ');
  return (0, _execa.default)(program, options, {
    cwd
  });
}
//# sourceMappingURL=exec-like-shell.js.map