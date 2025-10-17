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
  var locale = "ua";
  if (hrLeng) locale = 'ua';
  if (enLeng) locale = 'en';
  var debug = true;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
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
    for (var _i = 0, _arr = ['hr', 'en']; _i < _arr.length; _i++) {
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

  // loadTranslations()
  //     .then(init) // запуск ініту сторінки

  // TEST

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
  document.addEventListener('DOMContentLoaded', function () {
    var img = document.querySelector('.gide__title-img');
    var flare = document.querySelector('.gide__title-flare');
    if (img && flare) {
      var setMask = function setMask() {
        var src = img.currentSrc || img.src;
        flare.style.webkitMaskImage = "url('".concat(src, "')");
        flare.style.maskImage = "url('".concat(src, "')");
      };
      setMask();

      // якщо змінюється розмір вікна — можливо, переключиться srcset
      window.addEventListener('resize', setMask);
    }
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiaXNWZXJpZmllZFVzZXIiLCJwZXJpb2RBbW91bnQiLCJ0YWJsZURhdGEiLCJhY3RpdmVXZWVrIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInRleHRCdG4iLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInRhYmxlVGFicyIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJsb2FkVXNlcnMiLCJzZXRUaW1lb3V0IiwidGFiIiwicmVuZGVyVXNlcnMiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGFydGljaXBhdGUiLCJOdW1iZXIiLCJnZXRBdHRyaWJ1dGUiLCJwb2ludGVyRXZlbnRzIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJjb250YWlucyIsInRhYldlZWsiLCJzaG93SXRlbXNPblNjcm9sbCIsImxvZyIsIm9wZW5Qb3B1cEJ5QXR0ciIsIm9wZW5Qb3B1cEVsIiwiaXNJbnNpZGUiLCJjbG9zZUFsbFBvcHVwcyIsImNsb3NlQnRuIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidW5hdXRoTWVzIiwidXNlcmlkIiwiaXRlbSIsInJlZGlyZWN0QnRuIiwicGFydGljaXBhdGVCdG4iLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsImZpbmQiLCJ3ZWVrIiwidXNlcnMiLCJjdXJyZW50VXNlciIsInVzZXIiLCJwb2ludHMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwidG9wVXNlcnMiLCJzbGljZSIsImlzVG9wQ3VycmVudFVzZXIiLCJzb21lIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwidG9GaXhlZCIsImFwcGVuZCIsImlzTWFpblRhYmxlIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwicGxhY2UiLCJwYXJhbXMiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwicmVxIiwiZGF0YSIsInB1c2giLCJhbGwiLCJpdGVtQ2xhc3MiLCJCbG9ja3MiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJwb3B1cEF0dHIiLCJhbGxQb3B1cHMiLCJwIiwidGFyZ2V0UG9wdXAiLCJpbWciLCJmbGFyZSIsInNldE1hc2siLCJzcmMiLCJjdXJyZW50U3JjIiwid2Via2l0TWFza0ltYWdlIiwibWFza0ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBRVQsSUFBTUEsTUFBTSxHQUFHLDBDQUEwQztFQUV6RCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFB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QkEsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0VBRTNCN0UsUUFBUSxDQUFDbUUsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtJQUNoRCxJQUFNcUgsR0FBRyxHQUFHeEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDdEQsSUFBTXdMLEtBQUssR0FBR3pMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBRTFELElBQUl1TCxHQUFHLElBQUlDLEtBQUssRUFBRTtNQUNkLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7UUFDbEIsSUFBTUMsR0FBRyxHQUFHSCxHQUFHLENBQUNJLFVBQVUsSUFBSUosR0FBRyxDQUFDRyxHQUFHO1FBQ3JDRixLQUFLLENBQUMzSSxLQUFLLENBQUMrSSxlQUFlLGtCQUFXRixHQUFHLE9BQUk7UUFDN0NGLEtBQUssQ0FBQzNJLEtBQUssQ0FBQ2dKLFNBQVMsa0JBQVdILEdBQUcsT0FBSTtNQUMzQyxDQUFDO01BRURELE9BQU8sRUFBRTs7TUFFVDtNQUNBMUksTUFBTSxDQUFDbUIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFdUgsT0FBTyxDQUFDO0lBQzlDO0VBQ0osQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9ob2NrZXlfdW5pdmVyc2UnXG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgd2Vla0RhdGVzID0gW107XG5cbiAgICAgICAgY29uc3QgRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgY29uc3QgV2VlayA9IHdlZWtEdXJhdGlvbiAqIERheTtcblxuICAgICAgICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+XG4gICAgICAgICAgICBgJHtkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX0uJHsoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgICAgICBjb25zdCBjYWxjdWxhdGVXZWVrUGVyaW9kID0gKHdlZWtJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFzZVN0YXJ0ID0gcHJvbW9TdGFydERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShiYXNlU3RhcnQgKyB3ZWVrSW5kZXggKiBXZWVrKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAod2Vla0R1cmF0aW9uICogRGF5IC0gMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3RpdmVXZWVrSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LLRltGA0LrQsCDQv9C+0YLQvtGH0L3QvtCz0L4g0YLQuNC20L3Rj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgLy8g0J7QsdC80LXQttGD0ZTQvNC+IDEwINGC0LjQttC90Y/QvNC4ICjRj9C60YnQviDQv9C+0YLRgNGW0LHQvdC+INCx0ZbQu9GM0YjQtSwg0L/RgNC+0YHRgtC+INC30LzRltC90ZbRgtGMINC70ZbRh9C40LvRjNC90LjQuilcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gY2FsY3VsYXRlV2Vla1BlcmlvZChpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVXZWVrSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0xMC0yM1QwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSA3O1xuXG4gICAgbGV0IGlzVmVyaWZpZWRVc2VyID0gZmFsc2U7XG5cbiAgICBsZXQgcGVyaW9kQW1vdW50ID0gMyAvLyDQutGW0LvRjNC60ZbRgdGC0Ywg0L/QtdGA0ZbQvtC00ZbQsiDQsiDQsNC60YbRltGXLCDRgtGA0LXQsdCwINC00LvRjyDQutC10YjRg9Cy0LDQvdC90Y8g0ZbQvdGE0Lgg0Lcg0YLQsNCx0LvQuFxuXG4gICAgbGV0IHRhYmxlRGF0YSA9IFtdXG4gICAgbGV0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG5cbiAgICBpZiAoYWN0aXZlV2VlayA+IDMpIGFjdGl2ZVdlZWsgPSAzXG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICB0ZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRCdG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGVPdGhlcicpLFxuICAgICAgICB0YWJsZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtd2VlaycpXG5cbiAgICBjb25zdCBockxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHJMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9IFwidWFcIlxuXG4gICAgaWYgKGhyTGVuZykgbG9jYWxlID0gJ3VhJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcblxuICAgIGxldCB1c2VySWQgPSBudWxsO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIC50aGVuKGxvYWRVc2VycylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAzMDApO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLXdlZWtcIikuZm9yRWFjaCgodGFiLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IGFjdGl2ZVdlZWsgLSAxKSB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLXdlZWtcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtd2Vla1wiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy13ZWVrXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaywgdGFibGVEYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIuZ2lkZV9fYmxvY2tcIilcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2lkZV9fZGV0YWlsc0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJidG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cignZ2lkZUluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuUG9wdXBFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5zaWRlID0gb3BlblBvcHVwRWwgPyBvcGVuUG9wdXBFbC5jb250YWlucyhlLnRhcmdldCkgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuUG9wdXBFbCAmJiAhaXNJbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlJykuZm9yRWFjaChjbG9zZUJ0biA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWxsUG9wdXBzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEuZmluZCh3ZWVrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLndlZWsgPT09IHdlZWtOdW1cbiAgICAgICAgfSkudXNlcnM7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgICAgIGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpXG4gICAgICAgIH1cblxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcikge1xuXG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgMjApO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgOCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyIHx8IGlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdHNUYWJsZS5jbGFzc0xpc3QuYWRkKCd3aXRob3V0WW91Jyk7XG4gICAgICAgICAgICByZXR1cm47IC8vINGP0LrRidC+INGO0LfQtdGAINC90LUg0LIg0YLQsNCx0LvQuNGG0ZYsIHJlc3VsdHNUYWJsZU90aGVyINC90LUg0YDQtdC90LTQtdGA0LjQvNC+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRzVGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnd2l0aG91dFlvdScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0K7Qt9C10YAg0L3QtSDRgyDRgtC+0L8tOCAo0LzRltGB0YbQtSDiiaUgOSlcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG5cbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke051bWJlcih1c2VyRGF0YS5wb2ludHMpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgLy8gICAgIGlmIChpbmRleCAhPT0gMTAgJiYgdXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAvLyAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAvLyAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgLy8gICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IGlzTWFpblRhYmxlID0gdGFibGUgPT09IHJlc3VsdHNUYWJsZTtcblxuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlciAmJiAhaXNNYWluVGFibGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgLy8gICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgIC8vICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAvLyAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemUke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZTRgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTkpIHJldHVybiBgcHJpemU1YDtcbiAgICAgICAgaWYgKHBsYWNlID09PSAyMCkgcmV0dXJuIGBwcml6ZTZgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjkpIHJldHVybiBgcHJpemU3YDtcbiAgICAgICAgaWYgKHBsYWNlID09PSAzMCkgcmV0dXJuIGBwcml6ZThgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMzkpIHJldHVybiBgcHJpemU5YDtcbiAgICAgICAgaWYgKHBsYWNlID09PSA0MCkgcmV0dXJuIGBwcml6ZTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDQ5KSByZXR1cm4gYHByaXplMTFgO1xuICAgICAgICBpZiAocGxhY2UgPT09IDUwKSByZXR1cm4gYHByaXplMTJgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNjkpIHJldHVybiBgcHJpemUxM2A7XG4gICAgICAgIGlmIChwbGFjZSA9PT0gNzApIHJldHVybiBgcHJpemUxNGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA4OSkgcmV0dXJuIGBwcml6ZTE1YDtcbiAgICAgICAgaWYgKHBsYWNlID09PSA5MCkgcmV0dXJuIGBwcml6ZTE2YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZTE3YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHRleHRCdG4sIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyh0ZXh0QnRuLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXModGV4dEJ0biwgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Nlcyh0ZXh0QnRuLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3Nlcyh0ZXh0QnRuLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgICAgICBsb2FkVXNlcnMoXCI/bm9jYWNoZT0xXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclVzZXJzKGFjdGl2ZVdlZWssIHRhYmxlRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRVc2VycyhwYXJhbWV0cikge1xuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0YWJsZURhdGEubGVuZ3RoID0gMFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBlcmlvZEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWVrID0gaTsgLy8g0LDQsdC+INCx0YPQtNGMLdGP0LrQsCDQu9C+0LPRltC60LAg0LTQu9GPINGE0L7RgNC80YPQstCw0L3QvdGPINC90L7QvNC10YDQsCDRgtC40LbQvdGPXG4gICAgICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfSR7cGFyYW1ldHIgPyBwYXJhbWV0ciA6IFwiXCJ9YCkudGhlbihkYXRhID0+IHtcblxuICAgICAgICAgICAgICAgIHRhYmxlRGF0YS5wdXNoKHsgd2VlaywgdXNlcnM6IGRhdGEgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdHMucHVzaChyZXEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlcXVlc3RzKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB1c2VyczonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dJdGVtc09uU2Nyb2xsKGl0ZW1DbGFzcykge1xuICAgICAgICBjb25zdCBCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGl0ZW1DbGFzcyk7XG4gICAgICAgIGlmICghQmxvY2tzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC4zKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c19fZGVjb3ItbGVmdFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzX19kZWNvci1yaWdodFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5wcml6ZV9fZGVjb3ItbGVmdFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5wcml6ZV9fZGVjb3ItcmlnaHRcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuaG9vZGllXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnByaXplX19pbmZvXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmdpZGVfX21hc2NrXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci0xXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci0yXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci0zXCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci00XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci01XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19kZWNvci02XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuM1xuICAgICAgICB9KTtcblxuICAgICAgICBCbG9ja3MuZm9yRWFjaChpdGVtID0+IG9ic2VydmVyLm9ic2VydmUoaXRlbSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Qb3B1cEJ5QXR0cihwb3B1cEF0dHIpIHtcbiAgICAgICAgY29uc3QgYWxsUG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XG4gICAgICAgIGFsbFBvcHVwcy5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICBjb25zdCB0YXJnZXRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgICAgIGlmICh0YXJnZXRQb3B1cCkge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuICAgICAgICAgICAgdGFyZ2V0UG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd3JhcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsUG9wdXBzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKS5mb3JFYWNoKHAgPT4gcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpO1xuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5Jyk7XG4gICAgfVxuXG4gICAgLy8gbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgLy8gICAgIC50aGVuKGluaXQpIC8vINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuICAgIC8vIFRFU1RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWRlX19kZXRhaWxzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnRuXCIpXG4gICAgICAgIG9wZW5Qb3B1cEJ5QXR0cignZ2lkZUluZm8nKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBvcGVuUG9wdXBFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgaXNJbnNpZGUgPSBvcGVuUG9wdXBFbCA/IG9wZW5Qb3B1cEVsLmNvbnRhaW5zKGUudGFyZ2V0KSA6IGZhbHNlO1xuICAgICAgICBpZiAob3BlblBvcHVwRWwgJiYgIWlzSW5zaWRlKSB7XG4gICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlJykuZm9yRWFjaChjbG9zZUJ0biA9PiB7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VBbGxQb3B1cHMpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb3BlblBvcHVwQnlBdHRyKHBvcHVwQXR0cikge1xuICAgICAgICBjb25zdCBhbGxQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAnKTtcbiAgICAgICAgYWxsUG9wdXBzLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgaWYgKHRhcmdldFBvcHVwKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgICAgICB0YXJnZXRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13cmFwJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxQb3B1cHMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpLmZvckVhY2gocCA9PiBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKS5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXknKTtcbiAgICB9XG5cbiAgICBzaG93SXRlbXNPblNjcm9sbChcIi5yZXN1bHRzXCIpXG4gICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIuZ2lkZVwiKVxuICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLnByaXplXCIpXG4gICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIudGFibGVcIilcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naWRlX190aXRsZS1pbWcnKTtcbiAgICAgICAgY29uc3QgZmxhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2lkZV9fdGl0bGUtZmxhcmUnKTtcblxuICAgICAgICBpZiAoaW1nICYmIGZsYXJlKSB7XG4gICAgICAgICAgICBjb25zdCBzZXRNYXNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGltZy5jdXJyZW50U3JjIHx8IGltZy5zcmM7XG4gICAgICAgICAgICAgICAgZmxhcmUuc3R5bGUud2Via2l0TWFza0ltYWdlID0gYHVybCgnJHtzcmN9JylgO1xuICAgICAgICAgICAgICAgIGZsYXJlLnN0eWxlLm1hc2tJbWFnZSA9IGB1cmwoJyR7c3JjfScpYDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNldE1hc2soKTtcblxuICAgICAgICAgICAgLy8g0Y/QutGJ0L4g0LfQvNGW0L3RjtGU0YLRjNGB0Y8g0YDQvtC30LzRltGAINCy0ZbQutC90LAg4oCUINC80L7QttC70LjQstC+LCDQv9C10YDQtdC60LvRjtGH0LjRgtGM0YHRjyBzcmNzZXRcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRNYXNrKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KSgpO1xuXG5cbiJdfQ==
