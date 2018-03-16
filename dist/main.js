/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n    'use strict';\n\n    var app = {\n        isLoading: true,\n        loader: document.querySelector('.loader'),\n        visibleCards: {},\n        cardTemplate: document.querySelector('.cardTemplate'),\n        container: document.querySelector('.main')\n    };\n\n    document.getElementById('butRefresh').addEventListener('click', function () {\n        app.getPointsOfInterest();\n    });\n\n    app.updatePointOfInterestCard = function (data) {\n        var key = data.system.id;\n\n        var title = data.elements.title.value;\n        var content = data.elements.description.value;\n\n        var card = app.visibleCards[key];\n        if (!card) {\n            card = app.cardTemplate.cloneNode(true);\n            card.classList.remove('cardTemplate');\n            card.removeAttribute('hidden');\n            app.container.appendChild(card);\n            app.visibleCards[key] = card;\n        }\n\n        card.querySelector('.title').textContent = title;\n        card.querySelector('.content').innerHTML = content;\n\n        if (app.isLoading) {\n            app.loader.setAttribute('hidden', true);\n            app.isLoading = false;\n        }\n    };\n\n    app.getPointsOfInterest = function () {\n        var url = 'https://deliver.kenticocloud.com/66ab95de-6599-0018-f141-3c9dc08fe797/items?system.type=point_of_interest';\n\n        var request = new XMLHttpRequest();\n        request.onreadystatechange = function () {\n            if (request.readyState === XMLHttpRequest.DONE) {\n                if (request.status === 200) {\n                    var response = JSON.parse(request.response);\n                    response.items.forEach(function (pointOfInterest) {\n                        app.updatePointOfInterestCard(pointOfInterest);\n                    });\n                }\n            } else {\n                // TODO: handle other states\n            }\n        };\n        request.open('GET', url);\n        request.send();\n    };\n\n    app.getPointsOfInterest();\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });