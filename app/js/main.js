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
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card */ "./src/js/components/card.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_card__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/components/card.js":
/*!***********************************!*\
  !*** ./src/js/components/card.js ***!
  \***********************************/
/***/ (() => {

class cardMenu {
  constructor(img, alt, title, text, price, parentSelector) {
    this.img = img;
    this.alt = alt;
    this.title = title;
    this.text = text;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 30;
    this.changeToUAH();
  }

  changeToUAH() {
    this.price = this.price * this.transfer;
  }

  cardRender() {
    const el = document.createElement('article');
    el.innerHTML = "\n      <article class=\"card\">\n        <div class=\"card-content\">\n          <img src=".concat(this.img, " class=\"card-content__img\" alt=").concat(this.alt, ">\n          <h3 class=\"card-content__subtitle\">").concat(this.title, "</h3>\n          <p class=\"card-content__text\">").concat(this.text, "</p>\n        </div>\n        <div class=\"card-price\">\n          <span class=\"card-price__subtitle\">\u0426\u0456\u043D\u0430:</span>\n          <p class=\"card-price__total\">\n            <span class=\"card-price__total--num\">").concat(this.price, "</span>\n            \u0433\u0440\u043D/\u0434\u0435\u043D\u044C\n          </p>\n        </div>\n      </article>\n    ");
    this.parent.append(el);
  }

}

new cardMenu("img/tabs/vegy.jpg", "vegy", 'Меню "Фітнес"', "\u041C\u0435\u043D\u044E \"\u0424\u0456\u0442\u043D\u0435\u0441\" - \u0446\u0435 \u043D\u043E\u0432\u0438\u0439 \u043F\u0456\u0434\u0445\u0456\u0434 \u0434\u043E \u043F\u0440\u0438\u0433\u043E\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0440\u0430\u0432: \u0431\u0456\u043B\u044C\u0448\u0435 \u0441\u0432\u0456\u0436\u0438\u0445 \u043E\u0432\u043E\u0447\u0456\u0432 \u0442\u0430 \u0444\u0440\u0443\u043A\u0442\u0456\u0432.\n  \u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0445 \u0442\u0430 \u0437\u0434\u043E\u0440\u043E\u0432\u0438\u0445 \u043B\u044E\u0434\u0435\u0439. \u0426\u0435 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u043D\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0437 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u044E \u0446\u0456\u043D\u043E\u044E \u0442\u0430 \u0432\u0438\u0441\u043E\u043A\u043E\u044E \u044F\u043A\u0456\u0441\u0442\u044E!", 7, '.cards__container').cardRender();
new cardMenu("img/tabs/elite.jpg", "elite", 'Меню “Преміум”', "\u0423 \u043C\u0435\u043D\u044E \"\u041F\u0440\u0435\u043C\u0456\u0443\u043C\" \u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u043D\u0435 \u0442\u0456\u043B\u044C\u043A\u0438 \u0433\u0430\u0440\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438, \u0430\u043B\u0435 \u0442\u0430 \u044F\u043A\u0456\u0441\u043D\u0435 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0441\u0442\u0440\u0430\u0432.\n  \u0427\u0435\u0440\u0432\u043E\u043D\u0430 \u0440\u0438\u0431\u0430, \u043C\u043E\u0440\u0435\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u0444\u0440\u0443\u043A\u0442\u0438 \u2013 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043D\u0435 \u043C\u0435\u043D\u044E \u0431\u0435\u0437 \u043F\u043E\u0445\u043E\u0434\u0443 \u0432 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D!", 11, '.cards__container').cardRender();
new cardMenu("img/tabs/vegy.jpg", "vegy", 'Меню "Пісне"', "\u041C\u0435\u043D\u044E \"\u041F\u0456\u0441\u043D\u0435\" - \u0446\u0435 \u0440\u0435\u0442\u0435\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0431\u0456\u0440 \u0456\u043D\u0433\u0440\u0435\u0434\u0456\u0454\u043D\u0442\u0456\u0432: \u043F\u043E\u0432\u043D\u0430 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C\n  \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0442\u0432\u0430\u0440\u0438\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u043C\u043E\u043B\u043E\u043A\u043E \u0437 \u043C\u0438\u0433\u0434\u0430\u043B\u044E, \u0432\u0456\u0432\u0441\u0430, \u043A\u043E\u043A\u043E\u0441\u0443 \u0447\u0438 \u0433\u0440\u0435\u0447\u043A\u0438, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435\n  \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0431\u0456\u043B\u043A\u0456\u0432 \u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0442\u043E\u0444\u0443 \u0442\u0430 \u0456\u043C\u043F\u043E\u0440\u0442\u043D\u0438\u0445 \u0432\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043D\u0441\u044C\u043A\u0438\u0445 \u0441\u0442\u0435\u0439\u043A\u0456\u0432.", 5, '.cards__container').cardRender(); // todo: rewrite in a loop

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