(function () {

    const apiURL = 'https://fav-prom.com/api_hockey_universe'

    const getActiveWeek = (promoStartDate, weekDuration) => {
        const currentDate = new Date();
        let weekDates = [];

        const Day = 24 * 60 * 60 * 1000;
        const Week = weekDuration * Day;

        const formatDate = (date) =>
            `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}`;

        const calculateWeekPeriod = (weekIndex) => {
            const baseStart = promoStartDate.getTime();
            const start = new Date(baseStart + weekIndex * Week);
            let end = new Date(start.getTime() + (weekDuration * Day - 1));
            return { start, end };
        };

        let activeWeekIndex = null;

        // Перевірка поточного тижня
        for (let i = 0; i < 10; i++) { // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
            const { start, end } = calculateWeekPeriod(i);
            if (currentDate >= start && currentDate <= end) {
                activeWeekIndex = i + 1;
                break;
            }
        }
        return activeWeekIndex;
    };

    const promoStartDate = new Date("2025-10-23T00:00:00");
    const weekDuration = 7;

    let isVerifiedUser = false;

    let periodAmount = 3 // кількість періодів в акції, треба для кешування інфи з табли

    let tableData = []
    let activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;

    if (activeWeek > 3) activeWeek = 3


    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        textBtn = document.querySelectorAll('.textBtn'),
        redirectBtns = document.querySelectorAll('.play-btn'),
        loader = document.querySelector(".spinner-overlay"),
        resultsTable = document.querySelector('#table'),
        resultsTableOther = document.querySelector('#tableOther'),
        tableTabs = document.querySelectorAll('.table__tabs-week')

    const hrLeng = document.querySelector('#hrLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let loaderBtn = false

    let locale = "ua"

    if (hrLeng) locale = 'ua';
    if (enLeng) locale = 'en';

    let debug = true

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;

    let userId = null;

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
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

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            checkUserAuth()
                .then(loadUsers)
                .then(() =>{
                    setTimeout(hideLoader, 300);
                    document.querySelectorAll(".table__tabs-week").forEach((tab, i) =>{
                        tab.classList.remove('active');
                        if(i === activeWeek - 1) tab.classList.add('active');
                    })
                    renderUsers(activeWeek, tableData);
                    participateBtns.forEach(btn => btn.addEventListener('click', participate));

                    tableTabs.forEach(tab =>{
                        if(Number(tab.getAttribute("data-week")) > activeWeek){
                            tab.style.pointerEvents = "none";
                        }else{
                            tab.style.pointerEvents = "initial";
                        }

                    })

                    document.addEventListener("click", e =>{
                        if(e.target.closest(".table__tabs-week")){
                            if(e.target.closest(".table__tabs-week").classList.contains("active")) return;
                            if(Number(e.target.closest(".table__tabs-week").getAttribute("data-week")) > activeWeek) {
                                return
                            }
                            e.target.closest(".table__tabs-week").style.pointerEvents = "initial";
                            tableTabs.forEach(tab =>{
                                tab.classList.remove("active");
                            })
                            let tabWeek = e.target.closest(".table__tabs-week").getAttribute("data-week");
                            e.target.closest(".table__tabs-week").classList.add("active");
                            renderUsers(tabWeek, tableData)

                        }
                    })

                    showItemsOnScroll(".gide__block")

                    document.querySelector('.gide__detailsBtn').addEventListener('click', () => {
                        console.log("btn")
                        openPopupByAttr('gideInfo');
                    });

                    document.querySelector('.popup-wrap').addEventListener('click', (e) => {
                        const openPopupEl = document.querySelector('.popup.active');
                        const isInside = openPopupEl ? openPopupEl.contains(e.target) : false;
                        if (openPopupEl && !isInside) {
                            closeAllPopups();
                        }
                    });

                    document.querySelectorAll('.popup__close').forEach(closeBtn => {
                        closeBtn.addEventListener('click', closeAllPopups);
                    });
                })

            }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}`)
            .then(json => {
                i18nData = json;
                translate();
            });
    }


    function checkUserAuth() {
        if (userId) {
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.add('hide');
            }
            return request(`/favuser/${userId}?nocache=1`)
                .then(res => {
                    if (res.userid) {
                        participateBtns.forEach(item => item.classList.add('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));
                        isVerifiedUser = true;
                    } else {
                        participateBtns.forEach(item => item.classList.remove('hide'));
                        redirectBtns.forEach(item => item.classList.add('hide'));
                        isVerifiedUser = false;
                    }

                })
        } else {
            for (let redirectBtn of redirectBtns) {
                redirectBtn.classList.add('hide');
            }
            for (let participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }

            return Promise.resolve(false);
        }
    }

    function reportError(err) {
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
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
        for (const lang of ['hr', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }

    function renderUsers(weekNum, userData) {
        weekNum = Number(weekNum);
        userData = userData.find(week => {
            return week.week === weekNum
        }).users;

        let currentUser = userData.find(user => user.userid === userId);

        if(userId && !currentUser && isVerifiedUser){
            userData = [...userData, {userid: userId, points: 0}]
            currentUser = userData.find(user => user.userid === userId)
        }

        populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser);
    }

    function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser) {

        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        if (!users?.length) return;

        const topUsers = users.slice(0, 20);
        const isTopCurrentUser = currentUser && users.slice(0, 8).some(user => user.userid === currentUserId);

        topUsers.forEach(user => {
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

        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${Number(userData.points).toFixed(2)}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

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

        const isMainTable = table === resultsTable;

        if (isCurrentUser && !isTopCurrentUser && !isMainTable) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
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
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function getPrizeTranslationKey(place, week) {
        if (place <= 3) return `prize${place}`;
        if (place <= 10) return `prize4`;
        if (place <= 19) return `prize5`;
        if (place === 20) return `prize6`;
        if (place <= 29) return `prize7`;
        if (place === 30) return `prize8`;
        if (place <= 39) return `prize9`;
        if (place === 40) return `prize10`;
        if (place <= 49) return `prize11`;
        if (place === 50) return `prize12`;
        if (place <= 69) return `prize13`;
        if (place === 70) return `prize14`;
        if (place <= 89) return `prize15`;
        if (place === 90) return `prize16`;
        if (place <= 100) return `prize17`;
    }

    function participate() {
        if (!userId) {
            return;
        }
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                loaderBtn = true
                toggleClasses(textBtn, "loader")
                toggleTranslates(textBtn, "loader")
                setTimeout(() =>{
                    toggleTranslates(textBtn, "loader_ready")
                    toggleClasses(textBtn, "done")
                    toggleClasses(textBtn, "loader")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                    loadUsers("?nocache=1").then(res => {
                        renderUsers(activeWeek, tableData)
                    })
                }, 1000)

            })
            .catch(err => {
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
        const requests = [];
        tableData.length = 0

        for (let i = 1; i <= periodAmount; i++) {
            const week = i; // або будь-яка логіка для формування номера тижня
            const req = request(`/users/${week}${parametr ? parametr : ""}`).then(data => {

                tableData.push({ week, users: data });
            });

            requests.push(req);
        }

        return Promise.all(requests)
        .catch(error => {
            console.error('Error loading users:', error);
        });
    }

    function showItemsOnScroll(itemClass) {
        const Blocks = document.querySelectorAll(itemClass);
        if (!Blocks.length) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    setTimeout(() => {
                        entry.target.querySelector(".results__decor-left")?.classList.add("showItem")
                        entry.target.querySelector(".results__decor-right")?.classList.add("showItem")
                        observer.unobserve(entry.target);
                    }, 200);
                    setTimeout(() => {
                        entry.target.querySelector(".prize__decor-left")?.classList.add("showItem")
                        entry.target.querySelector(".prize__decor-right")?.classList.add("showItem")
                        entry.target.querySelector(".hoodie")?.classList.add("showItem")
                        entry.target.querySelector(".prize__info")?.classList.add("showItem")
                        observer.unobserve(entry.target);
                    }, 200);
                    setTimeout(() => {
                        entry.target.querySelector(".gide__masck")?.classList.add("showItem")
                        observer.unobserve(entry.target);
                    }, 600);
                    setTimeout(() => {
                        entry.target.querySelector(".table__decor-1")?.classList.add("showItem")
                        entry.target.querySelector(".table__decor-2")?.classList.add("showItem")
                        entry.target.querySelector(".table__decor-3")?.classList.add("showItem")
                        entry.target.querySelector(".table__decor-4")?.classList.add("showItem")
                        entry.target.querySelector(".table__decor-5")?.classList.add("showItem")
                        entry.target.querySelector(".table__decor-6")?.classList.add("showItem")
                        observer.unobserve(entry.target);
                    }, 200);
                }
            });
        }, {
            threshold: 0.3
        });

        Blocks.forEach(item => observer.observe(item));
    }

    function openPopupByAttr(popupAttr) {
        const allPopups = document.querySelectorAll('.popup');
        allPopups.forEach(p => p.classList.remove('active'));
        document.body.style.overflow = 'hidden';

        const targetPopup = document.querySelector(`.popup[data-popup="${popupAttr}"]`);
        if (targetPopup) {
            mainPage.classList.add('overlay');
            targetPopup.classList.add('active');
            document.querySelector('.popup-wrap').classList.remove('opacity');
        }
    }

    function closeAllPopups() {
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        document.body.style.overflow = 'auto';
        document.querySelector('.popup-wrap').classList.add('opacity');
        mainPage.classList.remove('overlay');
    }

    // loadTranslations()
    //     .then(init) // запуск ініту сторінки

    // TEST

    document.querySelector('.gide__detailsBtn').addEventListener('click', () => {
        console.log("btn")
        openPopupByAttr('gideInfo');
    });

    document.querySelector('.popup-wrap').addEventListener('click', (e) => {
        const openPopupEl = document.querySelector('.popup.active');
        const isInside = openPopupEl ? openPopupEl.contains(e.target) : false;
        if (openPopupEl && !isInside) {
            closeAllPopups();
        }
    });

    document.querySelectorAll('.popup__close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeAllPopups);
    });

    function openPopupByAttr(popupAttr) {
        const allPopups = document.querySelectorAll('.popup');
        allPopups.forEach(p => p.classList.remove('active'));
        document.body.style.overflow = 'hidden';

        const targetPopup = document.querySelector(`.popup[data-popup="${popupAttr}"]`);
        if (targetPopup) {
            mainPage.classList.add('overlay');
            targetPopup.classList.add('active');
            document.querySelector('.popup-wrap').classList.remove('opacity');
        }
    }

    function closeAllPopups() {
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        document.body.style.overflow = 'auto';
        document.querySelector('.popup-wrap').classList.add('opacity');
        mainPage.classList.remove('overlay');
    }

    showItemsOnScroll(".results")
    showItemsOnScroll(".gide")
    showItemsOnScroll(".prize")
    showItemsOnScroll(".table")

    document.addEventListener('DOMContentLoaded', () => {
        const img = document.querySelector('.gide__title-img');
        const flare = document.querySelector('.gide__title-flare');

        if (img && flare) {
            const setMask = () => {
                const src = img.currentSrc || img.src;
                flare.style.webkitMaskImage = `url('${src}')`;
                flare.style.maskImage = `url('${src}')`;
            };

            setMask();

            // якщо змінюється розмір вікна — можливо, переключиться srcset
            window.addEventListener('resize', setMask);
        }
    });

})();


