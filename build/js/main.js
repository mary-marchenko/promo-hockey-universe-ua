"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _Number;
  var apiURL = 'https://fav-prom.com/api_hockey_universe';
  var isVerifiedUser = false;
  var periodAmount = 3; // кількість періодів в акції, треба для кешування інфи з табли
  var tableData = [];
  var activeWeek = null;
  var isPromoOver = false;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector('#table'),
    resultsTableOther = document.querySelector('#tableOther'),
    tableTabs = document.querySelectorAll('.table__tabs-item'),
    secondTable = document.querySelector("#secondTable"),
    secondTableOther = document.querySelector("#secondTableOther"),
    tabs = document.querySelectorAll('.table__tabs-item');
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;

  // let locale = "uk"
  var locale = sessionStorage.getItem("locale") || "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;

  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  userId = 1001;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth().then(function () {
                return loadUsers("?nocache=1");
              }).then(function () {
                if (isPromoOver) {
                  participateBtns.forEach(function (el) {
                    el.classList.add('lock');
                  });
                  redirectBtns.forEach(function (el) {
                    el.classList.add('lock');
                  });
                }
                setTimeout(hideLoader, 300);
                tabs.forEach(function (item) {
                  item.classList.remove('active');
                  var num = Number(item.getAttribute('data-week'));
                  if (num === activeWeek) item.classList.add('active');
                  if (num > activeWeek) item.classList.add('lock');
                });
                // document.querySelectorAll(".table__tabs-item").forEach(tab => {
                //     tab.classList.remove('active');
                //     if (parseInt(tab.dataset.week) === activeWeek) {
                //         tab.classList.add('active');
                //     }
                // });

                renderUsers(activeWeek, tableData);
                // renderHoodieWinner(activeWeek, tableData);
                // participateBtns.forEach(btn => btn.addEventListener('click', participate));
                //
                // tableTabs.forEach(tab =>{
                //     if(Number(tab.getAttribute("data-week")) > activeWeek){
                //         tab.style.pointerEvents = "none";
                //         tab.classList.add('lock');
                //     }else{
                //         tab.style.pointerEvents = "initial";
                //     }
                //
                // })

                // document.addEventListener("click", e =>{
                //     const clickedTab = e.target.closest(".table__tabs-item");
                //     if (!clickedTab) return;
                //
                //     const currentTable = clickedTab.closest(".table");
                //     const parentBlock = clickedTab.closest(".results, .prize"); // визначаємо, де знаходиться таблиця
                //
                //     if (clickedTab.classList.contains("active")) return;
                //     if (Number(clickedTab.dataset.week) > activeWeek) return;
                //
                //     clickedTab.style.pointerEvents = "initial";
                //
                //     currentTable.querySelectorAll(".table__tabs-item").forEach(tab => {
                //         tab.classList.remove("active");
                //     });
                //
                //     clickedTab.classList.add("active");
                //
                //     const tabWeek = clickedTab.dataset.week;
                //
                //
                //     if (parentBlock && parentBlock.classList.contains("results")) {
                //         renderUsers(tabWeek, tableData);
                //     } else if (parentBlock && parentBlock.classList.contains("prize")) {
                //         showWinnerHoodie();
                //     }
                // })

                document.addEventListener('click', function (e) {
                  if (e.target.closest('.part-btn')) participate(e);
                  if (e.target.closest(".table__tabs-item")) {
                    var tab = e.target.closest(".table__tabs-item");
                    var week = Number(tab.getAttribute('data-week'));
                    if (week > activeWeek) return;
                    tabs.forEach(function (item) {
                      item.classList.remove('active');
                      var num = Number(item.getAttribute('data-week'));
                      if (num === week) item.classList.add('active');
                    });
                    renderUsers(week, tableData);
                    tab.classList.add('active');
                  }
                });
                showItemsOnScroll(".gide__block");
                document.querySelector('.gide__detailsBtn').addEventListener('click', function () {
                  console.log("btn");
                  openPopupByAttr('gideInfo');
                });
                document.querySelector('.popup-wrap').addEventListener('click', function (e) {
                  var openPopupEl = document.querySelector('.popup.active');
                  var isInside = openPopupEl ? openPopupEl.contains(e.target) : false;
                  if (openPopupEl && !isInside) {
                    closeAllPopups();
                  }
                });
                document.querySelectorAll('.popup__close').forEach(function (closeBtn) {
                  closeBtn.addEventListener('click', closeAllPopups);
                });
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale, "?nocache=1")).then(function (json) {
      i18nData = json;
      translate();
    });
  }
  function checkUserAuth() {
    if (userId) {
      var _iterator = _createForOfIteratorHelper(unauthMsgs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var unauthMes = _step.value;
          unauthMes.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          participateBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          isVerifiedUser = true;
        } else {
          participateBtns.forEach(function (item) {
            return item.classList.remove('hide');
          });
          redirectBtns.forEach(function (item) {
            return item.classList.add('hide');
          });
          isVerifiedUser = false;
        }
      });
    } else {
      var _iterator2 = _createForOfIteratorHelper(redirectBtns),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var redirectBtn = _step2.value;
          redirectBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(participateBtns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var participateBtn = _step3.value;
          participateBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(unauthMsgs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _unauthMes = _step4.value;
          _unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return Promise.resolve(false);
    }
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass();
  }
  function refreshLocalizedClass(element) {
    var baseCssClass = "";
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function renderUsers(weekNum) {
    var userData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    weekNum = Number(weekNum);
    var weekObj = userData.find(function (w) {
      return w.week === weekNum;
    });
    if (!weekObj || !weekObj.data || !Array.isArray(weekObj.data.users)) {
      console.error('Невірна структура даних');
      return;
    }
    var isStageEnded = weekObj.data.isStageEnded;
    userData = weekObj.data.users;
    var winnerAdditionalPrize = userData.find(function (u) {
      if (u.winner === true) {
        return u;
      }
    });
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });
    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
    }
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize) {
    if (!(users !== null && users !== void 0 && users.length)) return;
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    secondTableOther.innerHTML = '';
    secondTable.innerHTML = '';
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !currentUser || isTopCurrentUser ? 11 : 10;
    var topUsers = users.slice(0, topUsersLength);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (isVerifiedUser && !currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, true, week);
    }
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, true, week);
    }
    if (winnerAdditionalPrize) {
      if (currentUser && winnerAdditionalPrize.userid === currentUserId) {
        displaySecondUser(winnerAdditionalPrize, true, secondTableOther, [winnerAdditionalPrize], true);
      } else {
        displaySecondUser(winnerAdditionalPrize, false, secondTableOther, [winnerAdditionalPrize], false);
      }
    } else {
      secondTable.innerHTML = "<div class=\"table__row table__row--noWinner\"> ".concat(translateKey(isStageEnded ? "noWinnerHoodie" : "waitingWinnerHoodie"), " </div>");
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                 ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (index !== 10 && users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function displaySecondUser(user, isCurrentUser, table, users, isTopCurrentUser) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight2 = options.highlight,
        highlight = _options$highlight2 === void 0 ? false : _options$highlight2,
        _options$neighbor2 = options.neighbor,
        neighbor = _options$neighbor2 === void 0 ? false : _options$neighbor2;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var prizeKey = "prize_hoodie";
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.coefIn).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                <div class=\"table__row-item-img\">\n                  <img src=\"img/prize/hoodie.svg\" alt=\"hoodie\">\n                </div>\n                <div class=\"table__row-item-txt\">\n                    ").concat(prizeKey ? translateKey(prizeKey) : " - ", "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      renderRow(user, {
        highlight: true
      });
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    week = 1; // в цьому проміку для всіх стейджів однакові призи тому week = 1
    if (place <= 12) return "prize_".concat(place);
    if (place <= 16) return "prize_13-16";
    if (place <= 19) return "prize_17-19";
    if (place <= 29) return "prize_20-29";
    if (place <= 40) return "prize_30-40";
    if (place <= 80) return "prize_41-80";
    if (place <= 113) return "prize_81-113";
    if (place <= 130) return "prize_114-130";
    if (place <= 150) return "prize_131-150";
    if (place <= 170) return "prize_151-170";
    if (place <= 200) return "prize_171-200";
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
        loadUsers("?nocache=1").then(function (res) {
          renderUsers(activeWeek, tableData);
        });
      }, 1000);
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  }
  function loadUsers(parametr) {
    var requests = [];
    tableData.length = 0;
    var _loop = function _loop() {
      var week = i; // або будь-яка логіка для формування номера тижня
      var req = request("/users/".concat(week).concat(parametr ? parametr : "")).then(function (data) {
        tableData.push({
          week: week,
          data: data
        });
        if (!activeWeek) {
          activeWeek = data.activeStageNumber;
        }
        isPromoOver = data.isPromoOver;
      });
      requests.push(req);
    };
    for (var i = 1; i <= periodAmount; i++) {
      _loop();
    }
    return Promise.all(requests)["catch"](function (error) {
      console.error('Error loading users:', error);
    });
  }
  function showItemsOnScroll(itemClass) {
    var Blocks = document.querySelectorAll(itemClass);
    if (!Blocks.length) return;
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setTimeout(function () {
            var _entry$target$querySe, _entry$target$querySe2;
            (_entry$target$querySe = entry.target.querySelector(".results__decor-left")) === null || _entry$target$querySe === void 0 ? void 0 : _entry$target$querySe.classList.add("showItem");
            (_entry$target$querySe2 = entry.target.querySelector(".results__decor-right")) === null || _entry$target$querySe2 === void 0 ? void 0 : _entry$target$querySe2.classList.add("showItem");
            observer.unobserve(entry.target);
          }, 200);
          setTimeout(function () {
            var _entry$target$querySe3, _entry$target$querySe4, _entry$target$querySe5, _entry$target$querySe6;
            (_entry$target$querySe3 = entry.target.querySelector(".prize__decor-left")) === null || _entry$target$querySe3 === void 0 ? void 0 : _entry$target$querySe3.classList.add("showItem");
            (_entry$target$querySe4 = entry.target.querySelector(".prize__decor-right")) === null || _entry$target$querySe4 === void 0 ? void 0 : _entry$target$querySe4.classList.add("showItem");
            (_entry$target$querySe5 = entry.target.querySelector(".hoodie")) === null || _entry$target$querySe5 === void 0 ? void 0 : _entry$target$querySe5.classList.add("showItem");
            (_entry$target$querySe6 = entry.target.querySelector(".prize__info")) === null || _entry$target$querySe6 === void 0 ? void 0 : _entry$target$querySe6.classList.add("showItem");
            observer.unobserve(entry.target);
          }, 200);
          setTimeout(function () {
            var _entry$target$querySe7;
            (_entry$target$querySe7 = entry.target.querySelector(".gide__masck")) === null || _entry$target$querySe7 === void 0 ? void 0 : _entry$target$querySe7.classList.add("showItem");
            observer.unobserve(entry.target);
          }, 600);
          setTimeout(function () {
            var _entry$target$querySe8, _entry$target$querySe9, _entry$target$querySe10, _entry$target$querySe11, _entry$target$querySe12, _entry$target$querySe13;
            (_entry$target$querySe8 = entry.target.querySelector(".table__decor-1")) === null || _entry$target$querySe8 === void 0 ? void 0 : _entry$target$querySe8.classList.add("showItem");
            (_entry$target$querySe9 = entry.target.querySelector(".table__decor-2")) === null || _entry$target$querySe9 === void 0 ? void 0 : _entry$target$querySe9.classList.add("showItem");
            (_entry$target$querySe10 = entry.target.querySelector(".table__decor-3")) === null || _entry$target$querySe10 === void 0 ? void 0 : _entry$target$querySe10.classList.add("showItem");
            (_entry$target$querySe11 = entry.target.querySelector(".table__decor-4")) === null || _entry$target$querySe11 === void 0 ? void 0 : _entry$target$querySe11.classList.add("showItem");
            (_entry$target$querySe12 = entry.target.querySelector(".table__decor-5")) === null || _entry$target$querySe12 === void 0 ? void 0 : _entry$target$querySe12.classList.add("showItem");
            (_entry$target$querySe13 = entry.target.querySelector(".table__decor-6")) === null || _entry$target$querySe13 === void 0 ? void 0 : _entry$target$querySe13.classList.add("showItem");
            observer.unobserve(entry.target);
          }, 200);
        }
      });
    }, {
      threshold: 0.3
    });
    Blocks.forEach(function (item) {
      return observer.observe(item);
    });
  }
  function openPopupByAttr(popupAttr) {
    var allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(function (p) {
      return p.classList.remove('active');
    });
    document.body.style.overflow = 'hidden';
    var targetPopup = document.querySelector(".popup[data-popup=\"".concat(popupAttr, "\"]"));
    if (targetPopup) {
      mainPage.classList.add('overlay');
      targetPopup.classList.add('active');
      document.querySelector('.popup-wrap').classList.remove('opacity');
    }
  }
  function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(function (p) {
      return p.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
    document.querySelector('.popup-wrap').classList.add('opacity');
    mainPage.classList.remove('overlay');
  }
  showItemsOnScroll(".results");
  showItemsOnScroll(".gide");
  showItemsOnScroll(".prize");
  showItemsOnScroll(".table");
  function displayHoodieWinner(users) {
    var hoodieTableBody = document.querySelector('.table__body#hoodie');
    if (!hoodieTableBody) return;
    hoodieTableBody.innerHTML = ''; // очистимо попередній вміст

    var winnerUser = users.find(function (user) {
      return user.winner;
    });
    var hoodieRow = document.createElement('div');
    hoodieRow.classList.add('table__row');
    if (winnerUser) {
      hoodieRow.innerHTML = "\n      <div class=\"table__row-item\">".concat(winnerUser.userid, "</div>\n      <div class=\"table__row-item\">\u0445").concat(winnerUser.coefIn, "</div>\n      <div class=\"table__row-item\">\n        <div class=\"table__row-item-img\">\n          <img src=\"img/prize/hoodie.svg\" alt=\"hoodie\">\n        </div>\n        <div class=\"table__row-item-txt\" data-translate=\"tableHoodie\">\u0445\u0443\u0434\u0456</div>\n      </div>\n    ");
    } else {
      hoodieRow.classList.add('waiting');
      hoodieRow.setAttribute('data-translate', 'waitingWinnerHoodie');
    }
    hoodieTableBody.append(hoodieRow);
  }
  loadTranslations().then(init); // запуск ініту сторінки

  // TEST

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });

  // document.querySelector('.dark-btn').addEventListener('click', () => {
  //     document.body.classList.toggle('dark');
  // });

  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  var betBtn = document.querySelector(".btn-bet-online");
  betBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "777");
    }
    window.location.reload();
  });
  authBtn.addEventListener("click", function () {
    sessionStorage.removeItem("userId");
    unauthMsgs.forEach(function (item) {
      return item.classList.add('hide');
    });
    participateBtns.forEach(function (item) {
      return item.classList.remove('hide');
    });
    redirectBtns.forEach(function (item) {
      return item.classList.add('hide');
    });
  });
  document.querySelector('.btn-phase').addEventListener('click', function () {
    var activeWeek = 2;
    renderUsers(activeWeek, tableData);
    document.querySelectorAll(".table__tabs-item").forEach(function (tab, i) {
      tab.classList.remove('active');
      if (i === activeWeek - 1) {
        tab.classList.add('active');
        tab.classList.remove('lock');
      }
    });
    tableTabs.forEach(function (tab) {
      if (Number(tab.getAttribute("data-week")) > activeWeek) {
        tab.style.pointerEvents = "none";
      } else {
        tab.style.pointerEvents = "initial";
      }
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest(".table__tabs-item")) {
        if (Number(e.target.closest(".table__tabs-item").getAttribute("data-week")) > activeWeek) {
          return;
        }
        e.target.closest(".table__tabs-item").style.pointerEvents = "initial";
        tableTabs.forEach(function (tab) {
          tab.classList.remove("active");
        });
        var tabWeek = e.target.closest(".table__tabs-item").getAttribute("data-week");
        e.target.closest(".table__tabs-item").classList.add("active");
        renderUsers(tabWeek, tableData);
      }
    });
  });
  document.querySelector('.toggle-hoodie').addEventListener('click', function () {
    var hoodieRow = document.querySelector('.table__body#hoodie .table__row');
    if (!hoodieRow) return;
    var isWaiting = hoodieRow.classList.contains('waiting');
    if (isWaiting) {
      // 🔹 якщо було "очікування" — прибираємо та додаємо вміст переможця
      hoodieRow.classList.remove('waiting');
      hoodieRow.removeAttribute('data-translate');
      hoodieRow.innerHTML = "\n      <div class=\"table__row-item\">4538***</div>\n      <div class=\"table__row-item\">\u044510</div>\n      <div class=\"table__row-item\">\n        <div class=\"table__row-item-img\">\n          <img src=\"img/prize/hoodie.svg\" alt=\"hoodie\">\n        </div>\n        <div class=\"table__row-item-txt\" data-translate=\"tableHoodie\">\u0445\u0443\u0434\u0456</div>\n      </div>\n    ";
    }
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwiaXNQcm9tb092ZXIiLCJtYWluUGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuYXV0aE1zZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFydGljaXBhdGVCdG5zIiwicmVkaXJlY3RCdG5zIiwibG9hZGVyIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJ0YWJsZVRhYnMiLCJzZWNvbmRUYWJsZSIsInNlY29uZFRhYmxlT3RoZXIiLCJ0YWJzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsIk51bWJlciIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImFkZCIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsImxvYWRVc2VycyIsInNldFRpbWVvdXQiLCJpdGVtIiwibnVtIiwiZ2V0QXR0cmlidXRlIiwicmVuZGVyVXNlcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJwYXJ0aWNpcGF0ZSIsInRhYiIsIndlZWsiLCJzaG93SXRlbXNPblNjcm9sbCIsImxvZyIsIm9wZW5Qb3B1cEJ5QXR0ciIsIm9wZW5Qb3B1cEVsIiwiaXNJbnNpZGUiLCJjb250YWlucyIsImNsb3NlQWxsUG9wdXBzIiwiY2xvc2VCdG4iLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJyZWRpcmVjdEJ0biIsInBhcnRpY2lwYXRlQnRuIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJ3ZWVrTnVtIiwidXNlckRhdGEiLCJ3ZWVrT2JqIiwiZmluZCIsInciLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwicG9pbnRzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJkaXNwbGF5U2Vjb25kVXNlciIsInRyYW5zbGF0ZUtleSIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjb2VmSW4iLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJwbGFjZSIsInBhcmFtcyIsInBhcmFtZXRyIiwicmVxdWVzdHMiLCJpIiwicmVxIiwicHVzaCIsImFjdGl2ZVN0YWdlTnVtYmVyIiwiYWxsIiwiaXRlbUNsYXNzIiwiQmxvY2tzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwicCIsInRhcmdldFBvcHVwIiwiZGlzcGxheUhvb2RpZVdpbm5lciIsImhvb2RpZVRhYmxlQm9keSIsIndpbm5lclVzZXIiLCJob29kaWVSb3ciLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJiZXRCdG4iLCJwb2ludGVyRXZlbnRzIiwidGFiV2VlayIsImlzV2FpdGluZyJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxH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LENBQUMsQ0FBQ3pCLEtBQUssQ0FBQzhKLGFBQWEsR0FBRyxTQUFTO1FBQ3JFeE0sU0FBUyxDQUFDUyxPQUFPLENBQUMsVUFBQTRELEdBQUcsRUFBRztVQUNwQkEsR0FBRyxDQUFDMUQsU0FBUyxDQUFDMEMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFDRixJQUFJb0osT0FBTyxHQUFHeEksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDTCxZQUFZLENBQUMsV0FBVyxDQUFDO1FBQzdFRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUN4RCxTQUFTLENBQUN1QyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzdEYSxXQUFXLENBQUMwSSxPQUFPLEVBQUV0TixTQUFTLENBQUM7TUFDbkM7SUFDSixDQUFDLENBQUM7RUFFTixDQUFDLENBQUM7RUFFRkksUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3dFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3JFLElBQU1pSSxTQUFTLEdBQUcxTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQztJQUMzRSxJQUFJLENBQUN5TSxTQUFTLEVBQUU7SUFFaEIsSUFBTVMsU0FBUyxHQUFHVCxTQUFTLENBQUN0TCxTQUFTLENBQUNpRSxRQUFRLENBQUMsU0FBUyxDQUFDO0lBRXpELElBQUk4SCxTQUFTLEVBQUU7TUFDWDtNQUNBVCxTQUFTLENBQUN0TCxTQUFTLENBQUMwQyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ3JDNEksU0FBUyxDQUFDL0ssZUFBZSxDQUFDLGdCQUFnQixDQUFDO01BQzNDK0ssU0FBUyxDQUFDakwsU0FBUyw2WUFTMUI7SUFDRztFQUNKLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfaG9ja2V5X3VuaXZlcnNlJ1xuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG5cbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gMyAvLyDQutGW0LvRjNC60ZbRgdGC0Ywg0L/QtdGA0ZbQvtC00ZbQsiDQsiDQsNC60YbRltGXLCDRgtGA0LXQsdCwINC00LvRjyDQutC10YjRg9Cy0LDQvdC90Y8g0ZbQvdGE0Lgg0Lcg0YLQsNCx0LvQuFxuICAgIGxldCB0YWJsZURhdGEgPSBbXVxuICAgIGxldCBhY3RpdmVXZWVrID0gbnVsbFxuICAgIGxldCBpc1Byb21vT3ZlciA9IGZhbHNlXG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheS1idG4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyksXG4gICAgICAgIHRhYmxlVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJyksXG4gICAgICAgIHNlY29uZFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWNvbmRUYWJsZVwiKSxcbiAgICAgICAgc2Vjb25kVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Vjb25kVGFibGVPdGhlclwiKSxcbiAgICAgICAgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJyk7XG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwidWtcIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG5cbiAgICAvLyBsZXQgdXNlcklkID0gbnVsbDtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcbiAgICB1c2VySWQgPSAxMDAxXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNQcm9tb092ZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIHRhYnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlcihpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS13ZWVrJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT09IGFjdGl2ZVdlZWspIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPiBhY3RpdmVXZWVrKSBpdGVtLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAocGFyc2VJbnQodGFiLmRhdGFzZXQud2VlaykgPT09IGFjdGl2ZVdlZWspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlckhvb2RpZVdpbm5lcihhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYoTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGNsaWNrZWRUYWIgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoIWNsaWNrZWRUYWIpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGN1cnJlbnRUYWJsZSA9IGNsaWNrZWRUYWIuY2xvc2VzdChcIi50YWJsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHBhcmVudEJsb2NrID0gY2xpY2tlZFRhYi5jbG9zZXN0KFwiLnJlc3VsdHMsIC5wcml6ZVwiKTsgLy8g0LLQuNC30L3QsNGH0LDRlNC80L4sINC00LUg0LfQvdCw0YXQvtC00LjRgtGM0YHRjyDRgtCw0LHQu9C40YbRj1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGNsaWNrZWRUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoTnVtYmVyKGNsaWNrZWRUYWIuZGF0YXNldC53ZWVrKSA+IGFjdGl2ZVdlZWspIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNsaWNrZWRUYWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY3VycmVudFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNsaWNrZWRUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRhYldlZWsgPSBjbGlja2VkVGFiLmRhdGFzZXQud2VlaztcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChwYXJlbnRCbG9jayAmJiBwYXJlbnRCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXN1bHRzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAocGFyZW50QmxvY2sgJiYgcGFyZW50QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpemVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzaG93V2lubmVySG9vZGllKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucGFydC1idG4nKSkgcGFydGljaXBhdGUoZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBOdW1iZXIodGFiLmdldEF0dHJpYnV0ZSgnZGF0YS13ZWVrJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2VlayA+IGFjdGl2ZVdlZWspIHJldHVyblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFicy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlcihpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS13ZWVrJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PT0gd2VlaykgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLmdpZGVfX2Jsb2NrXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdpZGVfX2RldGFpbHNCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnRuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXBCeUF0dHIoJ2dpZGVJbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlblBvcHVwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0luc2lkZSA9IG9wZW5Qb3B1cEVsID8gb3BlblBvcHVwRWwuY29udGFpbnMoZS50YXJnZXQpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlblBvcHVwRWwgJiYgIWlzSW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGxQb3B1cHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19jbG9zZScpLmZvckVhY2goY2xvc2VCdG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUFsbFBvcHVwcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfT9ub2NhY2hlPTFgKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGJhc2VDc3NDbGFzcyA9IFwiXCJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhID0gW10pIHtcbiAgICAgICAgd2Vla051bSA9IE51bWJlcih3ZWVrTnVtKTtcbiAgICAgICAgY29uc3Qgd2Vla09iaiA9IHVzZXJEYXRhLmZpbmQodyA9PiB3LndlZWsgPT09IHdlZWtOdW0pO1xuICAgICAgICBpZiAoIXdlZWtPYmogfHwgIXdlZWtPYmouZGF0YSB8fCAhQXJyYXkuaXNBcnJheSh3ZWVrT2JqLmRhdGEudXNlcnMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQndC10LLRltGA0L3QsCDRgdGC0YDRg9C60YLRg9GA0LAg0LTQsNC90LjRhScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNTdGFnZUVuZGVkID0gd2Vla09iai5kYXRhLmlzU3RhZ2VFbmRlZFxuXG4gICAgICAgIHVzZXJEYXRhID0gd2Vla09iai5kYXRhLnVzZXJzO1xuXG4gICAgICAgIGNvbnN0IHdpbm5lckFkZGl0aW9uYWxQcml6ZSA9IHVzZXJEYXRhLmZpbmQodSA9PiB7XG4gICAgICAgICAgICBpZih1Lndpbm5lciA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKTtcblxuICAgICAgICBpZih1c2VySWQgJiYgIWN1cnJlbnRVc2VyICYmIGlzVmVyaWZpZWRVc2VyKXtcbiAgICAgICAgICAgIHVzZXJEYXRhID0gWy4uLnVzZXJEYXRhLCB7dXNlcmlkOiB1c2VySWQsIHBvaW50czogMH1dXG4gICAgICAgIH1cbiAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJEYXRhLCB1c2VySWQsIHdlZWtOdW0sIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyLCBpc1N0YWdlRW5kZWQsIHdpbm5lckFkZGl0aW9uYWxQcml6ZSkge1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kVGFibGUuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIWN1cnJlbnRVc2VyIHx8IGlzVG9wQ3VycmVudFVzZXIgPyAxMSA6IDEwO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihpc1ZlcmlmaWVkVXNlciAmJiAhY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIHRydWUsIHdlZWspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCB0cnVlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5uZXJBZGRpdGlvbmFsUHJpemUpIHtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRVc2VyICYmIHdpbm5lckFkZGl0aW9uYWxQcml6ZS51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5U2Vjb25kVXNlcih3aW5uZXJBZGRpdGlvbmFsUHJpemUsIHRydWUgLCBzZWNvbmRUYWJsZU90aGVyLCBbd2lubmVyQWRkaXRpb25hbFByaXplXSwgdHJ1ZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGRpc3BsYXlTZWNvbmRVc2VyKHdpbm5lckFkZGl0aW9uYWxQcml6ZSwgZmFsc2UgLCBzZWNvbmRUYWJsZU90aGVyLCBbd2lubmVyQWRkaXRpb25hbFByaXplXSwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWNvbmRUYWJsZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3cgdGFibGVfX3Jvdy0tbm9XaW5uZXJcIj4gJHt0cmFuc2xhdGVLZXkoaXNTdGFnZUVuZGVkID8gXCJub1dpbm5lckhvb2RpZVwiIDogXCJ3YWl0aW5nV2lubmVySG9vZGllXCIpfSA8L2Rpdj5gXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMTAgJiYgdXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTZWNvbmRVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlcikge1xuXG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IFwicHJpemVfaG9vZGllXCJcblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtOdW1iZXIodXNlckRhdGEuY29lZkluKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3ByaXplL2hvb2RpZS5zdmdcIiBhbHQ9XCJob29kaWVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6IFwiIC0gXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgd2VlayA9IDEgLy8g0LIg0YbRjNC+0LzRgyDQv9GA0L7QvNGW0LrRgyDQtNC70Y8g0LLRgdGW0YUg0YHRgtC10LnQtNC20ZbQsiDQvtC00L3QsNC60L7QstGWINC/0YDQuNC30Lgg0YLQvtC80YMgd2VlayA9IDFcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyKSByZXR1cm4gYHByaXplXyR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE2KSByZXR1cm4gYHByaXplXzEzLTE2YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE5KSByZXR1cm4gYHByaXplXzE3LTE5YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI5KSByZXR1cm4gYHByaXplXzIwLTI5YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDQwKSByZXR1cm4gYHByaXplXzMwLTQwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDgwKSByZXR1cm4gYHByaXplXzQxLTgwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDExMykgcmV0dXJuIGBwcml6ZV84MS0xMTNgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTMwKSByZXR1cm4gYHByaXplXzExNC0xMzBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXzEzMS0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTcwKSByZXR1cm4gYHByaXplXzE1MS0xNzBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXzE3MS0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZXJpb2RBbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgd2VlayA9IGk7IC8vINCw0LHQviDQsdGD0LTRjC3Rj9C60LAg0LvQvtCz0ZbQutCwINC00LvRjyDRhNC+0YDQvNGD0LLQsNC90L3RjyDQvdC+0LzQtdGA0LAg0YLQuNC20L3Rj1xuICAgICAgICAgICAgY29uc3QgcmVxID0gcmVxdWVzdChgL3VzZXJzLyR7d2Vla30ke3BhcmFtZXRyID8gcGFyYW1ldHIgOiBcIlwifWApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGFibGVEYXRhLnB1c2goeyB3ZWVrLCBkYXRhOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIGlmKCFhY3RpdmVXZWVrKXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlV2VlayA9IGRhdGEuYWN0aXZlU3RhZ2VOdW1iZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNQcm9tb092ZXIgPSBkYXRhLmlzUHJvbW9PdmVyXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHVzZXJzOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0l0ZW1zT25TY3JvbGwoaXRlbUNsYXNzKSB7XG4gICAgICAgIGNvbnN0IEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaXRlbUNsYXNzKTtcbiAgICAgICAgaWYgKCFCbG9ja3MubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzX19kZWNvci1sZWZ0XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHNfX2RlY29yLXJpZ2h0XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByaXplX19kZWNvci1sZWZ0XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByaXplX19kZWNvci1yaWdodFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5ob29kaWVcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucHJpemVfX2luZm9cIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZ2lkZV9fbWFzY2tcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTFcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTJcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTNcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTRcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTVcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTZcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEJsb2Nrcy5mb3JFYWNoKGl0ZW0gPT4gb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXknKTtcbiAgICB9XG5cbiAgICBzaG93SXRlbXNPblNjcm9sbChcIi5yZXN1bHRzXCIpXG4gICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIuZ2lkZVwiKVxuICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLnByaXplXCIpXG4gICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIudGFibGVcIilcblxuXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5SG9vZGllV2lubmVyKHVzZXJzKSB7XG4gICAgICAgIGNvbnN0IGhvb2RpZVRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fYm9keSNob29kaWUnKTtcbiAgICAgICAgaWYgKCFob29kaWVUYWJsZUJvZHkpIHJldHVybjtcblxuICAgICAgICBob29kaWVUYWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7IC8vINC+0YfQuNGB0YLQuNC80L4g0L/QvtC/0LXRgNC10LTQvdGW0Lkg0LLQvNGW0YHRglxuXG4gICAgICAgIGNvbnN0IHdpbm5lclVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci53aW5uZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvb2RpZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob29kaWVSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgIGlmICh3aW5uZXJVc2VyKSB7XG4gICAgICAgICAgICBob29kaWVSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7d2lubmVyVXNlci51c2VyaWR9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+0YUke3dpbm5lclVzZXIuY29lZklufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtLWltZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3ByaXplL2hvb2RpZS5zdmdcIiBhbHQ9XCJob29kaWVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW0tdHh0XCIgZGF0YS10cmFuc2xhdGU9XCJ0YWJsZUhvb2RpZVwiPtGF0YPQtNGWPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9vZGllUm93LmNsYXNzTGlzdC5hZGQoJ3dhaXRpbmcnKTtcbiAgICAgICAgICAgIGhvb2RpZVJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgJ3dhaXRpbmdXaW5uZXJIb29kaWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhvb2RpZVRhYmxlQm9keS5hcHBlbmQoaG9vZGllUm93KTtcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG4gICAgLy8gVEVTVFxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG4gICAgY29uc3QgYmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmV0LW9ubGluZVwiKVxuXG4gICAgYmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiNzc3XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB1bmF1dGhNc2dzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGhhc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWN0aXZlV2VlayA9IDJcbiAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSl7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgIGlmKE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpKXtcbiAgICAgICAgICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaywgdGFibGVEYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWhvb2RpZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBob29kaWVSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2JvZHkjaG9vZGllIC50YWJsZV9fcm93Jyk7XG4gICAgICAgIGlmICghaG9vZGllUm93KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgaXNXYWl0aW5nID0gaG9vZGllUm93LmNsYXNzTGlzdC5jb250YWlucygnd2FpdGluZycpO1xuXG4gICAgICAgIGlmIChpc1dhaXRpbmcpIHtcbiAgICAgICAgICAgIC8vIPCflLkg0Y/QutGJ0L4g0LHRg9C70L4gXCLQvtGH0ZbQutGD0LLQsNC90L3Rj1wiIOKAlCDQv9GA0LjQsdC40YDQsNGU0LzQviDRgtCwINC00L7QtNCw0ZTQvNC+INCy0LzRltGB0YIg0L/QtdGA0LXQvNC+0LbRhtGPXG4gICAgICAgICAgICBob29kaWVSb3cuY2xhc3NMaXN0LnJlbW92ZSgnd2FpdGluZycpO1xuICAgICAgICAgICAgaG9vZGllUm93LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgIGhvb2RpZVJvdy5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+NDUzOCoqKjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPtGFMTA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbS1pbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcml6ZS9ob29kaWUuc3ZnXCIgYWx0PVwiaG9vZGllXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtLXR4dFwiIGRhdGEtdHJhbnNsYXRlPVwidGFibGVIb29kaWVcIj7RhdGD0LTRljwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KSgpO1xuXG5cbiJdfQ==
