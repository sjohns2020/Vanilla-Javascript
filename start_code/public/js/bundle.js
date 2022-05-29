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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n    // console.log(\"DOM's loaded mate\")\n\n\n    // 1 GET new ToDo Form\n    const todoForm = document.querySelector(\"#new-todo-form\")\n    // 2 ADD event listener function to the submit button\n    todoForm.addEventListener(\"submit\", handleFormSubmit)\n\n    const barDeleteAllButton = document.querySelector('#bar-delete-all');\n    barDeleteAllButton.addEventListener('click', barHandleDeleteAllClick);\n    const ssvDeleteAllButton = document.querySelector('#ssv-delete-all');\n    ssvDeleteAllButton.addEventListener('click', ssvHandleDeleteAllClick);\n    const asmDeleteAllButton = document.querySelector('#asm-delete-all');\n    asmDeleteAllButton.addEventListener('click', asmHandleDeleteAllClick);\n    const smDeleteAllButton = document.querySelector('#sm-delete-all');\n    smDeleteAllButton.addEventListener('click', smHandleDeleteAllClick);\n\n\n});\n    // 3 Handler\n    const handleFormSubmit = (event, form) => {\n        event.preventDefault()\n        const barToDoList = function () {\n            if (form.priority.value === \"barista-task\") {\n                console.log(form.priority.value);\n                const barTaskList = document.querySelector(\"#bar-todo-list-ul\")\n                barTaskList.appendChild(barToDoList)\n                newListItem(event.target);\n            }\n        \n            event.target.reset();\n        }}\n        // const ssvToDoList = newListItem(event.target);\n        // const asmToDoList = newListItem(event.target);\n        // const smToDoList = newListItem(event.target);\n\n        // if (form.priority.value === \"barista-task\") {\n        //     const barTaskList = document.querySelector(\"#bar-todo-list-ul\")\n        //     barTaskList.appendChild(barToDoList)\n        //      }\n        // if (form.priority.value === \"ssv-task\") {\n        //     const ssvTaskList = document.querySelector(\"#ssv-todo-list-ul\")\n        //     ssvTaskList.appendChild(ssvToDoList)\n        // }\n        // const toDoUL = document.querySelector(\"#todo-list-ul\")\n        // toDoUL.appendChild(toDoList)\n\n\n    \n    \n    const newListItem = function (form) {\n        const newToDoListItem = document.createElement(\"li\")\n        newToDoListItem.classList.add(\"list\")\n\n        const title = document.createElement('p');\n        title.textContent = form.title.value;\n        console.log(title);\n        newToDoListItem.appendChild(title);\n\n        const description = document.createElement('p');\n        description.textContent = form.description.value;\n        // console.log(description);\n        newToDoListItem.appendChild(description);\n\n        // const priority = document.createElement('h3');\n        // priority.textContent = form.priority.value;\n        // // console.log(description);\n        // newToDoListItem.appendChild(priority);\n\n\n        console.log(newToDoListItem);\n        return newToDoListItem\n    }\n\n    const barHandleDeleteAllClick = function (event) {\n        const barDelete = document.querySelector('#bar-todo-list-ul');\n        readingList.innerHTML = '';\n        }\n    const ssvHandleDeleteAllClick = function (event) {\n        const ssvDelete = document.querySelector('#ssv-todo-list-ul');\n        readingList.innerHTML = '';\n        }\n    const asmHandleDeleteAllClick = function (event) {\n        const asmDelete = document.querySelector('#asm-todo-list-ul');\n        readingList.innerHTML = '';\n        }\n    const smHandleDeleteAllClick = function (event) {\n        const smDelete = document.querySelector('#sm-todo-list-ul');\n        readingList.innerHTML = '';\n        }\n\n\n    \n\n\n    // generateListItem (title, description)\n\n\n    // const generateListItem = (t, d) => {\n    //     create li element\n    //     create 2 p\n    //     set textContent to be title\n    //     append p tags to li element\n    //     append li element to main html ul\n// } \n\n    // const myName= \"sean\"\n    // const numbers = [1,2,3,4,5] \n\n    // numbers.forEach((number) => {\n    //     console.log(number)\n    // }\n    // )\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });