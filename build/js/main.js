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
  var stages = [{
    start: new Date("2025-10-23T12:00:00"),
    end: new Date("2025-11-06T23:59:59")
  },
  // 1 етап
  {
    start: new Date("2025-11-17T00:00:00"),
    end: new Date("2025-12-07T23:59:59")
  },
  // 2 етап
  {
    start: new Date("2025-12-08T00:00:00"),
    end: new Date("2025-12-31T23:59:59")
  } // 3 етап
  ];

  var getActiveWeek = function getActiveWeek() {
    var currentDate = new Date();
    var activeStageIndex = 1;
    stages.forEach(function (stage, i) {
      if (currentDate >= stage.start && currentDate <= stage.end) {
        activeStageIndex = i + 1; // нумерація з 1
      }
    });

    for (var i = 0; i < stages.length; i++) {
      var stage = stages[i];
      if (currentDate >= stage.start && currentDate <= stage.end) {
        return i + 1;
      }
      if (currentDate < stage.start) {
        return i === 0 ? 1 : i;
      }
    }
    return stages.length;
  };
  var isVerifiedUser = false;
  var periodAmount = 3; // кількість періодів в акції, треба для кешування інфи з табли

  var tableData = [];
  var activeWeek = getActiveWeek() || 1;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    textBtn = document.querySelectorAll('.textBtn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    loader = document.querySelector(".spinner-overlay"),
    resultsTable = document.querySelector('#table'),
    resultsTableOther = document.querySelector('#tableOther'),
    tableTabs = document.querySelectorAll('.table__tabs-item');
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
              checkUserAuth().then(loadUsers).then(function () {
                setTimeout(hideLoader, 300);
                document.querySelectorAll(".table__tabs-item").forEach(function (tab) {
                  tab.classList.remove('active');
                  if (parseInt(tab.dataset.week) === activeWeek) {
                    tab.classList.add('active');
                  }
                });
                renderUsers(activeWeek, tableData);
                // renderHoodieWinner(activeWeek, tableData);
                participateBtns.forEach(function (btn) {
                  return btn.addEventListener('click', participate);
                });
                tableTabs.forEach(function (tab) {
                  if (Number(tab.getAttribute("data-week")) > activeWeek) {
                    tab.style.pointerEvents = "none";
                    tab.classList.add('lock');
                  } else {
                    tab.style.pointerEvents = "initial";
                  }
                });
                document.addEventListener("click", function (e) {
                  var clickedTab = e.target.closest(".table__tabs-item");
                  if (!clickedTab) return;
                  var currentTable = clickedTab.closest(".table");
                  var parentBlock = clickedTab.closest(".results, .prize"); // визначаємо, де знаходиться таблиця

                  if (clickedTab.classList.contains("active")) return;
                  if (Number(clickedTab.dataset.week) > activeWeek) return;
                  clickedTab.style.pointerEvents = "initial";
                  currentTable.querySelectorAll(".table__tabs-item").forEach(function (tab) {
                    tab.classList.remove("active");
                  });
                  clickedTab.classList.add("active");
                  var tabWeek = clickedTab.dataset.week;
                  if (parentBlock && parentBlock.classList.contains("results")) {
                    renderUsers(tabWeek, tableData);
                  } else if (parentBlock && parentBlock.classList.contains("prize")) {
                    showWinnerHoodie();
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
      isVerifiedUser = false;
      displayUser(currentUser, true, resultsTableOther, users, true, week);
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
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                 ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
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
  function getPrizeTranslationKey(place) {
    if (place >= 1 && place <= 12) return "prize_".concat(place);
    if (place >= 13 && place <= 16) return "prize_13-16";
    if (place >= 17 && place <= 19) return "prize_17-19";
    if (place >= 20 && place <= 29) return "prize_20-29";
    if (place >= 30 && place <= 40) return "prize_30-40";
    if (place >= 41 && place <= 80) return "prize_41-80";
    if (place >= 81 && place <= 113) return "prize_81-113";
    if (place >= 114 && place <= 130) return "prize_114-130";
    if (place >= 131 && place <= 150) return "prize_131-150";
    if (place >= 151 && place <= 170) return "prize_151-170";
    if (place >= 171 && place <= 200) return "prize_171-200";
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
  function renderHoodieWinner(weekNum, userData) {
    weekNum = Number(weekNum);

    // шукаємо об’єкт з потрібним тижнем
    var weekData = userData.find(function (week) {
      return week.week === weekNum;
    });
    if (!weekData || !weekData.users) return;
    var users = weekData.users;

    // показуємо переможця або стан очікування
    displayHoodieWinner(users);
  }
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
        renderUsers(tabWeek);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwic3RhZ2VzIiwic3RhcnQiLCJEYXRlIiwiZW5kIiwiZ2V0QWN0aXZlV2VlayIsImN1cnJlbnREYXRlIiwiYWN0aXZlU3RhZ2VJbmRleCIsImZvckVhY2giLCJzdGFnZSIsImkiLCJsZW5ndGgiLCJpc1ZlcmlmaWVkVXNlciIsInBlcmlvZEFtb3VudCIsInRhYmxlRGF0YSIsImFjdGl2ZVdlZWsiLCJtYWluUGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuYXV0aE1zZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFydGljaXBhdGVCdG5zIiwidGV4dEJ0biIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwidGFibGVUYWJzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwiTnVtYmVyIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwibG9hZFVzZXJzIiwic2V0VGltZW91dCIsInRhYiIsInBhcnNlSW50IiwiZGF0YXNldCIsIndlZWsiLCJyZW5kZXJVc2VycyIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNpcGF0ZSIsImdldEF0dHJpYnV0ZSIsInBvaW50ZXJFdmVudHMiLCJlIiwiY2xpY2tlZFRhYiIsInRhcmdldCIsImNsb3Nlc3QiLCJjdXJyZW50VGFibGUiLCJwYXJlbnRCbG9jayIsImNvbnRhaW5zIiwidGFiV2VlayIsInNob3dXaW5uZXJIb29kaWUiLCJzaG93SXRlbXNPblNjcm9sbCIsImxvZyIsIm9wZW5Qb3B1cEJ5QXR0ciIsIm9wZW5Qb3B1cEVsIiwiaXNJbnNpZGUiLCJjbG9zZUFsbFBvcHVwcyIsImNsb3NlQnRuIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidW5hdXRoTWVzIiwidXNlcmlkIiwiaXRlbSIsInJlZGlyZWN0QnRuIiwicGFydGljaXBhdGVCdG4iLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsIndlZWtOdW0iLCJ1c2VyRGF0YSIsImZpbmQiLCJ1c2VycyIsImN1cnJlbnRVc2VyIiwidXNlciIsInBvaW50cyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93Iiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsImFwcGVuZCIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInRvU3RyaW5nIiwicGxhY2UiLCJwYXJhbXMiLCJwYXJhbWV0ciIsInJlcXVlc3RzIiwicmVxIiwiZGF0YSIsInB1c2giLCJhbGwiLCJpdGVtQ2xhc3MiLCJCbG9ja3MiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJwb3B1cEF0dHIiLCJhbGxQb3B1cHMiLCJwIiwidGFyZ2V0UG9wdXAiLCJyZW5kZXJIb29kaWVXaW5uZXIiLCJ3ZWVrRGF0YSIsImRpc3BsYXlIb29kaWVXaW5uZXIiLCJob29kaWVUYWJsZUJvZHkiLCJ3aW5uZXJVc2VyIiwid2lubmVyIiwiaG9vZGllUm93IiwiY29lZkluIiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwiYmV0QnRuIiwiaXNXYWl0aW5nIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEs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QVIsU0FBUyxDQUFDbkwsU0FBUyxDQUFDMEMsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUNyQ3lJLFNBQVMsQ0FBQzVLLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztNQUMzQzRLLFNBQVMsQ0FBQzlLLFNBQVMsNllBUzFCO0lBQ0c7RUFDSixDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2hvY2tleV91bml2ZXJzZSdcblxuICAgIGNvbnN0IHN0YWdlcyA9IFtcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoXCIyMDI1LTEwLTIzVDEyOjAwOjAwXCIpLCBlbmQ6IG5ldyBEYXRlKFwiMjAyNS0xMS0wNlQyMzo1OTo1OVwiKSB9LCAvLyAxINC10YLQsNC/XG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKFwiMjAyNS0xMS0xN1QwMDowMDowMFwiKSwgZW5kOiBuZXcgRGF0ZShcIjIwMjUtMTItMDdUMjM6NTk6NTlcIikgfSwgLy8gMiDQtdGC0LDQv1xuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZShcIjIwMjUtMTItMDhUMDA6MDA6MDBcIiksIGVuZDogbmV3IERhdGUoXCIyMDI1LTEyLTMxVDIzOjU5OjU5XCIpIH0gLy8gMyDQtdGC0LDQv1xuICAgIF07XG5cbiAgICBjb25zdCBnZXRBY3RpdmVXZWVrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgbGV0IGFjdGl2ZVN0YWdlSW5kZXggPSAxO1xuXG4gICAgICAgIHN0YWdlcy5mb3JFYWNoKChzdGFnZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YWdlLnN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IHN0YWdlLmVuZCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVN0YWdlSW5kZXggPSBpICsgMTsgLy8g0L3Rg9C80LXRgNCw0YbRltGPINC3IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhZ2Uuc3RhcnQgJiYgY3VycmVudERhdGUgPD0gc3RhZ2UuZW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPCBzdGFnZS5zdGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpID09PSAwID8gMSA6IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhZ2VzLmxlbmd0aDtcbiAgICB9O1xuXG5cbiAgICBsZXQgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcblxuICAgIGxldCBwZXJpb2RBbW91bnQgPSAzIC8vINC60ZbQu9GM0LrRltGB0YLRjCDQv9C10YDRltC+0LTRltCyINCyINCw0LrRhtGW0ZcsINGC0YDQtdCx0LAg0LTQu9GPINC60LXRiNGD0LLQsNC90L3RjyDRltC90YTQuCDQtyDRgtCw0LHQu9C4XG5cbiAgICBsZXQgdGFibGVEYXRhID0gW11cbiAgICBsZXQgYWN0aXZlV2VlayA9IGdldEFjdGl2ZVdlZWsoKSB8fCAxO1xuXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgdGV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0QnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlT3RoZXInKSxcbiAgICAgICAgdGFibGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWl0ZW0nKVxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcInVrXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSB8fCBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuXG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgLnRoZW4obG9hZFVzZXJzKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGFiLmRhdGFzZXQud2VlaykgPT09IGFjdGl2ZVdlZWspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJIb29kaWVXaW5uZXIoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gYWN0aXZlV2Vlayl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZFRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2xpY2tlZFRhYikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFibGUgPSBjbGlja2VkVGFiLmNsb3Nlc3QoXCIudGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRCbG9jayA9IGNsaWNrZWRUYWIuY2xvc2VzdChcIi5yZXN1bHRzLCAucHJpemVcIik7IC8vINCy0LjQt9C90LDRh9Cw0ZTQvNC+LCDQtNC1INC30L3QsNGF0L7QtNC40YLRjNGB0Y8g0YLQsNCx0LvQuNGG0Y9cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrZWRUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGNsaWNrZWRUYWIuZGF0YXNldC53ZWVrKSA+IGFjdGl2ZVdlZWspIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX190YWJzLWl0ZW1cIikuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFiV2VlayA9IGNsaWNrZWRUYWIuZGF0YXNldC53ZWVrO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRCbG9jayAmJiBwYXJlbnRCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoXCJyZXN1bHRzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50QmxvY2sgJiYgcGFyZW50QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpemVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2lubmVySG9vZGllKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIuZ2lkZV9fYmxvY2tcIilcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2lkZV9fZGV0YWlsc0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJidG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cEJ5QXR0cignZ2lkZUluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuUG9wdXBFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5zaWRlID0gb3BlblBvcHVwRWwgPyBvcGVuUG9wdXBFbC5jb250YWlucyhlLnRhcmdldCkgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuUG9wdXBFbCAmJiAhaXNJbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbFBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlJykuZm9yRWFjaChjbG9zZUJ0biA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWxsUG9wdXBzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWZXJpZmllZFVzZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJlZGlyZWN0QnRuIG9mIHJlZGlyZWN0QnRucykge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHBhcnRpY2lwYXRlQnRuIG9mIHBhcnRpY2lwYXRlQnRucykge1xuICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWtOdW0sIHVzZXJEYXRhKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG4gICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGEuZmluZCh3ZWVrID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrLndlZWsgPT09IHdlZWtOdW1cbiAgICAgICAgfSkudXNlcnM7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpO1xuXG4gICAgICAgIGlmKHVzZXJJZCAmJiAhY3VycmVudFVzZXIgJiYgaXNWZXJpZmllZFVzZXIpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBbLi4udXNlckRhdGEsIHt1c2VyaWQ6IHVzZXJJZCwgcG9pbnRzOiAwfV1cbiAgICAgICAgICAgIGN1cnJlbnRVc2VyID0gdXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpXG4gICAgICAgIH1cblxuICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlckRhdGEsIHVzZXJJZCwgd2Vla051bSwgY3VycmVudFVzZXIsIGlzVmVyaWZpZWRVc2VyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWssIGN1cnJlbnRVc2VyLCBpc1ZlcmlmaWVkVXNlcikge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhY3VycmVudFVzZXIgfHwgaXNUb3BDdXJyZW50VXNlciA/IDExIDogMTA7XG5cbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG5cbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGlzVmVyaWZpZWRVc2VyICYmICFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgdHJ1ZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBpc1ZlcmlmaWVkVXNlciA9IGZhbHNlO1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgdHJ1ZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJEYXRhLnBvaW50c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMTAgJiYgdXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlKSB7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxICYmIHBsYWNlIDw9IDEyKSByZXR1cm4gYHByaXplXyR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlID49IDEzICYmIHBsYWNlIDw9IDE2KSByZXR1cm4gYHByaXplXzEzLTE2YDtcbiAgICAgICAgaWYgKHBsYWNlID49IDE3ICYmIHBsYWNlIDw9IDE5KSByZXR1cm4gYHByaXplXzE3LTE5YDtcbiAgICAgICAgaWYgKHBsYWNlID49IDIwICYmIHBsYWNlIDw9IDI5KSByZXR1cm4gYHByaXplXzIwLTI5YDtcbiAgICAgICAgaWYgKHBsYWNlID49IDMwICYmIHBsYWNlIDw9IDQwKSByZXR1cm4gYHByaXplXzMwLTQwYDtcbiAgICAgICAgaWYgKHBsYWNlID49IDQxICYmIHBsYWNlIDw9IDgwKSByZXR1cm4gYHByaXplXzQxLTgwYDtcbiAgICAgICAgaWYgKHBsYWNlID49IDgxICYmIHBsYWNlIDw9IDExMykgcmV0dXJuIGBwcml6ZV84MS0xMTNgO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTE0ICYmIHBsYWNlIDw9IDEzMCkgcmV0dXJuIGBwcml6ZV8xMTQtMTMwYDtcbiAgICAgICAgaWYgKHBsYWNlID49IDEzMSAmJiBwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfMTMxLTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA+PSAxNTEgJiYgcGxhY2UgPD0gMTcwKSByZXR1cm4gYHByaXplXzE1MS0xNzBgO1xuICAgICAgICBpZiAocGxhY2UgPj0gMTcxICYmIHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8xNzEtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICAgICAgbG9hZFVzZXJzKFwiP25vY2FjaGU9MVwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJVc2VycyhhY3RpdmVXZWVrLCB0YWJsZURhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkVXNlcnMocGFyYW1ldHIpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBbXTtcbiAgICAgICAgdGFibGVEYXRhLmxlbmd0aCA9IDBcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZXJpb2RBbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgd2VlayA9IGk7IC8vINCw0LHQviDQsdGD0LTRjC3Rj9C60LAg0LvQvtCz0ZbQutCwINC00LvRjyDRhNC+0YDQvNGD0LLQsNC90L3RjyDQvdC+0LzQtdGA0LAg0YLQuNC20L3Rj1xuICAgICAgICAgICAgY29uc3QgcmVxID0gcmVxdWVzdChgL3VzZXJzLyR7d2Vla30ke3BhcmFtZXRyID8gcGFyYW1ldHIgOiBcIlwifWApLnRoZW4oZGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0YWJsZURhdGEucHVzaCh7IHdlZWssIHVzZXJzOiBkYXRhIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdXNlcnM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SXRlbXNPblNjcm9sbChpdGVtQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpdGVtQ2xhc3MpO1xuICAgICAgICBpZiAoIUJsb2Nrcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGVudHJ5LmludGVyc2VjdGlvblJhdGlvID49IDAuMykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHNfX2RlY29yLWxlZnRcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c19fZGVjb3ItcmlnaHRcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucHJpemVfX2RlY29yLWxlZnRcIik/LmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucHJpemVfX2RlY29yLXJpZ2h0XCIpPy5jbGFzc0xpc3QuYWRkKFwic2hvd0l0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmhvb2RpZVwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5wcml6ZV9faW5mb1wiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi5naWRlX19tYXNja1wiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fZGVjb3ItMVwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fZGVjb3ItMlwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fZGVjb3ItM1wiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fZGVjb3ItNFwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fZGVjb3ItNVwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fZGVjb3ItNlwiKT8uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQmxvY2tzLmZvckVhY2goaXRlbSA9PiBvYnNlcnZlci5vYnNlcnZlKGl0ZW0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuUG9wdXBCeUF0dHIocG9wdXBBdHRyKSB7XG4gICAgICAgIGNvbnN0IGFsbFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpO1xuICAgICAgICBhbGxQb3B1cHMuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgICAgICBpZiAodGFyZ2V0UG9wdXApIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcbiAgICAgICAgICAgIHRhcmdldFBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdyYXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUFsbFBvcHVwcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJykuZm9yRWFjaChwID0+IHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd3JhcCcpLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHknKTtcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheScpO1xuICAgIH1cblxuICAgIHNob3dJdGVtc09uU2Nyb2xsKFwiLnJlc3VsdHNcIilcbiAgICBzaG93SXRlbXNPblNjcm9sbChcIi5naWRlXCIpXG4gICAgc2hvd0l0ZW1zT25TY3JvbGwoXCIucHJpemVcIilcbiAgICBzaG93SXRlbXNPblNjcm9sbChcIi50YWJsZVwiKVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySG9vZGllV2lubmVyKHdlZWtOdW0sIHVzZXJEYXRhKSB7XG4gICAgICAgIHdlZWtOdW0gPSBOdW1iZXIod2Vla051bSk7XG5cbiAgICAgICAgLy8g0YjRg9C60LDRlNC80L4g0L7QseKAmdGU0LrRgiDQtyDQv9C+0YLRgNGW0LHQvdC40Lwg0YLQuNC20L3QtdC8XG4gICAgICAgIGNvbnN0IHdlZWtEYXRhID0gdXNlckRhdGEuZmluZCh3ZWVrID0+IHdlZWsud2VlayA9PT0gd2Vla051bSk7XG4gICAgICAgIGlmICghd2Vla0RhdGEgfHwgIXdlZWtEYXRhLnVzZXJzKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdXNlcnMgPSB3ZWVrRGF0YS51c2VycztcblxuICAgICAgICAvLyDQv9C+0LrQsNC30YPRlNC80L4g0L/QtdGA0LXQvNC+0LbRhtGPINCw0LHQviDRgdGC0LDQvSDQvtGH0ZbQutGD0LLQsNC90L3Rj1xuICAgICAgICBkaXNwbGF5SG9vZGllV2lubmVyKHVzZXJzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5SG9vZGllV2lubmVyKHVzZXJzKSB7XG4gICAgICAgIGNvbnN0IGhvb2RpZVRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fYm9keSNob29kaWUnKTtcbiAgICAgICAgaWYgKCFob29kaWVUYWJsZUJvZHkpIHJldHVybjtcblxuICAgICAgICBob29kaWVUYWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7IC8vINC+0YfQuNGB0YLQuNC80L4g0L/QvtC/0LXRgNC10LTQvdGW0Lkg0LLQvNGW0YHRglxuXG4gICAgICAgIGNvbnN0IHdpbm5lclVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci53aW5uZXIpO1xuXG4gICAgICAgIGNvbnN0IGhvb2RpZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob29kaWVSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgIGlmICh3aW5uZXJVc2VyKSB7XG4gICAgICAgICAgICBob29kaWVSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7d2lubmVyVXNlci51c2VyaWR9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+0YUke3dpbm5lclVzZXIuY29lZklufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtLWltZ1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3ByaXplL2hvb2RpZS5zdmdcIiBhbHQ9XCJob29kaWVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW0tdHh0XCIgZGF0YS10cmFuc2xhdGU9XCJ0YWJsZUhvb2RpZVwiPtGF0YPQtNGWPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9vZGllUm93LmNsYXNzTGlzdC5hZGQoJ3dhaXRpbmcnKTtcbiAgICAgICAgICAgIGhvb2RpZVJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgJ3dhaXRpbmdXaW5uZXJIb29kaWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhvb2RpZVRhYmxlQm9keS5hcHBlbmQoaG9vZGllUm93KTtcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKClcbiAgICAgICAgLnRoZW4oaW5pdCkgLy8g0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG4gICAgLy8gVEVTVFxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG4gICAgY29uc3QgYmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmV0LW9ubGluZVwiKVxuXG4gICAgYmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiNzc3XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB1bmF1dGhNc2dzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGhhc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWN0aXZlV2VlayA9IDJcbiAgICAgICAgcmVuZGVyVXNlcnMoYWN0aXZlV2VlaywgdGFibGVEYXRhKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmZvckVhY2goKHRhYiwgaSkgPT57XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZihpID09PSBhY3RpdmVXZWVrIC0gMSl7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgIGlmKE51bWJlcih0YWIuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWVrXCIpKSA+IGFjdGl2ZVdlZWspe1xuICAgICAgICAgICAgICAgIHRhYi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0YWIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpKXtcbiAgICAgICAgICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBhY3RpdmVXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1ob29kaWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaG9vZGllUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlX19ib2R5I2hvb2RpZSAudGFibGVfX3JvdycpO1xuICAgICAgICBpZiAoIWhvb2RpZVJvdykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGlzV2FpdGluZyA9IGhvb2RpZVJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ3dhaXRpbmcnKTtcblxuICAgICAgICBpZiAoaXNXYWl0aW5nKSB7XG4gICAgICAgICAgICAvLyDwn5S5INGP0LrRidC+INCx0YPQu9C+IFwi0L7Rh9GW0LrRg9Cy0LDQvdC90Y9cIiDigJQg0L/RgNC40LHQuNGA0LDRlNC80L4g0YLQsCDQtNC+0LTQsNGU0LzQviDQstC80ZbRgdGCINC/0LXRgNC10LzQvtC20YbRj1xuICAgICAgICAgICAgaG9vZGllUm93LmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXRpbmcnKTtcbiAgICAgICAgICAgIGhvb2RpZVJvdy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICBob29kaWVSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPjQ1MzgqKio8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj7RhTEwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW0taW1nXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvcHJpemUvaG9vZGllLnN2Z1wiIGFsdD1cImhvb2RpZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbS10eHRcIiBkYXRhLXRyYW5zbGF0ZT1cInRhYmxlSG9vZGllXCI+0YXRg9C00ZY8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoKTtcblxuXG4iXX0=
