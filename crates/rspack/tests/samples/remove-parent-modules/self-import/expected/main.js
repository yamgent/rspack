(self['webpackChunkwebpack'] = self['webpackChunkwebpack'] || []).push([["main"], {
"./index.js": function (module, exports, __webpack_require__) {
Promise.all([
    __webpack_require__.e("main"),
    __webpack_require__.e("runtime")
]).then(__webpack_require__.bind(__webpack_require__, "./index.js")).then(__webpack_require__.ir);
console.log('index');
},

},function(__webpack_require__) {
__webpack_require__("./index.js");
}
]);