"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/app/products/page.tsx":
/*!***********************************!*\
  !*** ./src/app/products/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar */ \"(app-pages-browser)/./src/app/sidebar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Products = ()=>{\n    _s();\n    const GetListData = async ()=>{\n        const res = await fetch(\"https://dummyjson.com/products\");\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch data\");\n        }\n        console.log(\"res\", res.json());\n        return res.json();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        GetListData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {\n                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 sm:ml-64\",\n                children: [\n                    \"PRODUCTS\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-[10em]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-4 gap-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"brandh\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Select an option\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            id: \"brand\",\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    selected: true,\n                                                    children: \"Choose a Brand\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"US\",\n                                                    children: \"United States\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"CA\",\n                                                    children: \"Canada\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"FR\",\n                                                    children: \"France\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"DE\",\n                                                    children: \"Germany\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative overflow-x-auto mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                    className: \"w-full text-sm text-left text-gray-500\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                            className: \"text-xs text-gray-700 uppercase bg-gray-50\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Product name\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Brand\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Price\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Stock\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Category\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                className: \"bg-white border-b \",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"row\",\n                                                        className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap \",\n                                                        children: 'Apple MacBook Pro 17\"'\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"px-6 py-4\",\n                                                        children: \"Silver\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"px-6 py-4\",\n                                                        children: \"Laptop\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"px-6 py-4\",\n                                                        children: \"Laptop\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                        className: \"px-6 py-4\",\n                                                        children: \"$2999\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Products, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVrQztBQUNHO0FBRXJDLE1BQU1FLFdBQVc7O0lBRWYsTUFBTUMsY0FBYztRQUNsQixNQUFNQyxNQUFNLE1BQU1DLE1BQU07UUFDeEIsSUFBSSxDQUFDRCxJQUFJRSxFQUFFLEVBQUU7WUFDWCxNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFFQUMsUUFBUUMsR0FBRyxDQUFDLE9BQU9MLElBQUlNLElBQUk7UUFFM0IsT0FBT04sSUFBSU0sSUFBSTtJQUNqQjtJQUVBVixnREFBU0EsQ0FBQztRQUNSRztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ0YsNkNBQU9BOzs7OzswQkFDUiw4REFBQ1U7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUU1Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7O3NEQUNDLDhEQUFDRTs0Q0FDQ0MsU0FBUTs0Q0FDUkYsV0FBVTtzREFDWDs7Ozs7O3NEQUdELDhEQUFDRzs0Q0FDQ0MsSUFBRzs0Q0FDSEosV0FBVTs7OERBRVYsOERBQUNLO29EQUFPQyxRQUFROzhEQUFDOzs7Ozs7OERBQ2pCLDhEQUFDRDtvREFBT0UsT0FBTTs4REFBSzs7Ozs7OzhEQUNuQiw4REFBQ0Y7b0RBQU9FLE9BQU07OERBQUs7Ozs7Ozs4REFDbkIsOERBQUNGO29EQUFPRSxPQUFNOzhEQUFLOzs7Ozs7OERBQ25CLDhEQUFDRjtvREFBT0UsT0FBTTs4REFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSXpCLDhEQUFDUjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1E7b0NBQU1SLFdBQVU7O3NEQUNmLDhEQUFDUzs0Q0FBTVQsV0FBVTtzREFDZiw0RUFBQ1U7O2tFQUNDLDhEQUFDQzt3REFBR0MsT0FBTTt3REFBTVosV0FBVTtrRUFBWTs7Ozs7O2tFQUd0Qyw4REFBQ1c7d0RBQUdDLE9BQU07d0RBQU1aLFdBQVU7a0VBQVk7Ozs7OztrRUFHdEMsOERBQUNXO3dEQUFHQyxPQUFNO3dEQUFNWixXQUFVO2tFQUFZOzs7Ozs7a0VBR3RDLDhEQUFDVzt3REFBR0MsT0FBTTt3REFBTVosV0FBVTtrRUFBWTs7Ozs7O2tFQUd0Qyw4REFBQ1c7d0RBQUdDLE9BQU07d0RBQU1aLFdBQVU7a0VBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUsxQyw4REFBQ2E7c0RBQ0MsNEVBQUNIO2dEQUFHVixXQUFVOztrRUFDWiw4REFBQ1c7d0RBQ0NDLE9BQU07d0RBQ05aLFdBQVU7a0VBQ1g7Ozs7OztrRUFHRCw4REFBQ2M7d0RBQUdkLFdBQVU7a0VBQVk7Ozs7OztrRUFDMUIsOERBQUNjO3dEQUFHZCxXQUFVO2tFQUFZOzs7Ozs7a0VBQzFCLDhEQUFDYzt3REFBR2QsV0FBVTtrRUFBWTs7Ozs7O2tFQUMxQiw4REFBQ2M7d0RBQUdkLFdBQVU7a0VBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QztHQXBGTVY7S0FBQUE7QUFzRk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0cy9wYWdlLnRzeD80ZTdkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vc2lkZWJhclwiO1xuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcblxuICBjb25zdCBHZXRMaXN0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzJylcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpXG4gICAgfVxuICBcbiAgICBjb25zb2xlLmxvZygncmVzJywgcmVzLmpzb24oKSlcblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEdldExpc3REYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNpZGViYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOm1sLTY0XCI+XG4gICAgICAgIFBST0RVQ1RTXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzEwZW1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwiYnJhbmRoXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2VsZWN0IGFuIG9wdGlvblxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJicmFuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5DaG9vc2UgYSBCcmFuZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU1wiPlVuaXRlZCBTdGF0ZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FcIj5DYW5hZGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRlJcIj5GcmFuY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiREVcIj5HZXJtYW55PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWF1dG8gbXQtNFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIHRleHQtbGVmdCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdCBuYW1lXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIEJyYW5kXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFN0b2NrXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWIgXCI+XG4gICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBcHBsZSBNYWNCb29rIFBybyAxN1wiXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlNpbHZlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+TGFwdG9wPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5MYXB0b3A8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPiQyOTk5PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNpZGViYXIiLCJQcm9kdWN0cyIsIkdldExpc3REYXRhIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsIm9wdGlvbiIsInNlbGVjdGVkIiwidmFsdWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/page.tsx\n"));

/***/ })

});