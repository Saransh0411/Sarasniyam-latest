"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/list/teachers/page",{

/***/ "(app-pages-browser)/./lib/Teacher.ts":
/*!************************!*\
  !*** ./lib/Teacher.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Batches: function() { return /* binding */ Batches; },\n/* harmony export */   Subjects: function() { return /* binding */ Subjects; },\n/* harmony export */   TeachersData: function() { return /* binding */ TeachersData; }\n/* harmony export */ });\nconst Subjects = [\n    \"Math\",\n    \"English\",\n    \"Physics\",\n    \"Chemistry\",\n    \"Biology\",\n    \"History\",\n    \"Geography\",\n    \"Art\",\n    \"Music\",\n    \"Literature\"\n];\nconst Batches = [\n    \"A1\",\n    \"2QAaav . ddvfvvA\",\n    \"Physics\",\n    \"Chemistry\",\n    \"Biology\",\n    \"History\",\n    \"Geography\",\n    \"Art\",\n    \"Music\",\n    \"Literature\"\n];\nconst TeachersData = [\n    {\n        \"id\": 1,\n        \"teacherId\": \"1234567890\",\n        \"name\": \"Jane Doe\",\n        \"email\": \"jane@doe.com\",\n        \"photo\": \"https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"1234567890\",\n        \"subjects\": [\n            \"Physics\",\n            \"Chemistry\"\n        ],\n        \"batches\": [\n            \"A1\",\n            \"A2\",\n            \"B1\"\n        ],\n        \"address\": \"123 Main St, Anytown, USA\"\n    },\n    {\n        \"id\": 2,\n        \"teacherId\": \"2345678901\",\n        \"name\": \"John Smith\",\n        \"email\": \"john@smith.com\",\n        \"photo\": \"https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"2345678901\",\n        \"subjects\": [\n            \"Mathematics\",\n            \"Biology\"\n        ],\n        \"batches\": [\n            \"A1\",\n            \"B2\",\n            \"C1\"\n        ],\n        \"address\": \"456 Elm St, Othertown, USA\"\n    },\n    {\n        \"id\": 3,\n        \"teacherId\": \"3456789012\",\n        \"name\": \"Emily Johnson\",\n        \"email\": \"emily@johnson.com\",\n        \"photo\": \"https://images.pexels.com/photos/234567/pexels-photo-234567.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"3456789012\",\n        \"subjects\": [\n            \"English\",\n            \"History\"\n        ],\n        \"batches\": [\n            \"A3\",\n            \"B3\",\n            \"C2\"\n        ],\n        \"address\": \"789 Pine St, Sometown, USA\"\n    },\n    {\n        \"id\": 4,\n        \"teacherId\": \"4567890123\",\n        \"name\": \"Michael Brown\",\n        \"email\": \"michael@brown.com\",\n        \"photo\": \"https://images.pexels.com/photos/345678/pexels-photo-345678.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"4567890123\",\n        \"subjects\": [\n            \"Geography\",\n            \"Art\"\n        ],\n        \"batches\": [\n            \"A2\",\n            \"C3\"\n        ],\n        \"address\": \"101 Maple St, Anycity, USA\"\n    },\n    {\n        \"id\": 5,\n        \"teacherId\": \"5678901234\",\n        \"name\": \"Sarah Wilson\",\n        \"email\": \"sarah@wilson.com\",\n        \"photo\": \"https://images.pexels.com/photos/456789/pexels-photo-456789.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"5678901234\",\n        \"subjects\": [\n            \"Chemistry\",\n            \"Biology\"\n        ],\n        \"batches\": [\n            \"B1\",\n            \"C1\"\n        ],\n        \"address\": \"202 Oak St, Newtown, USA\"\n    },\n    {\n        \"id\": 6,\n        \"teacherId\": \"6789012345\",\n        \"name\": \"David Miller\",\n        \"email\": \"david@miller.com\",\n        \"photo\": \"https://images.pexels.com/photos/567890/pexels-photo-567890.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"6789012345\",\n        \"subjects\": [\n            \"Mathematics\",\n            \"Physics\"\n        ],\n        \"batches\": [\n            \"A1\",\n            \"B2\"\n        ],\n        \"address\": \"303 Birch St, Oldtown, USA\"\n    },\n    {\n        \"id\": 7,\n        \"teacherId\": \"7890123456\",\n        \"name\": \"Jessica Garcia\",\n        \"email\": \"jessica@garcia.com\",\n        \"photo\": \"https://images.pexels.com/photos/678901/pexels-photo-678901.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"7890123456\",\n        \"subjects\": [\n            \"English\",\n            \"Art\"\n        ],\n        \"batches\": [\n            \"A2\",\n            \"C2\"\n        ],\n        \"address\": \"404 Cedar St, Yourtown, USA\"\n    },\n    {\n        \"id\": 8,\n        \"teacherId\": \"8901234567\",\n        \"name\": \"Daniel Martinez\",\n        \"email\": \"daniel@martinez.com\",\n        \"photo\": \"https://images.pexels.com/photos/789012/pexels-photo-789012.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"8901234567\",\n        \"subjects\": [\n            \"History\",\n            \"Geography\"\n        ],\n        \"batches\": [\n            \"B3\",\n            \"C3\"\n        ],\n        \"address\": \"505 Spruce St, Hometown, USA\"\n    },\n    {\n        \"id\": 9,\n        \"teacherId\": \"9012345678\",\n        \"name\": \"Laura Hernandez\",\n        \"email\": \"laura@hernandez.com\",\n        \"photo\": \"https://images.pexels.com/photos/890123/pexels-photo-890123.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"9012345678\",\n        \"subjects\": [\n            \"Mathematics\",\n            \"English\"\n        ],\n        \"batches\": [\n            \"A3\",\n            \"B1\"\n        ],\n        \"address\": \"606 Fir St, Anycity, USA\"\n    },\n    {\n        \"id\": 10,\n        \"teacherId\": \"0123456789\",\n        \"name\": \"Kevin Lee\",\n        \"email\": \"kevin@lee.com\",\n        \"photo\": \"https://images.pexels.com/photos/901234/pexels-photo-901234.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"0123456789\",\n        \"subjects\": [\n            \"Physics\",\n            \"Chemistry\"\n        ],\n        \"batches\": [\n            \"C1\",\n            \"C2\"\n        ],\n        \"address\": \"707 Cherry St, Anytown, USA\"\n    },\n    {\n        \"id\": 11,\n        \"teacherId\": \"1234567891\",\n        \"name\": \"Megan Walker\",\n        \"email\": \"megan@walker.com\",\n        \"photo\": \"https://images.pexels.com/photos/101234/pexels-photo-101234.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"1234567891\",\n        \"subjects\": [\n            \"Biology\",\n            \"History\"\n        ],\n        \"batches\": [\n            \"A1\",\n            \"B2\"\n        ],\n        \"address\": \"808 Plum St, Othertown, USA\"\n    },\n    {\n        \"id\": 12,\n        \"teacherId\": \"2345678902\",\n        \"name\": \"Brian Hall\",\n        \"email\": \"brian@hall.com\",\n        \"photo\": \"https://images.pexels.com/photos/112345/pexels-photo-112345.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"2345678902\",\n        \"subjects\": [\n            \"Chemistry\",\n            \"Mathematics\"\n        ],\n        \"batches\": [\n            \"A2\",\n            \"C3\"\n        ],\n        \"address\": \"909 Lime St, Sometown, USA\"\n    },\n    {\n        \"id\": 13,\n        \"teacherId\": \"3456789013\",\n        \"name\": \"Angela Young\",\n        \"email\": \"angela@young.com\",\n        \"photo\": \"https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"3456789013\",\n        \"subjects\": [\n            \"English\",\n            \"Art\"\n        ],\n        \"batches\": [\n            \"B1\",\n            \"C1\"\n        ],\n        \"address\": \"1000 Walnut St, Newtown, USA\"\n    },\n    {\n        \"id\": 14,\n        \"teacherId\": \"4567890124\",\n        \"name\": \"Anthony King\",\n        \"email\": \"anthony@king.com\",\n        \"photo\": \"https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"4567890124\",\n        \"subjects\": [\n            \"Physics\",\n            \"Geography\"\n        ],\n        \"batches\": [\n            \"A3\",\n            \"B3\"\n        ],\n        \"address\": \"1001 Chestnut St, Oldtown, USA\"\n    },\n    {\n        \"id\": 15,\n        \"teacherId\": \"5678901235\",\n        \"name\": \"Sophia Wright\",\n        \"email\": \"sophia@wright.com\",\n        \"photo\": \"https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg?auto=compress&cs=tinysrgb&w=1200\",\n        \"phone\": \"5678901235\",\n        \"subjects\": [\n            \"Mathematics\",\n            \"Biology\"\n        ],\n        \"batches\": [\n            \"C2\",\n            \"C3\"\n        ],\n        \"address\": \"1002 Hickory St, Yourtown, USA\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9UZWFjaGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFdBQVM7SUFDcEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVNLE1BQU1DLFVBQVE7SUFDbkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUdNLE1BQU1DLGVBQWU7SUFDMUI7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBVztTQUFZO1FBQ3BDLFdBQVc7WUFBQztZQUFNO1lBQU07U0FBSztRQUM3QixXQUFXO0lBQ2I7SUFDQTtRQUNFLE1BQU07UUFDTixhQUFhO1FBQ2IsUUFBUTtRQUNSLFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFlBQVk7WUFBQztZQUFlO1NBQVU7UUFDdEMsV0FBVztZQUFDO1lBQU07WUFBTTtTQUFLO1FBQzdCLFdBQVc7SUFDYjtJQUNBO1FBQ0UsTUFBTTtRQUNOLGFBQWE7UUFDYixRQUFRO1FBQ1IsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsWUFBWTtZQUFDO1lBQVc7U0FBVTtRQUNsQyxXQUFXO1lBQUM7WUFBTTtZQUFNO1NBQUs7UUFDN0IsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBYTtTQUFNO1FBQ2hDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBYTtTQUFVO1FBQ3BDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBZTtTQUFVO1FBQ3RDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBVztTQUFNO1FBQzlCLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBVztTQUFZO1FBQ3BDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBZTtTQUFVO1FBQ3RDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBVztTQUFZO1FBQ3BDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBVztTQUFVO1FBQ2xDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBYTtTQUFjO1FBQ3hDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBVztTQUFNO1FBQzlCLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBVztTQUFZO1FBQ3BDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0lBQ0E7UUFDRSxNQUFNO1FBQ04sYUFBYTtRQUNiLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxZQUFZO1lBQUM7WUFBZTtTQUFVO1FBQ3RDLFdBQVc7WUFBQztZQUFNO1NBQUs7UUFDdkIsV0FBVztJQUNiO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1RlYWNoZXIudHM/NTBjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU3ViamVjdHM9W1xyXG4gICdNYXRoJyxcclxuICAnRW5nbGlzaCcsXHJcbiAgJ1BoeXNpY3MnLFxyXG4gICdDaGVtaXN0cnknLFxyXG4gICdCaW9sb2d5JyxcclxuICAnSGlzdG9yeScsXHJcbiAgJ0dlb2dyYXBoeScsXHJcbiAgJ0FydCcsXHJcbiAgJ011c2ljJyxcclxuICAnTGl0ZXJhdHVyZSdcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IEJhdGNoZXM9W1xyXG4gICdBMScsXHJcbiAgJzJRQWFhdiAuIGRkdmZ2dkEnLFxyXG4gICdQaHlzaWNzJyxcclxuICAnQ2hlbWlzdHJ5JyxcclxuICAnQmlvbG9neScsXHJcbiAgJ0hpc3RvcnknLFxyXG4gICdHZW9ncmFwaHknLFxyXG4gICdBcnQnLFxyXG4gICdNdXNpYycsXHJcbiAgJ0xpdGVyYXR1cmUnXHJcbl1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVGVhY2hlcnNEYXRhID0gW1xyXG4gIHtcclxuICAgIFwiaWRcIjogMSxcclxuICAgIFwidGVhY2hlcklkXCI6IFwiMTIzNDU2Nzg5MFwiLFxyXG4gICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIixcclxuICAgIFwiZW1haWxcIjogXCJqYW5lQGRvZS5jb21cIixcclxuICAgIFwicGhvdG9cIjogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy85MzYxMjYvcGV4ZWxzLXBob3RvLTkzNjEyNi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjAwXCIsXHJcbiAgICBcInBob25lXCI6IFwiMTIzNDU2Nzg5MFwiLFxyXG4gICAgXCJzdWJqZWN0c1wiOiBbXCJQaHlzaWNzXCIsIFwiQ2hlbWlzdHJ5XCJdLFxyXG4gICAgXCJiYXRjaGVzXCI6IFtcIkExXCIsIFwiQTJcIiwgXCJCMVwiXSxcclxuICAgIFwiYWRkcmVzc1wiOiBcIjEyMyBNYWluIFN0LCBBbnl0b3duLCBVU0FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiAyLFxyXG4gICAgXCJ0ZWFjaGVySWRcIjogXCIyMzQ1Njc4OTAxXCIsXHJcbiAgICBcIm5hbWVcIjogXCJKb2huIFNtaXRoXCIsXHJcbiAgICBcImVtYWlsXCI6IFwiam9obkBzbWl0aC5jb21cIixcclxuICAgIFwicGhvdG9cIjogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xMjM0NTYvcGV4ZWxzLXBob3RvLTEyMzQ1Ni5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjAwXCIsXHJcbiAgICBcInBob25lXCI6IFwiMjM0NTY3ODkwMVwiLFxyXG4gICAgXCJzdWJqZWN0c1wiOiBbXCJNYXRoZW1hdGljc1wiLCBcIkJpb2xvZ3lcIl0sXHJcbiAgICBcImJhdGNoZXNcIjogW1wiQTFcIiwgXCJCMlwiLCBcIkMxXCJdLFxyXG4gICAgXCJhZGRyZXNzXCI6IFwiNDU2IEVsbSBTdCwgT3RoZXJ0b3duLCBVU0FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiAzLFxyXG4gICAgXCJ0ZWFjaGVySWRcIjogXCIzNDU2Nzg5MDEyXCIsXHJcbiAgICBcIm5hbWVcIjogXCJFbWlseSBKb2huc29uXCIsXHJcbiAgICBcImVtYWlsXCI6IFwiZW1pbHlAam9obnNvbi5jb21cIixcclxuICAgIFwicGhvdG9cIjogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yMzQ1NjcvcGV4ZWxzLXBob3RvLTIzNDU2Ny5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjAwXCIsXHJcbiAgICBcInBob25lXCI6IFwiMzQ1Njc4OTAxMlwiLFxyXG4gICAgXCJzdWJqZWN0c1wiOiBbXCJFbmdsaXNoXCIsIFwiSGlzdG9yeVwiXSxcclxuICAgIFwiYmF0Y2hlc1wiOiBbXCJBM1wiLCBcIkIzXCIsIFwiQzJcIl0sXHJcbiAgICBcImFkZHJlc3NcIjogXCI3ODkgUGluZSBTdCwgU29tZXRvd24sIFVTQVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IDQsXHJcbiAgICBcInRlYWNoZXJJZFwiOiBcIjQ1Njc4OTAxMjNcIixcclxuICAgIFwibmFtZVwiOiBcIk1pY2hhZWwgQnJvd25cIixcclxuICAgIFwiZW1haWxcIjogXCJtaWNoYWVsQGJyb3duLmNvbVwiLFxyXG4gICAgXCJwaG90b1wiOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM0NTY3OC9wZXhlbHMtcGhvdG8tMzQ1Njc4LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyMDBcIixcclxuICAgIFwicGhvbmVcIjogXCI0NTY3ODkwMTIzXCIsXHJcbiAgICBcInN1YmplY3RzXCI6IFtcIkdlb2dyYXBoeVwiLCBcIkFydFwiXSxcclxuICAgIFwiYmF0Y2hlc1wiOiBbXCJBMlwiLCBcIkMzXCJdLFxyXG4gICAgXCJhZGRyZXNzXCI6IFwiMTAxIE1hcGxlIFN0LCBBbnljaXR5LCBVU0FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiA1LFxyXG4gICAgXCJ0ZWFjaGVySWRcIjogXCI1Njc4OTAxMjM0XCIsXHJcbiAgICBcIm5hbWVcIjogXCJTYXJhaCBXaWxzb25cIixcclxuICAgIFwiZW1haWxcIjogXCJzYXJhaEB3aWxzb24uY29tXCIsXHJcbiAgICBcInBob3RvXCI6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDU2Nzg5L3BleGVscy1waG90by00NTY3ODkuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTIwMFwiLFxyXG4gICAgXCJwaG9uZVwiOiBcIjU2Nzg5MDEyMzRcIixcclxuICAgIFwic3ViamVjdHNcIjogW1wiQ2hlbWlzdHJ5XCIsIFwiQmlvbG9neVwiXSxcclxuICAgIFwiYmF0Y2hlc1wiOiBbXCJCMVwiLCBcIkMxXCJdLFxyXG4gICAgXCJhZGRyZXNzXCI6IFwiMjAyIE9hayBTdCwgTmV3dG93biwgVVNBXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogNixcclxuICAgIFwidGVhY2hlcklkXCI6IFwiNjc4OTAxMjM0NVwiLFxyXG4gICAgXCJuYW1lXCI6IFwiRGF2aWQgTWlsbGVyXCIsXHJcbiAgICBcImVtYWlsXCI6IFwiZGF2aWRAbWlsbGVyLmNvbVwiLFxyXG4gICAgXCJwaG90b1wiOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU2Nzg5MC9wZXhlbHMtcGhvdG8tNTY3ODkwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyMDBcIixcclxuICAgIFwicGhvbmVcIjogXCI2Nzg5MDEyMzQ1XCIsXHJcbiAgICBcInN1YmplY3RzXCI6IFtcIk1hdGhlbWF0aWNzXCIsIFwiUGh5c2ljc1wiXSxcclxuICAgIFwiYmF0Y2hlc1wiOiBbXCJBMVwiLCBcIkIyXCJdLFxyXG4gICAgXCJhZGRyZXNzXCI6IFwiMzAzIEJpcmNoIFN0LCBPbGR0b3duLCBVU0FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiA3LFxyXG4gICAgXCJ0ZWFjaGVySWRcIjogXCI3ODkwMTIzNDU2XCIsXHJcbiAgICBcIm5hbWVcIjogXCJKZXNzaWNhIEdhcmNpYVwiLFxyXG4gICAgXCJlbWFpbFwiOiBcImplc3NpY2FAZ2FyY2lhLmNvbVwiLFxyXG4gICAgXCJwaG90b1wiOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzY3ODkwMS9wZXhlbHMtcGhvdG8tNjc4OTAxLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyMDBcIixcclxuICAgIFwicGhvbmVcIjogXCI3ODkwMTIzNDU2XCIsXHJcbiAgICBcInN1YmplY3RzXCI6IFtcIkVuZ2xpc2hcIiwgXCJBcnRcIl0sXHJcbiAgICBcImJhdGNoZXNcIjogW1wiQTJcIiwgXCJDMlwiXSxcclxuICAgIFwiYWRkcmVzc1wiOiBcIjQwNCBDZWRhciBTdCwgWW91cnRvd24sIFVTQVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IDgsXHJcbiAgICBcInRlYWNoZXJJZFwiOiBcIjg5MDEyMzQ1NjdcIixcclxuICAgIFwibmFtZVwiOiBcIkRhbmllbCBNYXJ0aW5lelwiLFxyXG4gICAgXCJlbWFpbFwiOiBcImRhbmllbEBtYXJ0aW5lei5jb21cIixcclxuICAgIFwicGhvdG9cIjogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy83ODkwMTIvcGV4ZWxzLXBob3RvLTc4OTAxMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjAwXCIsXHJcbiAgICBcInBob25lXCI6IFwiODkwMTIzNDU2N1wiLFxyXG4gICAgXCJzdWJqZWN0c1wiOiBbXCJIaXN0b3J5XCIsIFwiR2VvZ3JhcGh5XCJdLFxyXG4gICAgXCJiYXRjaGVzXCI6IFtcIkIzXCIsIFwiQzNcIl0sXHJcbiAgICBcImFkZHJlc3NcIjogXCI1MDUgU3BydWNlIFN0LCBIb21ldG93biwgVVNBXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogOSxcclxuICAgIFwidGVhY2hlcklkXCI6IFwiOTAxMjM0NTY3OFwiLFxyXG4gICAgXCJuYW1lXCI6IFwiTGF1cmEgSGVybmFuZGV6XCIsXHJcbiAgICBcImVtYWlsXCI6IFwibGF1cmFAaGVybmFuZGV6LmNvbVwiLFxyXG4gICAgXCJwaG90b1wiOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzg5MDEyMy9wZXhlbHMtcGhvdG8tODkwMTIzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyMDBcIixcclxuICAgIFwicGhvbmVcIjogXCI5MDEyMzQ1Njc4XCIsXHJcbiAgICBcInN1YmplY3RzXCI6IFtcIk1hdGhlbWF0aWNzXCIsIFwiRW5nbGlzaFwiXSxcclxuICAgIFwiYmF0Y2hlc1wiOiBbXCJBM1wiLCBcIkIxXCJdLFxyXG4gICAgXCJhZGRyZXNzXCI6IFwiNjA2IEZpciBTdCwgQW55Y2l0eSwgVVNBXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogMTAsXHJcbiAgICBcInRlYWNoZXJJZFwiOiBcIjAxMjM0NTY3ODlcIixcclxuICAgIFwibmFtZVwiOiBcIktldmluIExlZVwiLFxyXG4gICAgXCJlbWFpbFwiOiBcImtldmluQGxlZS5jb21cIixcclxuICAgIFwicGhvdG9cIjogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy85MDEyMzQvcGV4ZWxzLXBob3RvLTkwMTIzNC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjAwXCIsXHJcbiAgICBcInBob25lXCI6IFwiMDEyMzQ1Njc4OVwiLFxyXG4gICAgXCJzdWJqZWN0c1wiOiBbXCJQaHlzaWNzXCIsIFwiQ2hlbWlzdHJ5XCJdLFxyXG4gICAgXCJiYXRjaGVzXCI6IFtcIkMxXCIsIFwiQzJcIl0sXHJcbiAgICBcImFkZHJlc3NcIjogXCI3MDcgQ2hlcnJ5IFN0LCBBbnl0b3duLCBVU0FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiAxMSxcclxuICAgIFwidGVhY2hlcklkXCI6IFwiMTIzNDU2Nzg5MVwiLFxyXG4gICAgXCJuYW1lXCI6IFwiTWVnYW4gV2Fsa2VyXCIsXHJcbiAgICBcImVtYWlsXCI6IFwibWVnYW5Ad2Fsa2VyLmNvbVwiLFxyXG4gICAgXCJwaG90b1wiOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzEwMTIzNC9wZXhlbHMtcGhvdG8tMTAxMjM0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyMDBcIixcclxuICAgIFwicGhvbmVcIjogXCIxMjM0NTY3ODkxXCIsXHJcbiAgICBcInN1YmplY3RzXCI6IFtcIkJpb2xvZ3lcIiwgXCJIaXN0b3J5XCJdLFxyXG4gICAgXCJiYXRjaGVzXCI6IFtcIkExXCIsIFwiQjJcIl0sXHJcbiAgICBcImFkZHJlc3NcIjogXCI4MDggUGx1bSBTdCwgT3RoZXJ0b3duLCBVU0FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiAxMixcclxuICAgIFwidGVhY2hlcklkXCI6IFwiMjM0NTY3ODkwMlwiLFxyXG4gICAgXCJuYW1lXCI6IFwiQnJpYW4gSGFsbFwiLFxyXG4gICAgXCJlbWFpbFwiOiBcImJyaWFuQGhhbGwuY29tXCIsXHJcbiAgICBcInBob3RvXCI6IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTEyMzQ1L3BleGVscy1waG90by0xMTIzNDUuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTIwMFwiLFxyXG4gICAgXCJwaG9uZVwiOiBcIjIzNDU2Nzg5MDJcIixcclxuICAgIFwic3ViamVjdHNcIjogW1wiQ2hlbWlzdHJ5XCIsIFwiTWF0aGVtYXRpY3NcIl0sXHJcbiAgICBcImJhdGNoZXNcIjogW1wiQTJcIiwgXCJDM1wiXSxcclxuICAgIFwiYWRkcmVzc1wiOiBcIjkwOSBMaW1lIFN0LCBTb21ldG93biwgVVNBXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogMTMsXHJcbiAgICBcInRlYWNoZXJJZFwiOiBcIjM0NTY3ODkwMTNcIixcclxuICAgIFwibmFtZVwiOiBcIkFuZ2VsYSBZb3VuZ1wiLFxyXG4gICAgXCJlbWFpbFwiOiBcImFuZ2VsYUB5b3VuZy5jb21cIixcclxuICAgIFwicGhvdG9cIjogXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xMjM0NTY3L3BleGVscy1waG90by0xMjM0NTY3LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyMDBcIixcclxuICAgIFwicGhvbmVcIjogXCIzNDU2Nzg5MDEzXCIsXHJcbiAgICBcInN1YmplY3RzXCI6IFtcIkVuZ2xpc2hcIiwgXCJBcnRcIl0sXHJcbiAgICBcImJhdGNoZXNcIjogW1wiQjFcIiwgXCJDMVwiXSxcclxuICAgIFwiYWRkcmVzc1wiOiBcIjEwMDAgV2FsbnV0IFN0LCBOZXd0b3duLCBVU0FcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiAxNCxcclxuICAgIFwidGVhY2hlcklkXCI6IFwiNDU2Nzg5MDEyNFwiLFxyXG4gICAgXCJuYW1lXCI6IFwiQW50aG9ueSBLaW5nXCIsXHJcbiAgICBcImVtYWlsXCI6IFwiYW50aG9ueUBraW5nLmNvbVwiLFxyXG4gICAgXCJwaG90b1wiOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzIzNDU2NzgvcGV4ZWxzLXBob3RvLTIzNDU2NzguanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTIwMFwiLFxyXG4gICAgXCJwaG9uZVwiOiBcIjQ1Njc4OTAxMjRcIixcclxuICAgIFwic3ViamVjdHNcIjogW1wiUGh5c2ljc1wiLCBcIkdlb2dyYXBoeVwiXSxcclxuICAgIFwiYmF0Y2hlc1wiOiBbXCJBM1wiLCBcIkIzXCJdLFxyXG4gICAgXCJhZGRyZXNzXCI6IFwiMTAwMSBDaGVzdG51dCBTdCwgT2xkdG93biwgVVNBXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogMTUsXHJcbiAgICBcInRlYWNoZXJJZFwiOiBcIjU2Nzg5MDEyMzVcIixcclxuICAgIFwibmFtZVwiOiBcIlNvcGhpYSBXcmlnaHRcIixcclxuICAgIFwiZW1haWxcIjogXCJzb3BoaWFAd3JpZ2h0LmNvbVwiLFxyXG4gICAgXCJwaG90b1wiOiBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM0NTY3ODkvcGV4ZWxzLXBob3RvLTM0NTY3ODkuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTIwMFwiLFxyXG4gICAgXCJwaG9uZVwiOiBcIjU2Nzg5MDEyMzVcIixcclxuICAgIFwic3ViamVjdHNcIjogW1wiTWF0aGVtYXRpY3NcIiwgXCJCaW9sb2d5XCJdLFxyXG4gICAgXCJiYXRjaGVzXCI6IFtcIkMyXCIsIFwiQzNcIl0sXHJcbiAgICBcImFkZHJlc3NcIjogXCIxMDAyIEhpY2tvcnkgU3QsIFlvdXJ0b3duLCBVU0FcIlxyXG4gIH0sXHJcbl1cclxuIl0sIm5hbWVzIjpbIlN1YmplY3RzIiwiQmF0Y2hlcyIsIlRlYWNoZXJzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/Teacher.ts\n"));

/***/ })

});