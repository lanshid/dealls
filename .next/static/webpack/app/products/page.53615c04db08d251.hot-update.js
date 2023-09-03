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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar */ \"(app-pages-browser)/./src/app/sidebar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Products = ()=>{\n    var _products;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const GetListData = async ()=>{\n        const res = await fetch(\"https://dummyjson.com/products\");\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch data\");\n        }\n        const data = await res.json();\n        console.log(\"res\", data);\n        var _data_products;\n        setProducts((_data_products = data.products) !== null && _data_products !== void 0 ? _data_products : []);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        GetListData();\n    }, []);\n    var _dt_title, _dt_brand;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {\n                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 sm:ml-64\",\n                children: [\n                    \"PRODUCTS\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-[10em]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-4 gap-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"brandh\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Select an option\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            id: \"brand\",\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    selected: true,\n                                                    children: \"Choose a Brand\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"US\",\n                                                    children: \"United States\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"CA\",\n                                                    children: \"Canada\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"FR\",\n                                                    children: \"France\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"DE\",\n                                                    children: \"Germany\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative overflow-x-auto mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                    className: \"w-full text-sm text-left text-gray-500\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                            className: \"text-xs text-gray-700 uppercase bg-gray-50\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Product name\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Brand\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Price\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Stock\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Category\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                            children: (_products = products) === null || _products === void 0 ? void 0 : _products.map((dt, i)=>{\n                                                var _dt, _dt1, _dt2, _dt3, _dt4, _dt5;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"bg-white border-b \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                            scope: \"row\",\n                                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap \",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                    src: (_dt = dt) === null || _dt === void 0 ? void 0 : _dt.images[0]\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                                    lineNumber: 78,\n                                                                    columnNumber: 23\n                                                                }, undefined),\n                                                                (_dt_title = (_dt1 = dt) === null || _dt1 === void 0 ? void 0 : _dt1.title) !== null && _dt_title !== void 0 ? _dt_title : \"-\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: (_dt_brand = (_dt2 = dt) === null || _dt2 === void 0 ? void 0 : _dt2.brand) !== null && _dt_brand !== void 0 ? _dt_brand : \"-\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                \"$\",\n                                                                (_dt3 = dt) === null || _dt3 === void 0 ? void 0 : _dt3.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                (_dt4 = dt) === null || _dt4 === void 0 ? void 0 : _dt4.stock,\n                                                                \" pcs\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: (_dt5 = dt) === null || _dt5 === void 0 ? void 0 : _dt5.category\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, i, true, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, undefined);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Products, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0QztBQUNQO0FBRXJDLE1BQU1HLFdBQVc7UUFrRUFDOztJQWpFZixNQUFNLENBQUNBLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNSyxjQUFjO1FBQ2xCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtRQUN4QixJQUFJLENBQUNELElBQUlFLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQkMsUUFBUUMsR0FBRyxDQUFDLE9BQU9IO1lBQ1BBO1FBQVpOLFlBQVlNLENBQUFBLGlCQUFBQSxLQUFLUCxRQUFRLGNBQWJPLDRCQUFBQSxpQkFBaUIsRUFBRTtJQUNqQztJQUVBWCxnREFBU0EsQ0FBQztRQUNSTTtJQUNGLEdBQUcsRUFBRTtRQXlEZ0JTLFdBRXdCQTtJQXpEN0MscUJBQ0U7OzBCQUNFLDhEQUFDYiw2Q0FBT0E7Ozs7OzBCQUNSLDhEQUFDYztnQkFBSUMsV0FBVTs7b0JBQWU7a0NBRTVCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDs7c0RBQ0MsOERBQUNFOzRDQUNDQyxTQUFROzRDQUNSRixXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNHOzRDQUNDQyxJQUFHOzRDQUNISixXQUFVOzs4REFFViw4REFBQ0s7b0RBQU9DLFFBQVE7OERBQUM7Ozs7Ozs4REFDakIsOERBQUNEO29EQUFPRSxPQUFNOzhEQUFLOzs7Ozs7OERBQ25CLDhEQUFDRjtvREFBT0UsT0FBTTs4REFBSzs7Ozs7OzhEQUNuQiw4REFBQ0Y7b0RBQU9FLE9BQU07OERBQUs7Ozs7Ozs4REFDbkIsOERBQUNGO29EQUFPRSxPQUFNOzhEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJekIsOERBQUNSO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDUTtvQ0FBTVIsV0FBVTs7c0RBQ2YsOERBQUNTOzRDQUFNVCxXQUFVO3NEQUNmLDRFQUFDVTs7a0VBQ0MsOERBQUNDO3dEQUFHQyxPQUFNO3dEQUFNWixXQUFVO2tFQUFZOzs7Ozs7a0VBR3RDLDhEQUFDVzt3REFBR0MsT0FBTTt3REFBTVosV0FBVTtrRUFBWTs7Ozs7O2tFQUd0Qyw4REFBQ1c7d0RBQUdDLE9BQU07d0RBQU1aLFdBQVU7a0VBQVk7Ozs7OztrRUFHdEMsOERBQUNXO3dEQUFHQyxPQUFNO3dEQUFNWixXQUFVO2tFQUFZOzs7Ozs7a0VBR3RDLDhEQUFDVzt3REFBR0MsT0FBTTt3REFBTVosV0FBVTtrRUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSzFDLDhEQUFDYTt1REFDRTFCLFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVTJCLEdBQUcsQ0FBQyxDQUFDaEIsSUFBU2lCO29EQU1UakIsS0FDVEEsTUFFd0JBLE1BQ0NBLE1BQ0RBLE1BQ0FBO3FFQVg3Qiw4REFBQ1k7b0RBQUdWLFdBQVU7O3NFQUNaLDhEQUFDVzs0REFDQ0MsT0FBTTs0REFDTlosV0FBVTs7OEVBRVYsOERBQUNnQjtvRUFBSUMsR0FBRyxHQUFFbkIsTUFBQUEsZ0JBQUFBLDBCQUFBQSxJQUFJb0IsTUFBTSxDQUFDLEVBQUU7Ozs7OztnRUFDdEJwQixDQUFBQSxhQUFBQSxPQUFBQSxnQkFBQUEsMkJBQUFBLEtBQUlxQixLQUFLLGNBQVRyQix1QkFBQUEsWUFBYTs7Ozs7OztzRUFFaEIsOERBQUNzQjs0REFBR3BCLFdBQVU7c0VBQWFGLENBQUFBLGFBQUFBLE9BQUFBLGdCQUFBQSwyQkFBQUEsS0FBSXVCLEtBQUssY0FBVHZCLHVCQUFBQSxZQUFhOzs7Ozs7c0VBQ3hDLDhEQUFDc0I7NERBQUdwQixXQUFVOztnRUFBWTtpRUFBRUYsT0FBQUEsZ0JBQUFBLDJCQUFBQSxLQUFJd0IsS0FBSzs7Ozs7OztzRUFDckMsOERBQUNGOzREQUFHcEIsV0FBVTs7aUVBQWFGLE9BQUFBLGdCQUFBQSwyQkFBQUEsS0FBSXlCLEtBQUs7Z0VBQUM7Ozs7Ozs7c0VBQ3JDLDhEQUFDSDs0REFBR3BCLFdBQVU7dUVBQWFGLE9BQUFBLGdCQUFBQSwyQkFBQUEsS0FBSTBCLFFBQVE7Ozs7Ozs7bURBWERUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjFEO0dBeEZNN0I7S0FBQUE7QUEwRk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0cy9wYWdlLnRzeD80ZTdkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL3NpZGViYXJcIjtcblxuY29uc3QgUHJvZHVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IEdldExpc3REYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzXCIpO1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhcInJlc1wiLCBkYXRhKTtcbiAgICBzZXRQcm9kdWN0cyhkYXRhLnByb2R1Y3RzID8/IFtdKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEdldExpc3REYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2lkZWJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc206bWwtNjRcIj5cbiAgICAgICAgUFJPRFVDVFNcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bMTBlbV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJicmFuZGhcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZWxlY3QgYW4gb3B0aW9uXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBpZD1cImJyYW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkNob29zZSBhIEJyYW5kPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTXCI+VW5pdGVkIFN0YXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDQVwiPkNhbmFkYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGUlwiPkZyYW5jZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERVwiPkdlcm1hbnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LXgtYXV0byBtdC00XCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0IG5hbWVcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgQnJhbmRcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJpY2VcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgU3RvY2tcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC02IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cz8ubWFwKChkdDogYW55LCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItYiBcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkdD8uaW1hZ2VzWzBdfS8+XG4gICAgICAgICAgICAgICAgICAgICAge2R0Py50aXRsZSA/PyBcIi1cIn1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPntkdD8uYnJhbmQgPz8gXCItXCJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPiR7ZHQ/LnByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57ZHQ/LnN0b2NrfSBwY3M8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+e2R0Py5jYXRlZ29yeX08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXIiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJHZXRMaXN0RGF0YSIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImR0IiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJvcHRpb24iLCJzZWxlY3RlZCIsInZhbHVlIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwiaSIsImltZyIsInNyYyIsImltYWdlcyIsInRpdGxlIiwidGQiLCJicmFuZCIsInByaWNlIiwic3RvY2siLCJjYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/page.tsx\n"));

/***/ })

});