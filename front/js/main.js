(function () {

    const apiURL = 'https://fav-prom.com/api_hockey_universe'

    let isVerifiedUser = false;

    let periodAmount = 3 // кількість періодів в акції, треба для кешування інфи з табли
    let tableData = []
    let activeWeek = null
    let isPromoOver = false


    const mainPage = document.querySelector(".fav-page"),
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

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let loaderBtn = false

    // let locale = "uk"
    let locale = sessionStorage.getItem("locale") || "uk"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = false

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;

    // let userId = null;
    let userId = Number(sessionStorage.getItem("userId")) ?? null


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
                .then(() => loadUsers("?nocache=1"))
                .then(() =>{
                    if(isPromoOver){
                        participateBtns.forEach(el => {
                            el.classList.add('lock');
                        })
                        redirectBtns.forEach(el => {
                            el.classList.add('lock');
                        })
                    }
                    setTimeout(hideLoader, 300);
                    tabs.forEach(item => {
                        item.classList.remove('active')
                        const num = Number(item.getAttribute('data-week'))
                        if(num === activeWeek) item.classList.add('active');
                        if(num > activeWeek) item.classList.add('lock');
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

                    document.addEventListener('click', e => {
                        if (e.target.closest('.part-btn')) participate(e);

                        if (e.target.closest(".table__tabs-item")){
                            const tab = e.target.closest(".table__tabs-item")
                            const week = Number(tab.getAttribute('data-week'));

                            if(week > activeWeek) return

                            tabs.forEach(item => {
                                item.classList.remove('active')
                                const num = Number(item.getAttribute('data-week'))
                                if(num === week) item.classList.add('active');
                            });

                            renderUsers(week, tableData);
                            tab.classList.add('active');

                        }
                    });

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
        return request(`/new-translates/${locale}?nocache=1`)
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

    function refreshLocalizedClass(element) {
        let baseCssClass = ""
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }

    function renderUsers(weekNum, userData = []) {
        weekNum = Number(weekNum);
        const weekObj = userData.find(w => w.week === weekNum);
        if (!weekObj || !weekObj.data || !Array.isArray(weekObj.data.users)) {
            console.error('Невірна структура даних');
            return;
        }

        const isStageEnded = weekObj.data.isStageEnded

        userData = weekObj.data.users;

        const winnerAdditionalPrize = userData.find(u => {
            if(u.winner === true){
                return u
            }
        });


        const currentUser = userData.find(user => user.userid === userId);

        if(userId && !currentUser && isVerifiedUser){
            userData = [...userData, {userid: userId, points: 0}]
        }
        populateUsersTable(userData, userId, weekNum, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize);
    }

    function populateUsersTable(users, currentUserId, week, currentUser, isVerifiedUser, isStageEnded, winnerAdditionalPrize) {
        if (!users?.length) return;
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        secondTableOther.innerHTML = '';
        secondTable.innerHTML = '';

        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);

        const topUsersLength = !currentUser || isTopCurrentUser ? 11 : 10;

        const topUsers = users.slice(0, topUsersLength);

        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if(isVerifiedUser && !currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, true, week);
        }

        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, true, week);
        }

        if (winnerAdditionalPrize) {
            if(currentUser && winnerAdditionalPrize.userid === currentUserId) {
                displaySecondUser(winnerAdditionalPrize, true , secondTableOther, [winnerAdditionalPrize], true)
            }else{
                displaySecondUser(winnerAdditionalPrize, false , secondTableOther, [winnerAdditionalPrize], false)
            }
        }
        else {
            secondTable.innerHTML = `<div class="table__row table__row--noWinner"> ${translateKey(isStageEnded ? "noWinnerHoodie" : "waitingWinnerHoodie")} </div>`
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
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (index !== 10 && users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }

    function displaySecondUser(user, isCurrentUser, table, users, isTopCurrentUser) {

        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');
            const prizeKey = "prize_hoodie"

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${Number(userData.coefIn).toFixed(2)}
            </div>
            <div class="table__row-item">
                <div class="table__row-item-img">
                  <img src="img/prize/hoodie.svg" alt="hoodie">
                </div>
                <div class="table__row-item-txt">
                    ${prizeKey ? translateKey(prizeKey) : " - "}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            renderRow(user, { highlight: true });
        } else {
            renderRow(user);
        }
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
        week = 1 // в цьому проміку для всіх стейджів однакові призи тому week = 1
        if (place <= 12) return `prize_${place}`;
        if (place <= 16) return `prize_13-16`;
        if (place <= 19) return `prize_17-19`;
        if (place <= 29) return `prize_20-29`;
        if (place <= 40) return `prize_30-40`;
        if (place <= 80) return `prize_41-80`;
        if (place <= 113) return `prize_81-113`;
        if (place <= 130) return `prize_114-130`;
        if (place <= 150) return `prize_131-150`;
        if (place <= 170) return `prize_151-170`;
        if (place <= 200) return `prize_171-200`;
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
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                    toggleClasses(participateBtns, "loader")
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
                tableData.push({ week, data: data });
                if(!activeWeek){
                    activeWeek = data.activeStageNumber
                }
                isPromoOver = data.isPromoOver

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

    showItemsOnScroll(".results")
    showItemsOnScroll(".gide")
    showItemsOnScroll(".prize")
    showItemsOnScroll(".table")



    function displayHoodieWinner(users) {
        const hoodieTableBody = document.querySelector('.table__body#hoodie');
        if (!hoodieTableBody) return;

        hoodieTableBody.innerHTML = ''; // очистимо попередній вміст

        const winnerUser = users.find(user => user.winner);

        const hoodieRow = document.createElement('div');
        hoodieRow.classList.add('table__row');

        if (winnerUser) {
            hoodieRow.innerHTML = `
      <div class="table__row-item">${winnerUser.userid}</div>
      <div class="table__row-item">х${winnerUser.coefIn}</div>
      <div class="table__row-item">
        <div class="table__row-item-img">
          <img src="img/prize/hoodie.svg" alt="hoodie">
        </div>
        <div class="table__row-item-txt" data-translate="tableHoodie">худі</div>
      </div>
    `;
        } else {
            hoodieRow.classList.add('waiting');
            hoodieRow.setAttribute('data-translate', 'waitingWinnerHoodie');
        }

        hoodieTableBody.append(hoodieRow);
    }

    loadTranslations()
        .then(init) // запуск ініту сторінки

    // TEST

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });

    // document.querySelector('.dark-btn').addEventListener('click', () => {
    //     document.body.classList.toggle('dark');
    // });

    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "en");
        }
        window.location.reload();
    });

    const authBtn = document.querySelector(".auth-btn")
    const betBtn = document.querySelector(".btn-bet-online")

    betBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "777")
        }
        window.location.reload()
    });

    authBtn.addEventListener("click", () =>{
        sessionStorage.removeItem("userId")
        unauthMsgs.forEach(item => item.classList.add('hide'));
        participateBtns.forEach(item => item.classList.remove('hide'));
        redirectBtns.forEach(item => item.classList.add('hide'));
    });

    document.querySelector('.btn-phase').addEventListener('click', function() {
        let activeWeek = 2
        renderUsers(activeWeek, tableData);
        document.querySelectorAll(".table__tabs-item").forEach((tab, i) =>{
            tab.classList.remove('active');
            if(i === activeWeek - 1){
                tab.classList.add('active');
                tab.classList.remove('lock');
            }
        })
        tableTabs.forEach(tab =>{
            if(Number(tab.getAttribute("data-week")) > activeWeek){
                tab.style.pointerEvents = "none";
            }else{
                tab.style.pointerEvents = "initial";
            }

        })
        document.addEventListener("click", e =>{
            if(e.target.closest(".table__tabs-item")){
                if(Number(e.target.closest(".table__tabs-item").getAttribute("data-week")) > activeWeek) {
                    return
                }
                e.target.closest(".table__tabs-item").style.pointerEvents = "initial";
                tableTabs.forEach(tab =>{
                    tab.classList.remove("active");
                })
                let tabWeek = e.target.closest(".table__tabs-item").getAttribute("data-week");
                e.target.closest(".table__tabs-item").classList.add("active");
                renderUsers(tabWeek, tableData)
            }
        })

    });

    document.querySelector('.toggle-hoodie').addEventListener('click', () => {
        const hoodieRow = document.querySelector('.table__body#hoodie .table__row');
        if (!hoodieRow) return;

        const isWaiting = hoodieRow.classList.contains('waiting');

        if (isWaiting) {
            // 🔹 якщо було "очікування" — прибираємо та додаємо вміст переможця
            hoodieRow.classList.remove('waiting');
            hoodieRow.removeAttribute('data-translate');
            hoodieRow.innerHTML = `
      <div class="table__row-item">4538***</div>
      <div class="table__row-item">х10</div>
      <div class="table__row-item">
        <div class="table__row-item-img">
          <img src="img/prize/hoodie.svg" alt="hoodie">
        </div>
        <div class="table__row-item-txt" data-translate="tableHoodie">худі</div>
      </div>
    `;
        }
    });

})();


