"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceRenderer = replaceRenderer;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _loadThemedStyles = require("@microsoft/load-themed-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _allStyles = '';
(0, _loadThemedStyles.configureLoadStyles)(styles => {
  _allStyles += styles;
});

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) {
  const bodyHTML = (0, _server.renderToString)(bodyComponent);
  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([_react.default.createElement("style", {
    type: "text/css",
    dangerouslySetInnerHTML: {
      __html: _allStyles
    }
  })]);
}
