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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 190);
/******/ })
/************************************************************************/
/******/ ({

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var store = createStore(reducer);
var oldState = store.getState;
store.observe(function () {
    var newState = store.getState();
    renderApp(newState, oldState);
    oldState = newState;
});
renderApp(store.getState());
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'new text' });
store.dispatch({ type: "UPDATE_TITLE_COLOR", color: 'black' });
function createStore(reducer) {
    var state = null;
    var listeners = [];
    var observe = function observe(listener) {
        return listeners.push(listener);
    };
    var getState = function getState() {
        return state;
    };
    var dispatch = function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(function (listener) {
            return listener();
        });
    };
    dispatch({}); //初始化
    return { getState: getState, dispatch: dispatch, observe: observe };
}

function reducer(state, action) {

    if (!state) {
        return {
            title: {
                text: 'react redux make',
                color: 'red'
            },
            content: {
                text: '这是一个content',
                color: 'blue'
            }
        };
    }

    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return _extends({}, state, {
                title: _extends({}, state.title, {
                    text: action.text
                })
            });
            break;
        case 'UPDATE_TITLE_COLOR':
            return _extends({}, state, {
                title: _extends({}, state.title, {
                    color: action.color
                })
            });
            break;
        default:
            return state;
            break;
    }
}

function renderApp(newAppState) {
    var oldAppState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (newAppState === oldAppState) return;
    console.log('render App');
    renderTitle(newAppState.title, oldAppState.title);
    renderContent(newAppState.content, oldAppState.content);
}
function renderTitle(newTitle) {
    var oldTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (newTitle === oldTitle) return;
    console.log('render Title');
    var titleDom = document.getElementById('title');
    titleDom.innerHTML = newTitle.text;
    titleDom.style.color = newTitle.color;
}
function renderContent(newContent) {
    var oldContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (newContent === oldContent) return;
    console.log('render Content');
    var contentDom = document.getElementById('content');
    contentDom.innerHTML = newContent.text;
    contentDom.style.color = newContent.color;
}

/***/ })

/******/ });
//# sourceMappingURL=make_redux.js.map