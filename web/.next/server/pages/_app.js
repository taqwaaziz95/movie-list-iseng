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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/AuthContext.js":
/*!************************************!*\
  !*** ./src/context/AuthContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./src/lib/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst AuthCtx = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.api)(\"/auth/me\").then((d)=>{\n            setUser(d.user);\n            setLoading(false);\n        }, ()=>setLoading(false));\n    }, []);\n    const login = async (email, password)=>{\n        const d = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.api)(\"/auth/login\", {\n            method: \"POST\",\n            body: {\n                email,\n                password\n            }\n        });\n        setUser(d.user);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/movies\");\n    };\n    const register = async (email, password, name)=>{\n        const d = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.api)(\"/auth/register\", {\n            method: \"POST\",\n            body: {\n                email,\n                password,\n                name\n            }\n        });\n        setUser(d.user);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/movies\");\n    };\n    const logout = async ()=>{\n        await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.api)(\"/auth/logout\", {\n            method: \"POST\"\n        });\n        setUser(null);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthCtx.Provider, {\n        value: {\n            user,\n            loading,\n            login,\n            register,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"W:\\\\CODES LEARNING\\\\movie-list-demo-20250902-113118\\\\web\\\\src\\\\context\\\\AuthContext.js\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this);\n}\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthCtx);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQ3RDO0FBQ0E7QUFFakMsTUFBTU0sd0JBQVVOLG9EQUFhQSxDQUFDO0FBRXZCLFNBQVNPLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFHQSxDQUFDLFlBQVlTLElBQUksQ0FDbEIsQ0FBQ0M7WUFBUUosUUFBUUksRUFBRUwsSUFBSTtZQUFHRyxXQUFXO1FBQVEsR0FDN0MsSUFBTUEsV0FBVztJQUVyQixHQUFHLEVBQUU7SUFFTCxNQUFNRyxRQUFRLE9BQU9DLE9BQU9DO1FBQzFCLE1BQU1ILElBQUksTUFBTVYsNkNBQUdBLENBQUMsZUFBZTtZQUFFYyxRQUFRO1lBQVFDLE1BQU07Z0JBQUVIO2dCQUFPQztZQUFTO1FBQUU7UUFDL0VQLFFBQVFJLEVBQUVMLElBQUk7UUFDZEosdURBQVcsQ0FBQztJQUNkO0lBQ0EsTUFBTWdCLFdBQVcsT0FBT0wsT0FBT0MsVUFBVUs7UUFDdkMsTUFBTVIsSUFBSSxNQUFNViw2Q0FBR0EsQ0FBQyxrQkFBa0I7WUFBRWMsUUFBUTtZQUFRQyxNQUFNO2dCQUFFSDtnQkFBT0M7Z0JBQVVLO1lBQUs7UUFBRTtRQUN4RlosUUFBUUksRUFBRUwsSUFBSTtRQUNkSix1REFBVyxDQUFDO0lBQ2Q7SUFDQSxNQUFNa0IsU0FBUztRQUNiLE1BQU1uQiw2Q0FBR0EsQ0FBQyxnQkFBZ0I7WUFBRWMsUUFBUTtRQUFPO1FBQzNDUixRQUFRO1FBQ1JMLHVEQUFXLENBQUM7SUFDZDtJQUVBLHFCQUFPLDhEQUFDQyxRQUFRa0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVoQjtZQUFNRTtZQUFTSTtZQUFPTTtZQUFVRTtRQUFPO2tCQUFJZjs7Ozs7O0FBQy9FO0FBRU8sTUFBTWtCLFVBQVUsSUFBTXpCLGlEQUFVQSxDQUFDSyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWUtbGlzdC13ZWIvLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC5qcz80YmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9saWIvYXBpJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBBdXRoQ3R4ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXBpKCcvYXV0aC9tZScpLnRoZW4oXG4gICAgICAoZCkgPT4geyBzZXRVc2VyKGQudXNlcik7IHNldExvYWRpbmcoZmFsc2UpOyB9LFxuICAgICAgKCkgPT4gc2V0TG9hZGluZyhmYWxzZSlcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgY29uc3QgZCA9IGF3YWl0IGFwaSgnL2F1dGgvbG9naW4nLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiB7IGVtYWlsLCBwYXNzd29yZCB9IH0pO1xuICAgIHNldFVzZXIoZC51c2VyKTtcbiAgICBSb3V0ZXIucHVzaCgnL21vdmllcycpO1xuICB9O1xuICBjb25zdCByZWdpc3RlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQsIG5hbWUpID0+IHtcbiAgICBjb25zdCBkID0gYXdhaXQgYXBpKCcvYXV0aC9yZWdpc3RlcicsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IHsgZW1haWwsIHBhc3N3b3JkLCBuYW1lIH0gfSk7XG4gICAgc2V0VXNlcihkLnVzZXIpO1xuICAgIFJvdXRlci5wdXNoKCcvbW92aWVzJyk7XG4gIH07XG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBhcGkoJy9hdXRoL2xvZ291dCcsIHsgbWV0aG9kOiAnUE9TVCcgfSk7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gIH07XG5cbiAgcmV0dXJuIDxBdXRoQ3R4LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvYWRpbmcsIGxvZ2luLCByZWdpc3RlciwgbG9nb3V0IH19PntjaGlsZHJlbn08L0F1dGhDdHguUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aEN0eCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsIlJvdXRlciIsIkF1dGhDdHgiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0aGVuIiwiZCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsIm1ldGhvZCIsImJvZHkiLCJwdXNoIiwicmVnaXN0ZXIiLCJuYW1lIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/AuthContext.js\n");

/***/ }),

