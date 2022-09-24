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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "(api)/./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _orders_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.json */ \"(api)/./pages/api/orders.json\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n// This API endpoint will let users POST data to add records and GET to retrieve\n\n\nfunction get(req, res) {\n    const { buyer  } = req.query;\n    // Check if this address has any orders\n    const buyerOrders = _orders_json__WEBPACK_IMPORTED_MODULE_0__.filter((order)=>order.buyer === buyer\n    );\n    if (buyerOrders.length === 0) {\n        // 204 = successfully processed the request, not returning any content\n        res.status(204).send();\n    } else {\n        res.status(200).json(buyerOrders);\n    }\n}\nasync function post(req, res) {\n    console.log(\"Received add order request\", req.body);\n    // Add new order to orders.json\n    try {\n        const newOrder = req.body;\n        // If this address has not purchased this item, add order to orders.json\n        if (!_orders_json__WEBPACK_IMPORTED_MODULE_0__.find((order)=>order.buyer === newOrder.buyer.toString() && order.itemID === newOrder.itemID\n        )) {\n            _orders_json__WEBPACK_IMPORTED_MODULE_0__.push(newOrder);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(\"./pages/api/orders.json\", JSON.stringify(_orders_json__WEBPACK_IMPORTED_MODULE_0__, null, 2));\n            res.status(200).json(_orders_json__WEBPACK_IMPORTED_MODULE_0__);\n        } else {\n            res.status(400).send(\"Order already exists\");\n        }\n    } catch (err) {\n        res.status(400).send(err);\n    }\n}\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            get(req, res);\n            break;\n        case \"POST\":\n            await post(req, res);\n            break;\n        default:\n            res.status(405).send(`Method ${req.method} not allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxnRkFBZ0Y7QUFDN0M7QUFDSztBQUV4QyxTQUFTRSxHQUFHLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3JCLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUUzQix1Q0FBdUM7SUFDdkMsTUFBTUMsV0FBVyxHQUFHUCxnREFBYSxDQUFDLENBQUNTLEtBQUssR0FBS0EsS0FBSyxDQUFDSixLQUFLLEtBQUtBLEtBQUs7SUFBQSxDQUFDO0lBQ25FLElBQUlFLFdBQVcsQ0FBQ0csTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM1QixzRUFBc0U7UUFDdEVOLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztLQUN4QixNQUFNO1FBQ0xSLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUNOLFdBQVcsQ0FBQyxDQUFDO0tBQ25DO0NBQ0Y7QUFFRCxlQUFlTyxJQUFJLENBQUNYLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRWIsR0FBRyxDQUFDYyxJQUFJLENBQUMsQ0FBQztJQUNwRCwrQkFBK0I7SUFDL0IsSUFBSTtRQUNGLE1BQU1DLFFBQVEsR0FBR2YsR0FBRyxDQUFDYyxJQUFJO1FBRXpCLHdFQUF3RTtRQUN4RSxJQUNFLENBQUNqQiw4Q0FBVyxDQUNWLENBQUNTLEtBQUssR0FDSkEsS0FBSyxDQUFDSixLQUFLLEtBQUthLFFBQVEsQ0FBQ2IsS0FBSyxDQUFDZSxRQUFRLEVBQUUsSUFDekNYLEtBQUssQ0FBQ1ksTUFBTSxLQUFLSCxRQUFRLENBQUNHLE1BQU07UUFBQSxDQUNuQyxFQUNEO1lBQ0FyQiw4Q0FBVyxDQUFDa0IsUUFBUSxDQUFDLENBQUM7WUFDdEIsTUFBTWpCLHNEQUFTLENBQ2IseUJBQXlCLEVBQ3pCc0IsSUFBSSxDQUFDQyxTQUFTLENBQUN4Qix5Q0FBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDaEMsQ0FBQztZQUNGSSxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0UsSUFBSSxDQUFDYix5Q0FBTSxDQUFDLENBQUM7U0FDOUIsTUFBTTtZQUNMSSxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDOUM7S0FDRixDQUFDLE9BQU9hLEdBQUcsRUFBRTtRQUNackIsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ2EsR0FBRyxDQUFDLENBQUM7S0FDM0I7Q0FDRjtBQUVjLGVBQWVDLE9BQU8sQ0FBQ3ZCLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE9BQVFELEdBQUcsQ0FBQ3dCLE1BQU07UUFDaEIsS0FBSyxLQUFLO1lBQ1J6QixHQUFHLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7WUFDZCxNQUFNO1FBQ1IsS0FBSyxNQUFNO1lBQ1QsTUFBTVUsSUFBSSxDQUFDWCxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLE1BQU07UUFDUjtZQUNFQSxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFVCxHQUFHLENBQUN3QixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUM1RDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHNvbGFuYS93YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL3BhZ2VzL2FwaS9vcmRlcnMuanM/MWE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIEFQSSBlbmRwb2ludCB3aWxsIGxldCB1c2VycyBQT1NUIGRhdGEgdG8gYWRkIHJlY29yZHMgYW5kIEdFVCB0byByZXRyaWV2ZVxuaW1wb3J0IG9yZGVycyBmcm9tIFwiLi9vcmRlcnMuanNvblwiO1xuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XG5cbmZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuICBjb25zdCB7IGJ1eWVyIH0gPSByZXEucXVlcnk7XG5cbiAgLy8gQ2hlY2sgaWYgdGhpcyBhZGRyZXNzIGhhcyBhbnkgb3JkZXJzXG4gIGNvbnN0IGJ1eWVyT3JkZXJzID0gb3JkZXJzLmZpbHRlcigob3JkZXIpID0+IG9yZGVyLmJ1eWVyID09PSBidXllcik7XG4gIGlmIChidXllck9yZGVycy5sZW5ndGggPT09IDApIHtcbiAgICAvLyAyMDQgPSBzdWNjZXNzZnVsbHkgcHJvY2Vzc2VkIHRoZSByZXF1ZXN0LCBub3QgcmV0dXJuaW5nIGFueSBjb250ZW50XG4gICAgcmVzLnN0YXR1cygyMDQpLnNlbmQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihidXllck9yZGVycyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdChyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGFkZCBvcmRlciByZXF1ZXN0XCIsIHJlcS5ib2R5KTtcbiAgLy8gQWRkIG5ldyBvcmRlciB0byBvcmRlcnMuanNvblxuICB0cnkge1xuICAgIGNvbnN0IG5ld09yZGVyID0gcmVxLmJvZHk7XG5cbiAgICAvLyBJZiB0aGlzIGFkZHJlc3MgaGFzIG5vdCBwdXJjaGFzZWQgdGhpcyBpdGVtLCBhZGQgb3JkZXIgdG8gb3JkZXJzLmpzb25cbiAgICBpZiAoXG4gICAgICAhb3JkZXJzLmZpbmQoXG4gICAgICAgIChvcmRlcikgPT5cbiAgICAgICAgICBvcmRlci5idXllciA9PT0gbmV3T3JkZXIuYnV5ZXIudG9TdHJpbmcoKSAmJlxuICAgICAgICAgIG9yZGVyLml0ZW1JRCA9PT0gbmV3T3JkZXIuaXRlbUlEXG4gICAgICApXG4gICAgKSB7XG4gICAgICBvcmRlcnMucHVzaChuZXdPcmRlcik7XG4gICAgICBhd2FpdCB3cml0ZUZpbGUoXG4gICAgICAgIFwiLi9wYWdlcy9hcGkvb3JkZXJzLmpzb25cIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkob3JkZXJzLCBudWxsLCAyKVxuICAgICAgKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG9yZGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiT3JkZXIgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgZ2V0KHJlcSwgcmVzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICBhd2FpdCBwb3N0KHJlcSwgcmVzKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwNSkuc2VuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm9yZGVycyIsIndyaXRlRmlsZSIsImdldCIsInJlcSIsInJlcyIsImJ1eWVyIiwicXVlcnkiLCJidXllck9yZGVycyIsImZpbHRlciIsIm9yZGVyIiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImpzb24iLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJuZXdPcmRlciIsImZpbmQiLCJ0b1N0cmluZyIsIml0ZW1JRCIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiaGFuZGxlciIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders.json":
/*!*******************************!*\
  !*** ./pages/api/orders.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = [];

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders.js"));
module.exports = __webpack_exports__;

})();