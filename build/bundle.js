/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  root: \"https://react-ssr-api.herokuapp.com\",\n  users: \"https://react-ssr-api.herokuapp.com/users\",\n  auth: \"https://react-ssr-api.herokuapp.com/auth/google\",\n  admins: \"https://react-ssr-api.herokuapp.com/admins\",\n  currentUser: \"https://react-ssr-api.herokuapp.com/current_user\",\n  logout: \"https://react-ssr-api.herokuapp.com/logout\"\n};\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n//import { Route } from \"react-router-dom\";\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HomePage = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _UsersPage = __webpack_require__(/*! ./pages/UsersPage */ \"./src/client/pages/UsersPage.js\");\n\nvar _UsersPage2 = _interopRequireDefault(_UsersPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// export default () => {\n//   return (\n//     <div>\n//       <Route exact path=\"/\" component={Home} />\n//       {/*<Route path=\"/hi\" component={() => \"hi\"} />*/}\n//       <Route path=\"/users\" component={Users} />\n//     </div>\n//   );\n// };\nexports.default = [_extends({}, _HomePage2.default, {\n  path: \"/\",\n  exact: true\n}), _extends({}, _UsersPage2.default, { path: \"/users\" })];\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"div\",\n      null,\n      \"home component\"\n    ),\n    _react2.default.createElement(\n      \"button\",\n      { onClick: function onClick() {\n          return console.log(\"hi there\");\n        } },\n      \"Click Me\"\n    )\n  );\n};\n\nexports.default = { component: Home };\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/UsersPage.js":
/*!***************************************!*\
  !*** ./src/client/pages/UsersPage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _userActions = __webpack_require__(/*! ../store/actions/userActions */ \"./src/client/store/actions/userActions.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Users = function Users(props) {\n  (0, _react.useEffect)(function () {\n    props.fetch();\n  }, []);\n  var userList = function userList() {\n    return props.users.map(function (user) {\n      return _react2.default.createElement(\n        \"li\",\n        { key: user.id },\n        user.name\n      );\n    });\n  };\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    \"nothing yet...\",\n    _react2.default.createElement(\n      \"ul\",\n      null,\n      userList()\n    )\n  );\n};\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    fetch: function fetch() {\n      return dispatch((0, _userActions.userFetch)());\n    }\n  };\n};\nvar mapState = function mapState(state) {\n  return {\n    users: state.user.users\n  };\n};\nvar loadData = function loadData(store) {\n  return store.dispatch((0, _userActions.userFetch)());\n};\nexports.default = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapState, mapDispatch)(Users)\n};\n\n//# sourceURL=webpack:///./src/client/pages/UsersPage.js?");

/***/ }),

/***/ "./src/client/store/actions/actions.js":
/*!*********************************************!*\
  !*** ./src/client/store/actions/actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar FETCH_USER = exports.FETCH_USER = \"FETCH_USER\";\n\n//# sourceURL=webpack:///./src/client/store/actions/actions.js?");

/***/ }),

/***/ "./src/client/store/actions/userActions.js":
/*!*************************************************!*\
  !*** ./src/client/store/actions/userActions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.userFetch = undefined;\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/client/store/actions/actions.js\");\n\nvar ActionType = _interopRequireWildcard(_actions);\n\nvar _api = __webpack_require__(/*! ../../../api */ \"./src/api.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n//import axios from \"axios\";\n\n\nvar userFetch = exports.userFetch = function userFetch() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return api.get(\"/users\");\n\n            case 2:\n              res = _context.sent;\n\n              dispatch({ type: ActionType.FETCH_USER, payload: res.data });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/store/actions/userActions.js?");

/***/ }),

/***/ "./src/client/store/reducers/user.js":
/*!*******************************************!*\
  !*** ./src/client/store/reducers/user.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actions = __webpack_require__(/*! ../actions/actions */ \"./src/client/store/actions/actions.js\");\n\nvar ActionType = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar initiatState = {\n  users: []\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initiatState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case ActionType.FETCH_USER:\n      return _extends({}, state, {\n        users: [].concat(_toConsumableArray(action.payload))\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = reducer;\n\n//# sourceURL=webpack:///./src/client/store/reducers/user.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store) {\n  var app = _react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: {} },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  );\n  var content = (0, _server.renderToString)(app);\n\n  return \"\\n  <html>\\n    <head>\\n     <title>A React SSR app</title>\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\\n      \" + content + \"\\n      </div>\\n      <script>\\n        window.INITIAL_STATE = \" + (0, _serializeJavascript2.default)(store.getState()) + \"\\n      </script>\\n      <script src=\\\"bundle.js\\\"></script>\\n    </body>\\n  </html>\\n  \";\n};\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/helpers/setupStore.js":
/*!***********************************!*\
  !*** ./src/helpers/setupStore.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _api = __webpack_require__(/*! ../api */ \"./src/api.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _user = __webpack_require__(/*! ../client/store/reducers/user */ \"./src/client/store/reducers/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n  user: _user2.default\n});\n\nexports.default = function (req) {\n  var axiosInstance = _axios2.default.create({\n    baseURL: _api2.default.root,\n    headers: { cookie: req.get(\"cookie\") || \"\" }\n  });\n  var store = (0, _redux.createStore)(rootReducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n  return store;\n};\n\n//# sourceURL=webpack:///./src/helpers/setupStore.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/stable */ \"core-js/stable\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _setupStore = __webpack_require__(/*! ./helpers/setupStore */ \"./src/helpers/setupStore.js\");\n\nvar _setupStore2 = _interopRequireDefault(_setupStore);\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _api = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar app = (0, _express2.default)();\napp.use(\"/api\", (0, _expressHttpProxy2.default)(_api2.default.root, {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers[\"x-forwarded-host\"] = \"localhost:3000\";\n    return opts;\n  }\n}));\napp.use(_express2.default.static(\"public\"));\napp.get(\"*\", function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var store, promises;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            store = (0, _setupStore2.default)(req);\n            promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {\n              var route = _ref2.route;\n\n              return route.loadData ? route.loadData(store) : null;\n            });\n            _context.next = 4;\n            return Promise.all(promises);\n\n          case 4:\n            res.send((0, _renderer2.default)(req, store));\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.listen(process.env.PORT || 3000, function () {\n  return console.log(\"rendering server running....\");\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "core-js/stable":
/*!*********************************!*\
  !*** external "core-js/stable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/stable\");\n\n//# sourceURL=webpack:///external_%22core-js/stable%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });