webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_miyaoyusuke_countup_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/date */ \"./components/date.tsx\");\n/* harmony import */ var _components_setDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/setDate */ \"./components/setDate.tsx\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/miyaoyusuke/countup/pages/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar App = function App() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      tmpTodo = _useState2[0],\n      setTmpTodo = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      startDate = _useState3[0],\n      setDate = _useState3[1];\n\n  var addTodo = function addTodo() {\n    if (tmpTodo === \"\") {\n      alert(\"文字を入力してください!\");\n      return;\n    }\n\n    setTodos([].concat(Object(_Users_miyaoyusuke_countup_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todos), [tmpTodo]));\n    setTmpTodo(\"\");\n  };\n\n  var deleteTodo = function deleteTodo(index) {\n    var newTodos = todos.filter(function (todo, todoIndex) {\n      return index !== todoIndex;\n    });\n    setTodos(newTodos);\n  };\n\n  var handleChange = function handleChange(date) {\n    setDate({\n      startDate: date\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \" App\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"form\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        dateFormat: \"yyyy/MM/dd\",\n        locale: \"ja\",\n        placeholderText: \"\\u65E5\\u4ED8\\u3092\\u9078\\u629E\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044\",\n        onChange: function onChange(date) {\n          return handleChange(date);\n        },\n        selected: startDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        name: \"todo\",\n        onChange: function onChange(e) {\n          return setTmpTodo(e.target.value);\n        },\n        value: tmpTodo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: addTodo,\n        children: \"Add\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [todos.map(function (todo, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [todo, todo, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return deleteTodo(index);\n            },\n            children: \"\\xD7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n        children: [\"\\n                h1{\\n                    text-align:center;\\n                }\\n                .form{\\n                    display:flex;\\n                    justify-content:center;\\n                }\\n                ul {\\n                    width:200px;\\n                    margin:10px auto;\\n                }\\n                \", \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(App, \"HRYrAi1KrTXYPrIB02Rp4K9oUfw=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ0b2RvcyIsInNldFRvZG9zIiwidG1wVG9kbyIsInNldFRtcFRvZG8iLCJEYXRlIiwic3RhcnREYXRlIiwic2V0RGF0ZSIsImFkZFRvZG8iLCJhbGVydCIsImRlbGV0ZVRvZG8iLCJpbmRleCIsIm5ld1RvZG9zIiwiZmlsdGVyIiwidG9kbyIsInRvZG9JbmRleCIsImhhbmRsZUNoYW5nZSIsImRhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVURyxPQUZTO0FBQUEsTUFFQUMsVUFGQTs7QUFBQSxtQkFHYUosc0RBQVEsQ0FBQyxJQUFJSyxJQUFKLEVBQUQsQ0FIckI7QUFBQSxNQUdUQyxTQUhTO0FBQUEsTUFHRUMsT0FIRjs7QUFLaEIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixRQUFJTCxPQUFPLEtBQUssRUFBaEIsRUFBb0I7QUFDbEJNLFdBQUssQ0FBQyxjQUFELENBQUw7QUFDQTtBQUNEOztBQUNEUCxZQUFRLCtJQUFLRCxLQUFMLElBQVlFLE9BQVosR0FBUjtBQUNBQyxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsR0FQRDs7QUFTQSxNQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsUUFBTUMsUUFBUSxHQUFHWCxLQUFLLENBQUNZLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQU9DLFNBQVAsRUFBcUI7QUFDakQsYUFBT0osS0FBSyxLQUFLSSxTQUFqQjtBQUNELEtBRmdCLENBQWpCO0FBR0FiLFlBQVEsQ0FBQ1UsUUFBRCxDQUFSO0FBQ0QsR0FMRDs7QUFPQSxNQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDN0JWLFdBQU8sQ0FBQztBQUNORCxlQUFTLEVBQUVXO0FBREwsS0FBRCxDQUFQO0FBR0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0UscUVBQUMsdURBQUQ7QUFDRSxrQkFBVSxFQUFDLFlBRGI7QUFFRSxjQUFNLEVBQUMsSUFGVDtBQUdFLHVCQUFlLEVBQUMsb0VBSGxCO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQ0EsSUFBRDtBQUFBLGlCQUFVRCxZQUFZLENBQUNDLElBQUQsQ0FBdEI7QUFBQSxTQUpaO0FBS0UsZ0JBQVEsRUFBRVg7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxnQkFBUSxFQUFFLGtCQUFDWSxDQUFEO0FBQUEsaUJBQU9kLFVBQVUsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQSxTQUhaO0FBSUUsYUFBSyxFQUFFakI7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFjRTtBQUFRLGVBQU8sRUFBRUssT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQWtCRTtBQUFBLGlCQUNHUCxLQUFLLENBQUNvQixHQUFOLENBQVUsVUFBQ1AsSUFBRCxFQUFPSCxLQUFQLEVBQWlCO0FBQzFCLDRCQUNFO0FBQUEscUJBQ0dHLElBREgsRUFFR0EsSUFGSCxlQUdFO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNSixVQUFVLENBQUNDLEtBQUQsQ0FBaEI7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBLFdBQVNBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU9ELE9BUkEsQ0FESCxlQVdFO0FBQUEsc1dBYVcsR0FiWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkY7QUFBQSxrQkFERjtBQWdERCxDQTNFRDs7R0FBTVosRzs7S0FBQUEsRztBQTZFU0Esa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpZmZEYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGVcIjtcbmltcG9ydCBTZXREYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL3NldERhdGVcIjtcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RtcFRvZG8sIHNldFRtcFRvZG9dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGFydERhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG5cbiAgY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgICBpZiAodG1wVG9kbyA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCLmloflrZfjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYQhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHRtcFRvZG9dKTtcbiAgICBzZXRUbXBUb2RvKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbywgdG9kb0luZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggIT09IHRvZG9JbmRleDtcbiAgICB9KTtcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBzZXREYXRlKHtcbiAgICAgIHN0YXJ0RGF0ZTogZGF0ZSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+IEFwcDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBkYXRlRm9ybWF0PVwieXl5eS9NTS9kZFwiXG4gICAgICAgICAgbG9jYWxlPVwiamFcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dD1cIuaXpeS7mOOCkumBuOaKnuOBl+OBpuOBj+OBoOOBleOBhFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVDaGFuZ2UoZGF0ZSl9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0b2RvXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRtcFRvZG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXt0bXBUb2RvfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvZG99PkFkZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge3RvZG99XG4gICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8oaW5kZXgpfT7DlzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb3Jte1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9e1wiIFwifVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})