webpackHotUpdate_N_E("pages/index",{

/***/ "./components/setDate.tsx":
/*!********************************!*\
  !*** ./components/setDate.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SetDate; });\nfunction SetDate() {}\n_c = SetDate;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"SetDate\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZXREYXRlLnRzeD8zOTU0Il0sIm5hbWVzIjpbIlNldERhdGUiXSwibWFwcGluZ3MiOiJBQUlBO0FBQUE7QUFBZSxTQUFTQSxPQUFULEdBQW1CLENBRWpDO0tBRnVCQSxPO0FBRXZCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zZXREYXRlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmRGF0ZSBmcm9tICcuL2RhdGUnXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldERhdGUoKSB7XG4gICBcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/setDate.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false,

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_miyaoyusuke_countup_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/date */ \"./components/date.tsx\");\n/* harmony import */ var _components_setDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/setDate */ \"./components/setDate.tsx\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/miyaoyusuke/countup/pages/index.jsx\",\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\nvar App = function App() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      tmpTodo = _useState2[0],\n      setTmpTodo = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      date = _useState3[0],\n      setDate = _useState3[1];\n\n  var addTodo = function addTodo() {\n    if (tmpTodo === \"\") {\n      alert(\"文字を入力してください!\");\n      return;\n    }\n\n    setTodos([].concat(Object(_Users_miyaoyusuke_countup_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todos), [tmpTodo]));\n    setTmpTodo(\"\");\n  };\n\n  var deleteTodo = function deleteTodo(index) {\n    var newTodos = todos.filter(function (todo, todoIndex) {\n      return index !== todoIndex;\n    });\n    setTodos(newTodos);\n  };\n\n  var DatePick = function DatePick() {\n    _s();\n\n    var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n        startDate = _useState4[0],\n        setStartDate = _useState4[1];\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      selected: startDate,\n      onChange: function onChange(date) {\n        return setStartDate(date);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this);\n  };\n\n  _s(DatePick, \"7VgZ1AaRN4UkTWnNfs7/CGxziHc=\");\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Todo App\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"form\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        name: \"todo\",\n        onChange: function onChange(e) {\n          return setTmpTodo(e.target.value);\n        },\n        value: tmpTodo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: addTodo,\n        children: \"Add\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DatePick, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [todos.map(function (todo, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [todo, todo, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: function onClick() {\n              return deleteTodo(index);\n            },\n            children: \"\\xD7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n        children: [\"\\n                h1{\\n                    text-align:center;\\n                }\\n                .form{\\n                    display:flex;\\n                    justify-content:center;\\n                }\\n                ul {\\n                    width:200px;\\n                    margin:10px auto;\\n                }\\n                \", \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s2(App, \"q9KlIEsRT2JS3fs9zpyV9miPZs0=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ0b2RvcyIsInNldFRvZG9zIiwidG1wVG9kbyIsInNldFRtcFRvZG8iLCJkYXRlIiwic2V0RGF0ZSIsImFkZFRvZG8iLCJhbGVydCIsImRlbGV0ZVRvZG8iLCJpbmRleCIsIm5ld1RvZG9zIiwiZmlsdGVyIiwidG9kbyIsInRvZG9JbmRleCIsIkRhdGVQaWNrIiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFVEcsT0FGUztBQUFBLE1BRUFDLFVBRkE7O0FBQUEsbUJBR1FKLHNEQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR1RLLElBSFM7QUFBQSxNQUdIQyxPQUhHOztBQUtoQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFFBQUlKLE9BQU8sS0FBSyxFQUFoQixFQUFvQjtBQUNsQkssV0FBSyxDQUFDLGNBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBQ0ROLFlBQVEsK0lBQUtELEtBQUwsSUFBWUUsT0FBWixHQUFSO0FBQ0FDLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxHQVBEOztBQVNBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM1QixRQUFNQyxRQUFRLEdBQUdWLEtBQUssQ0FBQ1csTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBT0MsU0FBUCxFQUFxQjtBQUNqRCxhQUFPSixLQUFLLEtBQUtJLFNBQWpCO0FBQ0QsS0FGZ0IsQ0FBakI7QUFHQVosWUFBUSxDQUFDUyxRQUFELENBQVI7QUFDRCxHQUxEOztBQU9BLE1BQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxxQkFDYWYsc0RBQVEsQ0FBQyxJQUFJZ0IsSUFBSixFQUFELENBRHJCO0FBQUEsUUFDZEMsU0FEYztBQUFBLFFBQ0hDLFlBREc7O0FBRXJCLHdCQUNFLHFFQUFDLHVEQUFEO0FBQ0UsY0FBUSxFQUFFRCxTQURaO0FBRUUsY0FBUSxFQUFFLGtCQUFDWixJQUFEO0FBQUEsZUFBVWEsWUFBWSxDQUFDYixJQUFELENBQXRCO0FBQUE7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFNRCxHQVJEOztBQXJCZ0IsS0FxQlZVLFFBckJVOztBQStCaEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLGdCQUFRLEVBQUUsa0JBQUNJLENBQUQ7QUFBQSxpQkFBT2YsVUFBVSxDQUFDZSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFqQjtBQUFBLFNBSFo7QUFJRSxhQUFLLEVBQUVsQjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQVEsZUFBTyxFQUFFSSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUUscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFZRTtBQUFBLGlCQUNHTixLQUFLLENBQUNxQixHQUFOLENBQVUsVUFBQ1QsSUFBRCxFQUFPSCxLQUFQLEVBQWlCO0FBQzFCLDRCQUNFO0FBQUEscUJBQ0dHLElBREgsRUFFR0EsSUFGSCxlQUdFO0FBQVEsbUJBQU8sRUFBRTtBQUFBLHFCQUFNSixVQUFVLENBQUNDLEtBQUQsQ0FBaEI7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBLFdBQVNBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU9ELE9BUkEsQ0FESCxlQVdFO0FBQUEsc1dBYVcsR0FiWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBLGtCQURGO0FBMENELENBekVEOztJQUFNWCxHOztLQUFBQSxHO0FBMkVTQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGlmZkRhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGF0ZVwiO1xuaW1wb3J0IFNldERhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2V0RGF0ZVwiO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RtcFRvZG8sIHNldFRtcFRvZG9dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XG4gICAgaWYgKHRtcFRvZG8gPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwi5paH5a2X44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VG9kb3MoWy4uLnRvZG9zLCB0bXBUb2RvXSk7XG4gICAgc2V0VG1wVG9kbyhcIlwiKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8sIHRvZG9JbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ICE9PSB0b2RvSW5kZXg7XG4gICAgfSk7XG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xuICB9O1xuXG4gIGNvbnN0IERhdGVQaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgICByZXR1cm4gKFxuICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgc2VsZWN0ZWQ9e3N0YXJ0RGF0ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRTdGFydERhdGUoZGF0ZSl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlRvZG8gQXBwPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInRvZG9cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG1wVG9kbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFsdWU9e3RtcFRvZG99XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9kb30+QWRkPC9idXR0b24+XG4gICAgICAgIDxEYXRlUGljayAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge3RvZG99XG4gICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8oaW5kZXgpfT7DlzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb3Jte1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9e1wiIFwifVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})