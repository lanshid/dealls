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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar */ \"(app-pages-browser)/./src/app/sidebar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Products = ()=>{\n    var _categories, _products;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const GetListData = async ()=>{\n        const res = await fetch(\"https://dummyjson.com/products\");\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch data\");\n        }\n        const data = await res.json();\n        console.log(\"res\", data);\n        var _data_products;\n        setProducts((_data_products = data.products) !== null && _data_products !== void 0 ? _data_products : []);\n    };\n    const GetCategories = async ()=>{\n        const res = await fetch(\"https://dummyjson.com/products/categories\");\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch data\");\n        }\n        const data = await res.json();\n        console.log(\"res\", data);\n        setCategories(data !== null && data !== void 0 ? data : []);\n    };\n    const GetDataByCategory = async (ct)=>{\n        const res = await fetch(\"https://dummyjson.com/products/category/\".concat(ct));\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch data\");\n        }\n        const data = await res.json();\n        console.log(\"res\", data);\n    // setCategories(data ?? []);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        GetListData();\n        GetCategories();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"ss\", selectedCategory);\n        if (selectedCategory !== \"\") {\n            GetDataByCategory(selectedCategory);\n        }\n    }, [\n        selectedCategory\n    ]);\n    var _dt_title, _dt_brand;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {}, void 0, false, {\n                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 sm:ml-64\",\n                children: [\n                    \"PRODUCTS\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-[10em]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-4 gap-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Select an option\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            id: \"brand\",\n                                            onChange: (e)=>{\n                                                setSelectedCategory(e.target.value);\n                                                console.log(\"maso\");\n                                            },\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    selected: true,\n                                                    children: \"Choose a Category\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                (_categories = categories) === null || _categories === void 0 ? void 0 : _categories.map((ct, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: ct,\n                                                        children: ct\n                                                    }, i, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 19\n                                                    }, undefined))\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative overflow-x-auto mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                    className: \"w-full text-sm text-left text-gray-500\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                            className: \"text-xs text-gray-700 uppercase bg-gray-50\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Product name\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Image\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Brand\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Price\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Stock\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        scope: \"col\",\n                                                        className: \"px-6 py-3\",\n                                                        children: \"Category\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                            children: (_products = products) === null || _products === void 0 ? void 0 : _products.map((dt, i)=>{\n                                                var _dt, _dt1, _dt2, _dt3, _dt4, _dt5;\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    className: \"bg-white border-b \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                            scope: \"row\",\n                                                            className: \"px-6 py-4 font-medium text-gray-900 whitespace-nowrap \",\n                                                            children: (_dt_title = (_dt = dt) === null || _dt === void 0 ? void 0 : _dt.title) !== null && _dt_title !== void 0 ? _dt_title : \"-\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                className: \"w-[115px] h-[115px] object-contain\",\n                                                                src: (_dt1 = dt) === null || _dt1 === void 0 ? void 0 : _dt1.images[0]\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                                lineNumber: 121,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 120,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: (_dt_brand = (_dt2 = dt) === null || _dt2 === void 0 ? void 0 : _dt2.brand) !== null && _dt_brand !== void 0 ? _dt_brand : \"-\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 126,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                \"$\",\n                                                                (_dt3 = dt) === null || _dt3 === void 0 ? void 0 : _dt3.price\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 127,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: [\n                                                                (_dt4 = dt) === null || _dt4 === void 0 ? void 0 : _dt4.stock,\n                                                                \" pcs\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 128,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                            className: \"px-6 py-4\",\n                                                            children: (_dt5 = dt) === null || _dt5 === void 0 ? void 0 : _dt5.category\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                            lineNumber: 129,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, i, true, {\n                                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 19\n                                                }, undefined);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malan/Documents/Test-project/dealls/src/app/products/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Products, \"C5OsIFJ4ybl/E9uOItC8b29SsXE=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0QztBQUNQO0FBRXJDLE1BQU1HLFdBQVc7UUF5RUFDLGFBaUNBQzs7SUF6R2YsTUFBTSxDQUFDQSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDRyxZQUFZRyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUV6RCxNQUFNUyxjQUFjO1FBQ2xCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtRQUN4QixJQUFJLENBQUNELElBQUlFLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQkMsUUFBUUMsR0FBRyxDQUFDLE9BQU9IO1lBQ1BBO1FBQVpULFlBQVlTLENBQUFBLGlCQUFBQSxLQUFLVixRQUFRLGNBQWJVLDRCQUFBQSxpQkFBaUIsRUFBRTtJQUNqQztJQUVBLE1BQU1JLGdCQUFnQjtRQUNwQixNQUFNUixNQUFNLE1BQU1DLE1BQU07UUFDeEIsSUFBSSxDQUFDRCxJQUFJRSxFQUFFLEVBQUU7WUFDWCxNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFFQSxNQUFNQyxPQUFPLE1BQU1KLElBQUlLLElBQUk7UUFDM0JDLFFBQVFDLEdBQUcsQ0FBQyxPQUFPSDtRQUNuQlIsY0FBY1EsaUJBQUFBLGtCQUFBQSxPQUFRLEVBQUU7SUFDMUI7SUFFQSxNQUFNSyxvQkFBb0IsT0FBT0M7UUFDL0IsTUFBTVYsTUFBTSxNQUFNQyxNQUFNLDJDQUE4QyxPQUFIUztRQUNuRSxJQUFJLENBQUNWLElBQUlFLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUMzQkMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCMUQ7R0FySU1qQztLQUFBQTtBQXVJTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3RzL3BhZ2UudHN4PzRlN2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vc2lkZWJhclwiO1xuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgR2V0TGlzdERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHNcIik7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwicmVzXCIsIGRhdGEpO1xuICAgIHNldFByb2R1Y3RzKGRhdGEucHJvZHVjdHMgPz8gW10pO1xuICB9O1xuXG4gIGNvbnN0IEdldENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMvY2F0ZWdvcmllc1wiKTtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJyZXNcIiwgZGF0YSk7XG4gICAgc2V0Q2F0ZWdvcmllcyhkYXRhID8/IFtdKTtcbiAgfTtcblxuICBjb25zdCBHZXREYXRhQnlDYXRlZ29yeSA9IGFzeW5jIChjdDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cy9jYXRlZ29yeS8ke2N0fWApO1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhcInJlc1wiLCBkYXRhKTtcbiAgICAvLyBzZXRDYXRlZ29yaWVzKGRhdGEgPz8gW10pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgR2V0TGlzdERhdGEoKTtcbiAgICBHZXRDYXRlZ29yaWVzKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic3NcIiwgc2VsZWN0ZWRDYXRlZ29yeSk7XG4gICAgaWYoc2VsZWN0ZWRDYXRlZ29yeSAhPT0gXCJcIikge1xuICAgICAgR2V0RGF0YUJ5Q2F0ZWdvcnkoc2VsZWN0ZWRDYXRlZ29yeSlcbiAgICB9XG4gIH0sIFtzZWxlY3RlZENhdGVnb3J5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNpZGViYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHNtOm1sLTY0XCI+XG4gICAgICAgIFBST0RVQ1RTXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzEwZW1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwiXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2VsZWN0IGFuIG9wdGlvblxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJicmFuZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtYXNvXCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5DaG9vc2UgYSBDYXRlZ29yeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzPy5tYXAoKGN0OiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Y3R9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIHtjdH1cbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvIG10LTRcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtNiBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgbmFtZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBJbWFnZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBCcmFuZFxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBQcmljZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBTdG9ja1xuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInB4LTYgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzPy5tYXAoKGR0OiBhbnksIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1iIFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2R0Py50aXRsZSA/PyBcIi1cIn1cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzExNXB4XSBoLVsxMTVweF0gb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkdD8uaW1hZ2VzWzBdfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57ZHQ/LmJyYW5kID8/IFwiLVwifTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj4ke2R0Py5wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+e2R0Py5zdG9ja30gcGNzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPntkdD8uY2F0ZWdvcnl9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyIiwiUHJvZHVjdHMiLCJjYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNldENhdGVnb3JpZXMiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsIkdldExpc3REYXRhIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiR2V0Q2F0ZWdvcmllcyIsIkdldERhdGFCeUNhdGVnb3J5IiwiY3QiLCJkdCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb24iLCJzZWxlY3RlZCIsIm1hcCIsImkiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJ0aXRsZSIsInRkIiwiaW1nIiwic3JjIiwiaW1hZ2VzIiwiYnJhbmQiLCJwcmljZSIsInN0b2NrIiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/page.tsx\n"));

/***/ })

});