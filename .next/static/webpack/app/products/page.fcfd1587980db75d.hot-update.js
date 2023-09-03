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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar */ \"(app-pages-browser)/./src/app/sidebar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Products = ()=>{\n    var _products;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const GetListData = async ()=>{\n        const res = await fetch(\"https://dummyjson.com/products\");\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch data\");\n        }\n        const data = await res.json();\n        console.log(\"res\", data);\n        var _data_products;\n        setProducts((_data_products = data.products) !== null && _data_products !== void 0 ? _data_products : []);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        GetListData();\n    }, []);\n    var _dt_title, _dt_brand;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {\n                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 sm:ml-64\",\n                children: [\n                    \"PRODUCTS\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-[10em]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-4 gap-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"brandh\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Select an option\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            id: \"brand\",\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    selected: true,\n                                                    children: \"Choose a Brand\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"US\",\n                                                    children: \"United States\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"CA\",\n                                                    children: \"Canada\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"FR\",\n                                                    children: \"France\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"DE\",\n                                                    children: \"Germany\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative overflow-x-auto mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                    className: \"w-full text-sm text-left text-gray-500\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                            className: \"text-xs text-gray-700 uppercase bg-gray-50\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Product name\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Image\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Brand\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Price\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Stock\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Category\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                            children: (_products = products) === null || _products === void 0 ? void 0 : _products.map((dt, i)=>{\n                                                var _dt, _dt1, _dt2, _dt3, _dt4, _dt5;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"bg-white border-b \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap \",\n                                                            children: (_dt_title = (_dt = dt) === null || _dt === void 0 ? void 0 : _dt.title) !== null && _dt_title !== void 0 ? _dt_title : \"-\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                className: \"w-[115px] h-[115px] object-contain\",\n                                                                src: (_dt1 = dt) === null || _dt1 === void 0 ? void 0 : _dt1.images[0]\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                                lineNumber: 83,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: (_dt_brand = (_dt2 = dt) === null || _dt2 === void 0 ? void 0 : _dt2.brand) !== null && _dt_brand !== void 0 ? _dt_brand : \"-\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                \"$\",\n                                                                (_dt3 = dt) === null || _dt3 === void 0 ? void 0 : _dt3.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                (_dt4 = dt) === null || _dt4 === void 0 ? void 0 : _dt4.stock,\n                                                                \" pcs\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: (_dt5 = dt) === null || _dt5 === void 0 ? void 0 : _dt5.category\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, i, true, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 19\n                                                }, undefined);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Products, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0QztBQUNQO0FBRXJDLE1BQU1HLFdBQVc7UUFxRUFDOztJQXBFZixNQUFNLENBQUNBLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNSyxjQUFjO1FBQ2xCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtRQUN4QixJQUFJLENBQUNELElBQUlFLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQkMsUUFBUUMsR0FBRyxDQUFDLE9BQU9IO1lBQ1BBO1FBQVpOLFlBQVlNLENBQUFBLGlCQUFBQSxLQUFLUCxRQUFRLGNBQWJPLDRCQUFBQSxpQkFBaUIsRUFBRTtJQUNqQztJQUVBWCxnREFBU0EsQ0FBQztRQUNSTTtJQUNGLEdBQUcsRUFBRTtRQTBEZ0JTLFdBS3dCQTtJQTdEN0MscUJBQ0U7OzBCQUNFLDhEQUFDYiw2Q0FBT0E7Ozs7OzBCQUNSLDhEQUFDYztnQkFBSUMsV0FBVTs7b0JBQWU7a0NBRTVCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDs7c0RBQ0MsOERBQUNFOzRDQUNDQyxTQUFROzRDQUNSRixXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNHOzRDQUNDQyxJQUFHOzRDQUNISixXQUFVOzs4REFFViw4REFBQ0s7b0RBQU9DLFFBQVE7OERBQUM7Ozs7Ozs4REFDakIsOERBQUNEO29EQUFPRSxPQUFNOzhEQUFLOzs7Ozs7OERBQ25CLDhEQUFDRjtvREFBT0UsT0FBTTs4REFBSzs7Ozs7OzhEQUNuQiw4REFBQ0Y7b0RBQU9FLE9BQU07OERBQUs7Ozs7Ozs4REFDbkIsOERBQUNGO29EQUFPRSxPQUFNOzhEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJekIsOERBQUNSO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDUTtvQ0FBTVIsV0FBVTs7c0RBQ2YsOERBQUNTOzRDQUFNVCxXQUFVO3NEQUNmLDRFQUFDVTs7a0VBQ0MsOERBQUNDO3dEQUFHQyxPQUFNO3dEQUFNWixXQUFVO2tFQUFZOzs7Ozs7a0VBR3RDLDhEQUFDVzt3REFBR0MsT0FBTTt3REFBTVosV0FBVTtrRUFBWTs7Ozs7O2tFQUd0Qyw4REFBQ1c7d0RBQUdDLE9BQU07d0RBQU1aLFdBQVU7a0VBQVk7Ozs7OztrRUFHdEMsOERBQUNXO3dEQUFHQyxPQUFNO3dEQUFNWixXQUFVO2tFQUFZOzs7Ozs7a0VBR3RDLDhEQUFDVzt3REFBR0MsT0FBTTt3REFBTVosV0FBVTtrRUFBWTs7Ozs7O2tFQUd0Qyw4REFBQ1c7d0RBQUdDLE9BQU07d0RBQU1aLFdBQVU7a0VBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUsxQyw4REFBQ2E7dURBQ0UxQixZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVUyQixHQUFHLENBQUMsQ0FBQ2hCLElBQVNpQjtvREFLbEJqQixLQUd3REEsTUFFaENBLE1BQ0NBLE1BQ0RBLE1BQ0FBO3FFQVo3Qiw4REFBQ1k7b0RBQUdWLFdBQVU7O3NFQUNaLDhEQUFDVzs0REFDQ1gsV0FBVTtzRUFFVEYsQ0FBQUEsYUFBQUEsTUFBQUEsZ0JBQUFBLDBCQUFBQSxJQUFJa0IsS0FBSyxjQUFUbEIsdUJBQUFBLFlBQWE7Ozs7OztzRUFFaEIsOERBQUNtQjtzRUFDQyw0RUFBQ0M7Z0VBQUlsQixXQUFVO2dFQUFxQ21CLEdBQUcsR0FBRXJCLE9BQUFBLGdCQUFBQSwyQkFBQUEsS0FBSXNCLE1BQU0sQ0FBQyxFQUFFOzs7Ozs7Ozs7OztzRUFFeEUsOERBQUNIOzREQUFHakIsV0FBVTtzRUFBYUYsQ0FBQUEsYUFBQUEsT0FBQUEsZ0JBQUFBLDJCQUFBQSxLQUFJdUIsS0FBSyxjQUFUdkIsdUJBQUFBLFlBQWE7Ozs7OztzRUFDeEMsOERBQUNtQjs0REFBR2pCLFdBQVU7O2dFQUFZO2lFQUFFRixPQUFBQSxnQkFBQUEsMkJBQUFBLEtBQUl3QixLQUFLOzs7Ozs7O3NFQUNyQyw4REFBQ0w7NERBQUdqQixXQUFVOztpRUFBYUYsT0FBQUEsZ0JBQUFBLDJCQUFBQSxLQUFJeUIsS0FBSztnRUFBQzs7Ozs7OztzRUFDckMsOERBQUNOOzREQUFHakIsV0FBVTt1RUFBYUYsT0FBQUEsZ0JBQUFBLDJCQUFBQSxLQUFJMEIsUUFBUTs7Ozs7OzttREFaRFQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCMUQ7R0E1Rk03QjtLQUFBQTtBQThGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3RzL3BhZ2UudHN4PzRlN2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vc2lkZWJhclwiO1xuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgR2V0TGlzdERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHNcIik7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwicmVzXCIsIGRhdGEpO1xuICAgIHNldFByb2R1Y3RzKGRhdGEucHJvZHVjdHMgPz8gW10pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgR2V0TGlzdERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTptbC02NFwiPlxuICAgICAgICBQUk9EVUNUU1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVsxMGVtXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImJyYW5kaFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBhbiBvcHRpb25cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwiYnJhbmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Q2hvb3NlIGEgQnJhbmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVNcIj5Vbml0ZWQgU3RhdGVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBXCI+Q2FuYWRhPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZSXCI+RnJhbmNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRFXCI+R2VybWFueTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvIG10LTRcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgbmFtZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBCcmFuZFxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBQcmljZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBTdG9ja1xuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzPy5tYXAoKGR0OiBhbnksIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1iIFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZHQ/LnRpdGxlID8/IFwiLVwifVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LVsxMTVweF0gaC1bMTE1cHhdIG9iamVjdC1jb250YWluXCIgc3JjPXtkdD8uaW1hZ2VzWzBdfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57ZHQ/LmJyYW5kID8/IFwiLVwifTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj4ke2R0Py5wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+e2R0Py5zdG9ja30gcGNzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPntkdD8uY2F0ZWdvcnl9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyIiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiR2V0TGlzdERhdGEiLCJyZXMiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkdCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJ2YWx1ZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJ0Ym9keSIsIm1hcCIsImkiLCJ0aXRsZSIsInRkIiwiaW1nIiwic3JjIiwiaW1hZ2VzIiwiYnJhbmQiLCJwcmljZSIsInN0b2NrIiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/page.tsx\n"));

/***/ })

});