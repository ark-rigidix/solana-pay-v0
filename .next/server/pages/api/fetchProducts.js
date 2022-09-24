"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/fetchProducts";
exports.ids = ["pages/api/fetchProducts"];
exports.modules = {

/***/ "(api)/./pages/api/fetchProducts.js":
/*!************************************!*\
  !*** ./pages/api/fetchProducts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.json */ \"(api)/./pages/api/products.json\");\n\nfunction handler(req, res) {\n    // If get request\n    if (req.method === \"GET\") {\n        // Create a copy of products without the hashes and filenames\n        const productsNoHashes = _products_json__WEBPACK_IMPORTED_MODULE_0__.map((product)=>{\n            const { hash , filename , ...rest } = product;\n            return rest;\n        });\n        res.status(200).json(productsNoHashes);\n    } else {\n        res.status(405).send(`Method ${req.method} not allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUV4QixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLGlCQUFpQjtJQUNqQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsNkRBQTZEO1FBQzdELE1BQU1DLGdCQUFnQixHQUFHTCwrQ0FBWSxDQUFDLENBQUNPLE9BQU8sR0FBSztZQUNqRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFLEdBQUdDLElBQUksRUFBRSxHQUFHSCxPQUFPO1lBQzNDLE9BQU9HLElBQUksQ0FBQztTQUNiLENBQUM7UUFFRlAsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1AsZ0JBQWdCLENBQUMsQ0FBQztLQUN4QyxNQUFNO1FBQ0xGLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUVYLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDMUQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvZmV0Y2hQcm9kdWN0cy5qcz9jNTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi9wcm9kdWN0cy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gSWYgZ2V0IHJlcXVlc3RcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAvLyBDcmVhdGUgYSBjb3B5IG9mIHByb2R1Y3RzIHdpdGhvdXQgdGhlIGhhc2hlcyBhbmQgZmlsZW5hbWVzXG4gICAgY29uc3QgcHJvZHVjdHNOb0hhc2hlcyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBoYXNoLCBmaWxlbmFtZSwgLi4ucmVzdCB9ID0gcHJvZHVjdDtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHNOb0hhc2hlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLnNlbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcm9kdWN0c05vSGFzaGVzIiwibWFwIiwicHJvZHVjdCIsImhhc2giLCJmaWxlbmFtZSIsInJlc3QiLCJzdGF0dXMiLCJqc29uIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchProducts.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.json":
/*!*********************************!*\
  !*** ./pages/api/products.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"OG Emoji pack","price":"0.09","description":"Get this fire emoji pack for only $0.09! Includes 3 hot emojis: Forreal, Flooshed, and Sheesh!","image_url":"https://i.imgur.com/rVD8bjt.png","filename":"Emojis.zip","hash":"QmWWH69mTL66r3H8P4wUn24t1L5pvdTJGUTKBqT11KCHS5"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchProducts.js"));
module.exports = __webpack_exports__;

})();