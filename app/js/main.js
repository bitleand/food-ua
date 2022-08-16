/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tab */ "./src/js/components/tab.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_tab__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timer */ "./src/js/components/timer.js");
/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_timer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ (() => {

const modalAttributeOpen = document.querySelectorAll('[data-modal]'),
      modalAttributeClose = document.querySelector('[data-close]'),
      modalWindow = document.querySelector('.modal');

const modalClose = () => {
  modalWindow.classList.add('hide');
  modalWindow.classList.remove('show');
  document.body.classList.remove('hidden');
};

const modalOpen = () => {
  modalWindow.classList.add('show', 'fade');
  modalWindow.classList.remove('hide');
  document.body.classList.add('hidden');
  clearInterval(modalShowTimer);
};

const modalShowTimer = () => setTimeout(modalOpen, 5000);

const modalShow = open => {
  open.forEach(btn => btn.addEventListener('click', modalOpen));
};

const modalHidden = close => {
  close.addEventListener('click', modalClose);
};

const modalHiddenBg = modal => {
  modal.addEventListener('click', e => e.target === modal ? modalClose() : false);
};

const modalHiddenEscape = modal => {
  document.addEventListener('keydown', e => {
    e.code === 'Escape' && modal.classList.contains('show') ? modalClose() : false;
  });
};

modalOpen();
modalClose();
modalShowTimer();
modalShow(modalAttributeOpen, modalWindow);
modalHidden(modalAttributeClose);
modalHiddenBg(modalWindow);
modalHiddenEscape(modalWindow);

/***/ }),

/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/***/ (() => {

const tabsParent = document.querySelector('.tab-menu__list');
const tabsItem = document.querySelectorAll('.tab-menu__item');
const tabsContent = document.querySelectorAll('.tab-content');

const hideTabContent = () => {
  tabsContent.forEach(el => el.classList.add('hide') & el.classList.remove('show', 'fade'));
  tabsItem.forEach(el => el.classList.remove('tab-menu__item--active'));
};

const showTabContent = function () {
  let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabsItem[i].classList.add('tab-menu__item--active');
};

const clickTabItem = () => {
  tabsParent.addEventListener('click', e => {
    if (e.target && e.target.classList.contains('tab-menu__item')) {
      tabsItem.forEach((el, i) => {
        e.target === el ? hideTabContent() & showTabContent(i) : false;
      });
    }
  });
};

hideTabContent();
showTabContent();
clickTabItem();

/***/ }),

/***/ "./src/js/components/timer.js":
/*!************************************!*\
  !*** ./src/js/components/timer.js ***!
  \************************************/
/***/ (() => {

const deadline = '2022-10-20';

const getTimeDeadline = end => {
  const time = Date.parse(end) - Date.parse(new Date());
  let days, hours, minutes, seconds;

  if (time <= 0) {
    days = 0, hours = 0, minutes = 0, seconds = 0;
  } else {
    days = Math.floor(time / (1000 * 60 * 60 * 24)), hours = Math.floor(time / (1000 * 60 * 60) % 24), minutes = Math.floor(time / (1000 / 60) % 60), seconds = Math.floor(time / 1000 % 60);
  }

  return {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

const getZero = num => num >= 0 && num < 10 ? "0".concat(num) : num;

const setClock = end => {
  const days = document.querySelector('#timerDays'),
        hours = document.querySelector('#timerHours'),
        minutes = document.querySelector('#timerMinutes'),
        seconds = document.querySelector('#timerSeconds');

  const updateClock = () => {
    const time = getTimeDeadline(end);
    days.innerHTML = getZero(time.days);
    hours.innerHTML = getZero(time.hours);
    minutes.innerHTML = getZero(time.minutes);
    seconds.innerHTML = getZero(time.seconds);
    time <= 0 ? clearInterval(interval) : false;
  };

  updateClock();
  const interval = setInterval(updateClock, 1000);
};

getTimeDeadline(deadline);
setClock(deadline);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map