/***/ "./src/lib/api.js":
/*!************************!*\
  !*** ./src/lib/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\nconst API_BASE = \"http://localhost:4000/api\" || 0;\nasync function api(path, { method = \"GET\", body, headers = {}, auth = true } = {}) {\n    const opts = {\n        method,\n        headers: {\n            \"Content-Type\": \"application/json\",\n            ...headers\n        },\n        credentials: \"include\"\n    };\n    if (body) opts.body = JSON.stringify(body);\n    const res = await fetch(`${API_BASE}${path}`, opts);\n    if (!res.ok) {\n        let msg = \"Request failed\";\n        try {\n            const j = await res.json();\n            msg = j.message || msg;\n        } catch  {}\n        throw new Error(msg);\n    }\n    return res.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2FwaS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBV0MsMkJBQWdDLElBQUk7QUFFOUMsZUFBZUcsSUFBSUMsSUFBSSxFQUFFLEVBQUVDLFNBQU8sS0FBSyxFQUFFQyxJQUFJLEVBQUVDLFVBQVEsQ0FBQyxDQUFDLEVBQUVDLE9BQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hGLE1BQU1DLE9BQU87UUFDWEo7UUFDQUUsU0FBUztZQUFFLGdCQUFnQjtZQUFvQixHQUFHQSxPQUFPO1FBQUM7UUFDMURHLGFBQWE7SUFDZjtJQUNBLElBQUlKLE1BQU1HLEtBQUtILElBQUksR0FBR0ssS0FBS0MsU0FBUyxDQUFDTjtJQUNyQyxNQUFNTyxNQUFNLE1BQU1DLE1BQU0sQ0FBQyxFQUFFZixTQUFTLEVBQUVLLEtBQUssQ0FBQyxFQUFFSztJQUM5QyxJQUFJLENBQUNJLElBQUlFLEVBQUUsRUFBRTtRQUNYLElBQUlDLE1BQU07UUFDVixJQUFJO1lBQUUsTUFBTUMsSUFBSSxNQUFNSixJQUFJSyxJQUFJO1lBQUlGLE1BQU1DLEVBQUVFLE9BQU8sSUFBSUg7UUFBSyxFQUFFLE9BQU0sQ0FBQztRQUNuRSxNQUFNLElBQUlJLE1BQU1KO0lBQ2xCO0lBQ0EsT0FBT0gsSUFBSUssSUFBSTtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWxpc3Qtd2ViLy4vc3JjL2xpYi9hcGkuanM/ZmNmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfQkFTRSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFIHx8ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaShwYXRoLCB7IG1ldGhvZD0nR0VUJywgYm9keSwgaGVhZGVycz17fSwgYXV0aD10cnVlIH0gPSB7fSkge1xuICBjb25zdCBvcHRzID0ge1xuICAgIG1ldGhvZCxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC4uLmhlYWRlcnMgfSxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICB9O1xuICBpZiAoYm9keSkgb3B0cy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfSR7cGF0aH1gLCBvcHRzKTtcbiAgaWYgKCFyZXMub2spIHtcbiAgICBsZXQgbXNnID0gJ1JlcXVlc3QgZmFpbGVkJztcbiAgICB0cnkgeyBjb25zdCBqID0gYXdhaXQgcmVzLmpzb24oKTsgbXNnID0gai5tZXNzYWdlIHx8IG1zZzsgfSBjYXRjaCB7fVxuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICB9XG4gIHJldHVybiByZXMuanNvbigpO1xufVxuIl0sIm5hbWVzIjpbIkFQSV9CQVNFIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFIiwiYXBpIiwicGF0aCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwiYXV0aCIsIm9wdHMiLCJjcmVkZW50aWFscyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsIm9rIiwibXNnIiwiaiIsImpzb24iLCJtZXNzYWdlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/api.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"W:\\\\CODES LEARNING\\\\movie-list-demo-20250902-113118\\\\web\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"W:\\\\CODES LEARNING\\\\movie-list-demo-20250902-113118\\\\web\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBQ3VCO0FBRXRDLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllLWxpc3Qtd2ViLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();