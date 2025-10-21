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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwiaXNQcm9tb092ZXIiLCJtYWluUGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuYXV0aE1zZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFydGljaXBhdGVCdG5zIiwicmVkaXJlY3RCdG5zIiwibG9hZGVyIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJ0YWJsZVRhYnMiLCJzZWNvbmRUYWJsZSIsInNlY29uZFRhYmxlT3RoZXIiLCJ0YWJzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkZWJ1ZyIsImhpZGVMb2FkZXIiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsIk51bWJlciIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImFkZCIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsImxvYWRVc2VycyIsInNldFRpbWVvdXQiLCJpdGVtIiwibnVtIiwiZ2V0QXR0cmlidXRlIiwicmVuZGVyVXNlcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJwYXJ0aWNpcGF0ZSIsInRhYiIsIndlZWsiLCJzaG93SXRlbXNPblNjcm9sbCIsImxvZyIsIm9wZW5Qb3B1cEJ5QXR0ciIsIm9wZW5Qb3B1cEVsIiwiaXNJbnNpZGUiLCJjb250YWlucyIsImNsb3NlQWxsUG9wdXBzIiwiY2xvc2VCdG4iLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ1bmF1dGhNZXMiLCJ1c2VyaWQiLCJyZWRpcmVjdEJ0biIsInBhcnRpY2lwYXRlQnRuIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImJhc2VDc3NDbGFzcyIsImxhbmciLCJ3ZWVrTnVtIiwidXNlckRhdGEiLCJ3ZWVrT2JqIiwiZmluZCIsInciLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidXNlcnMiLCJpc1N0YWdlRW5kZWQiLCJ3aW5uZXJBZGRpdGlvbmFsUHJpemUiLCJ1Iiwid2lubmVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwicG9pbnRzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJkaXNwbGF5U2Vjb25kVXNlciIsInRyYW5zbGF0ZUtleSIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJ0b0ZpeGVkIiwiYXBwZW5kIiwiaW5kZXgiLCJjb2VmSW4iLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJwbGFjZSIsInBhcmFtcyIsInBhcmFtZXRyIiwicmVxdWVzdHMiLCJpIiwicmVxIiwicHVzaCIsImFjdGl2ZVN0YWdlTnVtYmVyIiwiYWxsIiwiaXRlbUNsYXNzIiwiQmxvY2tzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwicG9wdXBBdHRyIiwiYWxsUG9wdXBzIiwicCIsInRhcmdldFBvcHVwIiwiZGlzcGxheUhvb2RpZVdpbm5lciIsImhvb2RpZVRhYmxlQm9keSIsIndpbm5lclVzZXIiLCJob29kaWVSb3ciLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJiZXRCdG4iLCJwb2ludGVyRXZlbnRzIiwidGFiV2VlayIsImlzV2FpdGluZyJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxH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QzhKLGFBQWEsR0FBRyxTQUFTO1FBQ3JFeE0sU0FBUyxDQUFDUyxPQUFPLENBQUMsVUFBQTRELEdBQUcsRUFBRztVQUNwQkEsR0FBRyxDQUFDMUQsU0FBUyxDQUFDMEMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFDRixJQUFJb0osT0FBTyxHQUFHeEksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDTCxZQUFZLENBQUMsV0FBVyxDQUFDO1FBQzdFRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUN4RCxTQUFTLENBQUN1QyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzdEYSxXQUFXLENBQUMwSSxPQUFPLEVBQUV0TixTQUFTLENBQUM7TUFDbkM7SUFDSixDQUFDLENBQUM7RUFFTixDQUFDLENBQUM7RUFFRkksUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3dFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3JFLElBQU1pSSxTQUFTLEdBQUcxTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQztJQUMzRSxJQUFJLENBQUN5TSxTQUFTLEVBQUU7SUFFaEIsSUFBTVMsU0FBUyxHQUFHVCxTQUFTLENBQUN0TCxTQUFTLENBQUNpRSxRQUFRLENBQUMsU0FBUyxDQUFDO0lBRXpELElBQUk4SCxTQUFTLEVBQUU7TUFDWDtNQUNBVCxTQUFTLENBQUN0TCxTQUFTLENBQUMwQyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ3JDNEksU0FBUyxDQUFDL0ssZUFBZSxDQUFDLGdCQUFnQixDQUFDO01BQzNDK0ssU0FBUyxDQUFDakwsU0FBUyw2WUFTMUI7SUFDRztFQUNKLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfaG9ja2V5X3VuaXZlcnNlJ1xuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG5cbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gMyAvLyDQutGW0LvRjNC60ZbRgdGC0Ywg0L/QtdGA0ZbQvtC00ZbQsiDQsiDQsNC60YbRltGXLCDRgtGA0LXQsdCwINC00LvRjyDQutC10YjRg9Cy0LDQvdC90Y8g0ZbQvdGE0Lgg0Lcg0YLQsNCx0LvQuFxuICAgIGxldCB0YWJsZURhdGEgPSBbXVxuICAgIGxldCBhY3RpdmVXZWVrID0gbnVsbFxuICAgIGxldCBpc1Byb21vT3ZlciA9IGZhbHNlXG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheS1idG4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyksXG4gICAgICAgIHRhYmxlVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJyksXG4gICAgICAgIHNlY29uZFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWNvbmRUYWJsZVwiKSxcbiAgICAgICAgc2Vjb25kVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2Vjb25kVGFibGVPdGhlclwiKSxcbiAgICAgICAgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJyk7XG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwidWtcIlxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpIHx8IFwidWtcIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG5cbiAgICAvLyBsZXQgdXNlcklkID0gbnVsbDtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcblxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IGxvYWRVc2VycyhcIj9ub2NhY2hlPTFcIikpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzUHJvbW9PdmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB0YWJzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2VlaycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09PSBhY3RpdmVXZWVrKSBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID4gYWN0aXZlV2VlaykgaXRlbS5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHBhcnNlSW50KHRhYi5kYXRhc2V0LndlZWspID09PSBhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJIb29kaWVXaW5uZXIoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBjbGlja2VkVGFiID0gZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCFjbGlja2VkVGFiKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBjdXJyZW50VGFibGUgPSBjbGlja2VkVGFiLmNsb3Nlc3QoXCIudGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBwYXJlbnRCbG9jayA9IGNsaWNrZWRUYWIuY2xvc2VzdChcIi5yZXN1bHRzLCAucHJpemVcIik7IC8vINCy0LjQt9C90LDRh9Cw0ZTQvNC+LCDQtNC1INC30L3QsNGF0L7QtNC40YLRjNGB0Y8g0YLQsNCx0LvQuNGG0Y9cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChjbGlja2VkVGFiLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKE51bWJlcihjbGlja2VkVGFiLmRhdGFzZXQud2VlaykgPiBhY3RpdmVXZWVrKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjbGlja2VkVGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjbGlja2VkVGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCB0YWJXZWVrID0gY2xpY2tlZFRhYi5kYXRhc2V0LndlZWs7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAocGFyZW50QmxvY2sgJiYgcGFyZW50QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVzdWx0c1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlbmRlclVzZXJzKHRhYldlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYgKHBhcmVudEJsb2NrICYmIHBhcmVudEJsb2NrLmNsYXNzTGlzdC5jb250YWlucyhcInByaXplXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2hvd1dpbm5lckhvb2RpZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnBhcnQtYnRuJykpIHBhcnRpY2lwYXRlKGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3ZWVrID0gTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2VlaycpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdlZWsgPiBhY3RpdmVXZWVrKSByZXR1cm5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2VlaycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT09IHdlZWspIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh3ZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBzaG93SXRlbXNPblNjcm9sbChcIi5naWRlX19ibG9ja1wiKVxuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWRlX19kZXRhaWxzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ0blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKCdnaWRlSW5mbycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd3JhcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJbnNpZGUgPSBvcGVuUG9wdXBFbCA/IG9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5Qb3B1cEVsICYmICFpc0luc2lkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9fY2xvc2UnKS5mb3JFYWNoKGNsb3NlQnRuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBbGxQb3B1cHMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGxldCBiYXNlQ3NzQ2xhc3MgPSBcIlwiXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrTnVtLCB1c2VyRGF0YSA9IFtdKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIGNvbnN0IHdlZWtPYmogPSB1c2VyRGF0YS5maW5kKHcgPT4gdy53ZWVrID09PSB3ZWVrTnVtKTtcbiAgICAgICAgaWYgKCF3ZWVrT2JqIHx8ICF3ZWVrT2JqLmRhdGEgfHwgIUFycmF5LmlzQXJyYXkod2Vla09iai5kYXRhLnVzZXJzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J3QtdCy0ZbRgNC90LAg0YHRgtGA0YPQutGC0YPRgNCwINC00LDQvdC40YUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzU3RhZ2VFbmRlZCA9IHdlZWtPYmouZGF0YS5pc1N0YWdlRW5kZWRcblxuICAgICAgICB1c2VyRGF0YSA9IHdlZWtPYmouZGF0YS51c2VycztcblxuICAgICAgICBjb25zdCB3aW5uZXJBZGRpdGlvbmFsUHJpemUgPSB1c2VyRGF0YS5maW5kKHUgPT4ge1xuICAgICAgICAgICAgaWYodS53aW5uZXIgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB1XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIsIGlzU3RhZ2VFbmRlZCwgd2lubmVyQWRkaXRpb25hbFByaXplKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlciwgaXNTdGFnZUVuZGVkLCB3aW5uZXJBZGRpdGlvbmFsUHJpemUpIHtcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHNlY29uZFRhYmxlLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICFjdXJyZW50VXNlciB8fCBpc1RvcEN1cnJlbnRVc2VyID8gMTEgOiAxMDtcblxuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcblxuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoaXNWZXJpZmllZFVzZXIgJiYgIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCB0cnVlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgdHJ1ZSwgd2Vlayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2lubmVyQWRkaXRpb25hbFByaXplKSB7XG4gICAgICAgICAgICBpZihjdXJyZW50VXNlciAmJiB3aW5uZXJBZGRpdGlvbmFsUHJpemUudXNlcmlkID09PSBjdXJyZW50VXNlcklkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheVNlY29uZFVzZXIod2lubmVyQWRkaXRpb25hbFByaXplLCB0cnVlICwgc2Vjb25kVGFibGVPdGhlciwgW3dpbm5lckFkZGl0aW9uYWxQcml6ZV0sIHRydWUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5U2Vjb25kVXNlcih3aW5uZXJBZGRpdGlvbmFsUHJpemUsIGZhbHNlICwgc2Vjb25kVGFibGVPdGhlciwgW3dpbm5lckFkZGl0aW9uYWxQcml6ZV0sIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2Vjb25kVGFibGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93IHRhYmxlX19yb3ctLW5vV2lubmVyXCI+ICR7dHJhbnNsYXRlS2V5KGlzU3RhZ2VFbmRlZCA/IFwibm9XaW5uZXJIb29kaWVcIiA6IFwid2FpdGluZ1dpbm5lckhvb2RpZVwiKX0gPC9kaXY+YFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDEwICYmIHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5U2Vjb25kVXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIpIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBcInByaXplX2hvb2RpZVwiXG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLmNvZWZJbikudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW0taW1nXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcml6ZS9ob29kaWUuc3ZnXCIgYWx0PVwiaG9vZGllXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbS10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiBcIiAtIFwifVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIHdlZWsgPSAxIC8vINCyINGG0YzQvtC80YMg0L/RgNC+0LzRltC60YMg0LTQu9GPINCy0YHRltGFINGB0YLQtdC50LTQttGW0LIg0L7QtNC90LDQutC+0LLRliDQv9GA0LjQt9C4INGC0L7QvNGDIHdlZWsgPSAxXG4gICAgICAgIGlmIChwbGFjZSA8PSAxMikgcmV0dXJuIGBwcml6ZV8ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNikgcmV0dXJuIGBwcml6ZV8xMy0xNmA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxOSkgcmV0dXJuIGBwcml6ZV8xNy0xOWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyOSkgcmV0dXJuIGBwcml6ZV8yMC0yOWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA0MCkgcmV0dXJuIGBwcml6ZV8zMC00MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA4MCkgcmV0dXJuIGBwcml6ZV80MS04MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMTMpIHJldHVybiBgcHJpemVfODEtMTEzYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEzMCkgcmV0dXJuIGBwcml6ZV8xMTQtMTMwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8xMzEtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3MCkgcmV0dXJuIGBwcml6ZV8xNTEtMTcwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8xNzEtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkVXNlcnMocGFyYW1ldHIpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgdGFibGVEYXRhLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGVyaW9kQW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBpOyAvLyDQsNCx0L4g0LHRg9C00Ywt0Y/QutCwINC70L7Qs9GW0LrQsCDQtNC70Y8g0YTQvtGA0LzRg9Cy0LDQvdC90Y8g0L3QvtC80LXRgNCwINGC0LjQttC90Y9cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9JHtwYXJhbWV0ciA/IHBhcmFtZXRyIDogXCJcIn1gKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRhYmxlRGF0YS5wdXNoKHsgd2VlaywgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBpZighYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWsgPSBkYXRhLmFjdGl2ZVN0YWdlTnVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlzUHJvbW9PdmVyID0gZGF0YS5pc1Byb21vT3ZlclxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChyZXEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlcXVlc3RzKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB1c2VyczonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dJdGVtc09uU2Nyb2xsKGl0ZW1DbGFzcykge1xuICAgICAgICBjb25zdCBCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGl0ZW1DbGFzcyk7XG4gICAgICAgIGlmICghQmxvY2tzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC4zKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c19fZGVjb3ItbGVmdFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzX19kZWNvci1yaWdodFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5wcml6ZV9fZGVjb3ItbGVmdFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5wcml6ZV9fZGVjb3ItcmlnaHRcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuaG9vZGllXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByaXplX19pbmZvXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmdpZGVfX21hc2NrXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci0xXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci0yXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci0zXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci00XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci01XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci02XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuM1xuICAgICAgICB9KTtcblxuICAgICAgICBCbG9ja3MuZm9yRWFjaChpdGVtID0+IG9ic2VydmVyLm9ic2VydmUoaXRlbSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuICAgICAgICAgICAgdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd3JhcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpO1xuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5Jyk7XG4gICAgfVxuXG4gICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIucmVzdWx0c1wiKVxuICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLmdpZGVcIilcbiAgICBzaG93SXRlbXNPblNjcm9sbChcIi5wcml6ZVwiKVxuICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLnRhYmxlXCIpXG5cblxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUhvb2RpZVdpbm5lcih1c2Vycykge1xuICAgICAgICBjb25zdCBob29kaWVUYWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2JvZHkjaG9vZGllJyk7XG4gICAgICAgIGlmICghaG9vZGllVGFibGVCb2R5KSByZXR1cm47XG5cbiAgICAgICAgaG9vZGllVGFibGVCb2R5LmlubmVySFRNTCA9ICcnOyAvLyDQvtGH0LjRgdGC0LjQvNC+INC/0L7Qv9C10YDQtdC00L3RltC5INCy0LzRltGB0YJcblxuICAgICAgICBjb25zdCB3aW5uZXJVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIud2lubmVyKTtcblxuICAgICAgICBjb25zdCBob29kaWVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9vZGllUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICBpZiAod2lubmVyVXNlcikge1xuICAgICAgICAgICAgaG9vZGllUm93LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke3dpbm5lclVzZXIudXNlcmlkfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPtGFJHt3aW5uZXJVc2VyLmNvZWZJbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbS1pbWdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcml6ZS9ob29kaWUuc3ZnXCIgYWx0PVwiaG9vZGllXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtLXR4dFwiIGRhdGEtdHJhbnNsYXRlPVwidGFibGVIb29kaWVcIj7RhdGD0LTRljwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvb2RpZVJvdy5jbGFzc0xpc3QuYWRkKCd3YWl0aW5nJyk7XG4gICAgICAgICAgICBob29kaWVSb3cuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsICd3YWl0aW5nV2lubmVySG9vZGllJyk7XG4gICAgICAgIH1cblxuICAgICAgICBob29kaWVUYWJsZUJvZHkuYXBwZW5kKGhvb2RpZVJvdyk7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuICAgIC8vIFRFU1RcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgLy8gfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGNvbnN0IGJldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJldC1vbmxpbmVcIilcblxuICAgIGJldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3N1wiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgdW5hdXRoTXNncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBoYXNlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFjdGl2ZVdlZWsgPSAyXG4gICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaSA9PT0gYWN0aXZlV2VlayAtIDEpe1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICBpZihOdW1iZXIodGFiLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKXtcbiAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PntcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKSl7XG4gICAgICAgICAgICAgICAgaWYoTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT57XG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGV0IHRhYldlZWsgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYldlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1ob29kaWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaG9vZGllUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlX19ib2R5I2hvb2RpZSAudGFibGVfX3JvdycpO1xuICAgICAgICBpZiAoIWhvb2RpZVJvdykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGlzV2FpdGluZyA9IGhvb2RpZVJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ3dhaXRpbmcnKTtcblxuICAgICAgICBpZiAoaXNXYWl0aW5nKSB7XG4gICAgICAgICAgICAvLyDwn5S5INGP0LrRidC+INCx0YPQu9C+IFwi0L7Rh9GW0LrRg9Cy0LDQvdC90Y9cIiDigJQg0L/RgNC40LHQuNGA0LDRlNC80L4g0YLQsCDQtNC+0LTQsNGU0LzQviDQstC80ZbRgdGCINC/0LXRgNC10LzQvtC20YbRj1xuICAgICAgICAgICAgaG9vZGllUm93LmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXRpbmcnKTtcbiAgICAgICAgICAgIGhvb2RpZVJvdy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICBob29kaWVSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPjQ1MzgqKio8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj7RhTEwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW0taW1nXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJpemUvaG9vZGllLnN2Z1wiIGFsdD1cImhvb2RpZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbS10eHRcIiBkYXRhLXRyYW5zbGF0ZT1cInRhYmxlSG9vZGllXCI+0YXRg9C00ZY8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoKTtcblxuXG4iXX0=
