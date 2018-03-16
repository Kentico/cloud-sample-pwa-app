(function () {
    'use strict';

    var app = {
        isLoading: true,
        loader: document.querySelector('.loader'),
        visibleCards: {},
        cardTemplate: document.querySelector('.cardTemplate'),
        container: document.querySelector('.main')
    };

    document.getElementById('butRefresh').addEventListener('click', function () {
        app.getPointsOfInterest();
    });

    app.updatePointOfInterestCard = function (data) {
        var key = data.system.id;

        var title = data.elements.title.value;
        var content = data.elements.description.value;

        var card = app.visibleCards[key];
        if (!card) {
            card = app.cardTemplate.cloneNode(true);
            card.classList.remove('cardTemplate');
            card.removeAttribute('hidden');
            app.container.appendChild(card);
            app.visibleCards[key] = card;
        }

        card.querySelector('.title').textContent = title;
        card.querySelector('.content').innerHTML = content;

        if (app.isLoading) {
            app.loader.setAttribute('hidden', true);
            app.isLoading = false;
        }
    };

    app.getPointsOfInterest = function () {
        var url = 'https://deliver.kenticocloud.com/66ab95de-6599-0018-f141-3c9dc08fe797/items?system.type=point_of_interest'
        if ('caches' in window) {
            /*
             * Check if the service worker has already cached this data about the Point of interests
             * data. If the service worker has the data, then display the cached
             * data while the app fetches the latest data.
             */
            caches.match(url).then(function (response) {
                if (response) {
                    response.json()
                        .then(function updateFromCache(json) {
                            json.items.forEach(function (pointOfInterest) {
                                app.updatePointOfInterestCard(pointOfInterest);
                            })
                        });
                }
            });
        }

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    var response = JSON.parse(request.response);
                    response.items.forEach(function (pointOfInterest) {
                        app.updatePointOfInterestCard(pointOfInterest);
                    })
                }
            } else {
                // TODO: handle other states
            }
        };
        request.open('GET', url);
        request.send();
    }

    app.getPointsOfInterest();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function () { console.log('Service Worker Registered'); });
    }
})();