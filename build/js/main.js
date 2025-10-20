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
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
    var currentDate = new Date();
    var weekDates = [];
    var Day = 24 * 60 * 60 * 1000;
    var Week = weekDuration * Day;
    var formatDate = function formatDate(date) {
      return "".concat(date.getDate().toString().padStart(2, "0"), ".").concat((date.getMonth() + 1).toString().padStart(2, "0"));
    };
    var calculateWeekPeriod = function calculateWeekPeriod(weekIndex) {
      var baseStart = promoStartDate.getTime();
      var start = new Date(baseStart + weekIndex * Week);
      var end = new Date(start.getTime() + (weekDuration * Day - 1));
      return {
        start: start,
        end: end
      };
    };
    var activeWeekIndex = null;

    // Перевірка поточного тижня
    for (var i = 0; i < 10; i++) {
      // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
      var _calculateWeekPeriod = calculateWeekPeriod(i),
        start = _calculateWeekPeriod.start,
        end = _calculateWeekPeriod.end;
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = i + 1;
        break;
      }
    }
    return activeWeekIndex;
  };
  var promoStartDate = new Date("2025-10-23T00:00:00");
  var weekDuration = 7;
  var isVerifiedUser = false;
  var periodAmount = 3; // кількість періодів в акції, треба для кешування інфи з табли

  var tableData = [];
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  if (activeWeek > 3) activeWeek = 3;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    textBtn = document.querySelectorAll('.textBtn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector('#table'),
    resultsTableOther = document.querySelector('#tableOther'),
    tableTabs = document.querySelectorAll('.table__tabs-week');
  var hrLeng = document.querySelector('#hrLeng');
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
  if (hrLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = true;
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
              checkUserAuth().then(loadUsers).then(function () {
                setTimeout(hideLoader, 300);
                document.querySelectorAll(".table__tabs-week").forEach(function (tab, i) {
                  tab.classList.remove('active');
                  if (i === activeWeek - 1) tab.classList.add('active');
                });
                renderUsers(activeWeek, tableData);
                participateBtns.forEach(function (btn) {
                  return btn.addEventListener('click', participate);
                });
                tableTabs.forEach(function (tab) {
                  if (Number(tab.getAttribute("data-week")) > activeWeek) {
                    tab.style.pointerEvents = "none";
                  } else {
                    tab.style.pointerEvents = "initial";
                  }
                });
                document.addEventListener("click", function (e) {
                  if (e.target.closest(".table__tabs-week")) {
                    if (e.target.closest(".table__tabs-week").classList.contains("active")) return;
                    if (Number(e.target.closest(".table__tabs-week").getAttribute("data-week")) > activeWeek) {
                      return;
                    }
                    e.target.closest(".table__tabs-week").style.pointerEvents = "initial";
                    tableTabs.forEach(function (tab) {
                      tab.classList.remove("active");
                    });
                    var tabWeek = e.target.closest(".table__tabs-week").getAttribute("data-week");
                    e.target.closest(".table__tabs-week").classList.add("active");
                    renderUsers(tabWeek, tableData);
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
    return request("/new-translates/".concat(locale)).then(function (json) {
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
  function refreshLocalizedClass(element, baseCssClass) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }
  function renderUsers(weekNum, userData) {
    weekNum = Number(weekNum);
    userData = userData.find(function (week) {
      return week.week === weekNum;
    }).users;
    var currentUser = userData.find(function (user) {
      return user.userid === userId;
    });
    if (userId && !currentUser && isVerifiedUser) {
      userData = [].concat(_toConsumableArray(userData), [{
        userid: userId,
        points: 0
      }]);
      currentUser = userData.find(function (user) {
        return user.userid === userId;
      });
    }
    populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser);
  }
  function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var topUsers = users.slice(0, 20);
    var isTopCurrentUser = currentUser && users.slice(0, 8).some(function (user) {
      return user.userid === currentUserId;
    });
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!currentUser || isTopCurrentUser) {
      resultsTable.classList.add('withoutYou');
      return; // якщо юзер не в таблиці, resultsTableOther не рендеримо
    } else {
      resultsTable.classList.remove('withoutYou');
    }

    // Юзер не у топ-8 (місце ≥ 9)
    if (currentUser && !isTopCurrentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
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
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(Number(userData.points).toFixed(2), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    // if (isCurrentUser && !isTopCurrentUser) {
    //     const index = users.indexOf(user);
    //     if (index !== 10 && users[index - 1]) {
    //         renderRow(users[index - 1], { neighbor: true });
    //     }
    //     renderRow(user, { highlight: true });
    //     if (users[index + 1]) {
    //         renderRow(users[index + 1], { neighbor: true });
    //     }
    // } else {
    //     renderRow(user);
    // }

    var isMainTable = table === resultsTable;
    if (isCurrentUser && !isTopCurrentUser && !isMainTable) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
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

    // if (isCurrentUser && !isTopCurrentUser) {
    //     const index = users.indexOf(user);
    //     if (users[index - 1]) {
    //         renderRow(users[index - 1], { neighbor: true });
    //     }
    //     renderRow(user, { highlight: true });
    //     if (users[index + 1]) {
    //         renderRow(users[index + 1], { neighbor: true });
    //     }
    // } else {
    //     renderRow(user);
    // }
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
    if (place <= 3) return "prize".concat(place);
    if (place <= 10) return "prize4";
    if (place <= 19) return "prize5";
    if (place === 20) return "prize6";
    if (place <= 29) return "prize7";
    if (place === 30) return "prize8";
    if (place <= 39) return "prize9";
    if (place === 40) return "prize10";
    if (place <= 49) return "prize11";
    if (place === 50) return "prize12";
    if (place <= 69) return "prize13";
    if (place === 70) return "prize14";
    if (place <= 89) return "prize15";
    if (place === 90) return "prize16";
    if (place <= 100) return "prize17";
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
      toggleClasses(textBtn, "loader");
      toggleTranslates(textBtn, "loader");
      setTimeout(function () {
        toggleTranslates(textBtn, "loader_ready");
        toggleClasses(textBtn, "done");
        toggleClasses(textBtn, "loader");
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
          users: data
        });
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
  loadTranslations().then(init); // запуск ініту сторінки

  // TEST

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
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
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "1553006");
    }
    window.location.reload();
  });
  betBtn.addEventListener("click", function () {
    unauthMsgs.forEach(function (item) {
      return item.classList.add('hide');
    });
    participateBtns.forEach(function (item) {
      return item.classList.add('hide');
    });
    redirectBtns.forEach(function (item) {
      return item.classList.remove('hide');
    });
  });
  document.querySelector('.btn-phase').addEventListener('click', function () {
    var activeWeek = 2;
    renderUsers(activeWeek, tableData);
    document.querySelectorAll(".table__tabs-item").forEach(function (tab, i) {
      tab.classList.remove('active');
      if (i === activeWeek - 1) tab.classList.add('active');
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
        renderUsers(tabWeek);
      }
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInRleHRCdG4iLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJsb2FkVXNlcnMiLCJzZXRUaW1lb3V0IiwidGFiIiwicmVuZGVyVXNlcnMiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGFydGljaXBhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwb2ludGVyRXZlbnRzIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJjb250YWlucyIsInRhYldlZWsiLCJzaG93SXRlbXNPblNjcm9sbCIsImxvZyIsIm9wZW5Qb3B1cEJ5QXR0ciIsIm9wZW5Qb3B1cEVsIiwiaXNJbnNpZGUiLCJjbG9zZUFsbFBvcHVwcyIsImNsb3NlQnRuIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidW5hdXRoTWVzIiwidXNlcmlkIiwiaXRlbSIsInJlZGlyZWN0QnRuIiwicGFydGljaXBhdGVCdG4iLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsImZpbmQiLCJ3ZWVrIiwidXNlcnMiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwidG9wVXNlcnMiLCJzbGljZSIsImlzVG9wQ3VycmVudFVzZXIiLCJzb21lIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwidG9GaXhlZCIsImFwcGVuZCIsImlzTWFpblRhYmxlIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJwYXJhbXMiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwicmVxIiwiZGF0YSIsInB1c2giLCJhbGwiLCJpdGVtQ2xhc3MiLCJCbG9ja3MiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJwb3B1cEF0dHIiLCJhbGxQb3B1cHMiLCJwIiwidGFyZ2V0UG9wdXAiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJiZXRCdG4iXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRywwQ0FBMEM7RUFFekQsSUFBTUMs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QU0sQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUM7UUFDckMsSUFBRzFDLE1BQU0sQ0FBQ3dDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0osWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcxRSxVQUFVLEVBQUU7VUFDckY7UUFDSjtRQUNBNEUsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDM0IsS0FBSyxDQUFDd0IsYUFBYSxHQUFHLFNBQVM7UUFDckUvRCxTQUFTLENBQUNNLE9BQU8sQ0FBQyxVQUFBbUQsR0FBRyxFQUFHO1VBQ3BCQSxHQUFHLENBQUNqRCxTQUFTLENBQUMwQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUMsQ0FBQztRQUNGLElBQUlrQixPQUFPLEdBQUdKLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0osWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUM3RUUsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDMUQsU0FBUyxDQUFDdUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM3RFcsV0FBVyxDQUFDVSxPQUFPLENBQUM7TUFDeEI7SUFDSixDQUFDLENBQUM7RUFFTixDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2hvY2tleV91bml2ZXJzZSdcblxuICAgIGNvbnN0IGdldEFjdGl2ZVdlZWsgPSAocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB3ZWVrRGF0ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgICAgICBjb25zdCBXZWVrID0gd2Vla0R1cmF0aW9uICogRGF5O1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT5cbiAgICAgICAgICAgIGAke2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfS4keyhkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZVdlZWtQZXJpb2QgPSAod2Vla0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlU3RhcnQgPSBwcm9tb1N0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKGJhc2VTdGFydCArIHdlZWtJbmRleCAqIFdlZWspO1xuICAgICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKHN0YXJ0LmdldFRpbWUoKSArICh3ZWVrRHVyYXRpb24gKiBEYXkgLSAxKSk7XG4gICAgICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGl2ZVdlZWtJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQstGW0YDQutCwINC/0L7RgtC+0YfQvdC+0LPQviDRgtC40LbQvdGPXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAvLyDQntCx0LzQtdC20YPRlNC80L4gMTAg0YLQuNC20L3Rj9C80LggKNGP0LrRidC+INC/0L7RgtGA0ZbQsdC90L4g0LHRltC70YzRiNC1LCDQv9GA0L7RgdGC0L4g0LfQvNGW0L3RltGC0Ywg0LvRltGH0LjQu9GM0L3QuNC6KVxuICAgICAgICAgICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBjYWxjdWxhdGVXZWVrUGVyaW9kKGkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVdlZWtJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3RpdmVXZWVrSW5kZXg7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vU3RhcnREYXRlID0gbmV3IERhdGUoXCIyMDI1LTEwLTIzVDAwOjAwOjAwXCIpO1xuICAgIGNvbnN0IHdlZWtEdXJhdGlvbiA9IDc7XG5cbiAgICBsZXQgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcblxuICAgIGxldCBwZXJpb2RBbW91bnQgPSAzIC8vINC60ZbQu9GM0LrRltGB0YLRjCDQv9C10YDRltC+0LTRltCyINCyINCw0LrRhtGW0ZcsINGC0YDQtdCx0LAg0LTQu9GPINC60LXRiNGD0LLQsNC90L3RjyDRltC90YTQuCDQtyDRgtCw0LHQu9C4XG5cbiAgICBsZXQgdGFibGVEYXRhID0gW11cbiAgICBsZXQgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsocHJvbW9TdGFydERhdGUsIHdlZWtEdXJhdGlvbikgfHwgMTtcblxuICAgIGlmIChhY3RpdmVXZWVrID4gMykgYWN0aXZlV2VlayA9IDNcblxuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHRleHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dEJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheS1idG4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZU90aGVyJyksXG4gICAgICAgIHRhYmxlVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy13ZWVrJylcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJ1a1wiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgfHwgXCJ1a1wiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuXG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgLnRoZW4obG9hZFVzZXJzKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSA9PT0gYWN0aXZlV2VlayAtIDEpIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKE51bWJlcihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YWJXZWVrID0gZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh0YWJXZWVrLCB0YWJsZURhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBzaG93SXRlbXNPblNjcm9sbChcIi5naWRlX19ibG9ja1wiKVxuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWRlX19kZXRhaWxzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ0blwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwQnlBdHRyKCdnaWRlSW5mbycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd3JhcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5Qb3B1cEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJbnNpZGUgPSBvcGVuUG9wdXBFbCA/IG9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5Qb3B1cEVsICYmICFpc0luc2lkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9fY2xvc2UnKS5mb3JFYWNoKGNsb3NlQnRuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBbGxQb3B1cHMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuYXV0aE1lcyBvZiB1bmF1dGhNc2dzKSB7XG4gICAgICAgICAgICAgICAgdW5hdXRoTWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmVyaWZpZWRVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcmVkaXJlY3RCdG4gb2YgcmVkaXJlY3RCdG5zKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vla051bSwgdXNlckRhdGEpIHtcbiAgICAgICAgd2Vla051bSA9IE51bWJlcih3ZWVrTnVtKTtcbiAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YS5maW5kKHdlZWsgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWsud2VlayA9PT0gd2Vla051bVxuICAgICAgICB9KS51c2VycztcblxuICAgICAgICBsZXQgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZCk7XG5cbiAgICAgICAgaWYodXNlcklkICYmICFjdXJyZW50VXNlciAmJiBpc1ZlcmlmaWVkVXNlcil7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IFsuLi51c2VyRGF0YSwge3VzZXJpZDogdXNlcklkLCBwb2ludHM6IDB9XVxuICAgICAgICAgICAgY3VycmVudFVzZXIgPSB1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IHVzZXJJZClcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VyRGF0YSwgdXNlcklkLCB3ZWVrTnVtLCBjdXJyZW50VXNlciwgaXNWZXJpZmllZFVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2VlaywgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKSB7XG5cbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAyMCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCA4KS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghY3VycmVudFVzZXIgfHwgaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgcmVzdWx0c1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3dpdGhvdXRZb3UnKTtcbiAgICAgICAgICAgIHJldHVybjsgLy8g0Y/QutGJ0L4g0Y7Qt9C10YAg0L3QtSDQsiDRgtCw0LHQu9C40YbRliwgcmVzdWx0c1RhYmxlT3RoZXIg0L3QtSDRgNC10L3QtNC10YDQuNC80L5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdHNUYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCd3aXRob3V0WW91Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQrtC30LXRgCDQvdC1INGDINGC0L7Qvy04ICjQvNGW0YHRhtC1IOKJpSA5KVxuICAgICAgICBpZiAoY3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcblxuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7TnVtYmVyKHVzZXJEYXRhLnBvaW50cykudG9GaXhlZCgyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAvLyAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAvLyAgICAgaWYgKGluZGV4ICE9PSAxMCAmJiB1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgIC8vICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAvLyAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgY29uc3QgaXNNYWluVGFibGUgPSB0YWJsZSA9PT0gcmVzdWx0c1RhYmxlO1xuXG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyICYmICFpc01haW5UYWJsZSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAvLyAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAvLyAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgLy8gICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgIC8vICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplNGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxOSkgcmV0dXJuIGBwcml6ZTVgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDIwKSByZXR1cm4gYHByaXplNmA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyOSkgcmV0dXJuIGBwcml6ZTdgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDMwKSByZXR1cm4gYHByaXplOGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzOSkgcmV0dXJuIGBwcml6ZTlgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDQwKSByZXR1cm4gYHByaXplMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNDkpIHJldHVybiBgcHJpemUxMWA7XG4gICAgICAgIGlmIChwbGFjZSA9PT0gNTApIHJldHVybiBgcHJpemUxMmA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA2OSkgcmV0dXJuIGBwcml6ZTEzYDtcbiAgICAgICAgaWYgKHBsYWNlID09PSA3MCkgcmV0dXJuIGBwcml6ZTE0YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDg5KSByZXR1cm4gYHByaXplMTVgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDkwKSByZXR1cm4gYHByaXplMTZgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplMTdgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXModGV4dEJ0biwgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHRleHRCdG4sIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyh0ZXh0QnRuLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHRleHRCdG4sIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHRleHRCdG4sIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRVc2VycyhcIj9ub2NhY2hlPTFcIikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZFVzZXJzKHBhcmFtZXRyKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XG4gICAgICAgIHRhYmxlRGF0YS5sZW5ndGggPSAwXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGVyaW9kQW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHdlZWsgPSBpOyAvLyDQsNCx0L4g0LHRg9C00Ywt0Y/QutCwINC70L7Qs9GW0LrQsCDQtNC70Y8g0YTQvtGA0LzRg9Cy0LDQvdC90Y8g0L3QvtC80LXRgNCwINGC0LjQttC90Y9cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9JHtwYXJhbWV0ciA/IHBhcmFtZXRyIDogXCJcIn1gKS50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGFibGVEYXRhLnB1c2goeyB3ZWVrLCB1c2VyczogZGF0YSB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVxdWVzdHMpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHVzZXJzOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0l0ZW1zT25TY3JvbGwoaXRlbUNsYXNzKSB7XG4gICAgICAgIGNvbnN0IEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaXRlbUNsYXNzKTtcbiAgICAgICAgaWYgKCFCbG9ja3MubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzX19kZWNvci1sZWZ0XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHNfX2RlY29yLXJpZ2h0XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByaXplX19kZWNvci1sZWZ0XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByaXplX19kZWNvci1yaWdodFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5ob29kaWVcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucHJpemVfX2luZm9cIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuZ2lkZV9fbWFzY2tcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTFcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTJcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTNcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTRcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTVcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2RlY29yLTZcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4zXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEJsb2Nrcy5mb3JFYWNoKGl0ZW0gPT4gb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXknKTtcbiAgICB9XG5cbiAgICBzaG93SXRlbXNPblNjcm9sbChcIi5yZXN1bHRzXCIpXG4gICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIuZ2lkZVwiKVxuICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLnByaXplXCIpXG4gICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIudGFibGVcIilcblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KSAvLyDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvLyBURVNUXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBjb25zdCBiZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iZXQtb25saW5lXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTU1MzAwNlwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgYmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdW5hdXRoTXNncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBoYXNlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFjdGl2ZVdlZWsgPSAyXG4gICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKCh0YWIsIGkpID0+e1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYoaSA9PT0gYWN0aXZlV2VlayAtIDEpIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgaWYoTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikpe1xuICAgICAgICAgICAgICAgIGlmKE51bWJlcihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxldCB0YWJXZWVrID0gZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICByZW5kZXJVc2Vycyh0YWJXZWVrKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSk7XG5cbn0pKCk7XG5cblxuIl19
