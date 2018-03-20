import { client } from './client';

const loader = document.querySelector('.loader');
const cardTemplate = document.querySelector('.cardTemplate');
const container = document.querySelector('.main');
let isLoading = true;
let visibleCards = {};

const updatePointOfInterestCard = (key, title, content, latitude, longitude) => {

    let card = visibleCards[key];
    if (!card) {
        card = cardTemplate.cloneNode(true);
        card.classList.remove('cardTemplate');
        card.removeAttribute('hidden');
        container.appendChild(card);
        visibleCards[key] = card;
    }

    card.querySelector('.title').textContent = title;
    card.querySelector('.content').innerHTML = content;
    if(latitude && longitude)
    {
        card.querySelector('.map-link').setAttribute('href', `http://maps.google.com/?ie=UTF8&hq=&ll=${latitude},${longitude}&z=16`)
        card.querySelector('.map-link').removeAttribute('hidden');                
    }

    if (isLoading) {
        loader.setAttribute('hidden', true);
        isLoading = false;
    }
};

const getPointsOfInterest = () => {

    const url = 'https://deliver.kenticocloud.com/66ab95de-6599-0018-f141-3c9dc08fe797/items?system.type=point_of_interest';
    if ('caches' in window) {
        /*
         * Check if the service worker has already cached this data about the Point of interests
         * data. If the service worker has the data, then display the cached
         * data while the app fetches the latest data.
         */
        caches.match(url).then(function (response) {
            if (response) {
                debugger;
                response.json()
                    .then(function updateFromCache(json) {
                        json.items.forEach(function (pointOfInterest) {                            
                            updatePointOfInterestCard(
                                pointOfInterest.system.id,
                                pointOfInterest.elements.title.value,
                                pointOfInterest.elements.description.value,
                                pointOfInterest.elements.latitude__decimal_degrees_ && pointOfInterest.elements.latitude__decimal_degrees_.value,
                                pointOfInterest.elements.longitude__decimal_degrees_ && pointOfInterest.elements.longitude__decimal_degrees_.value
                            );
                        })
                    });
            }
        });
    }

    client.items()
        .type('point_of_interest')
        .get()
        .toPromise()
        .then(response => 
            response.items.forEach(pointOfInterest => {
                debugger;
                updatePointOfInterestCard(
                    pointOfInterest.system.id,
                    pointOfInterest.title.value,
                    pointOfInterest.description.value,
                    pointOfInterest.latitude__decimal_degrees_ && pointOfInterest.latitude__decimal_degrees_.value,
                    pointOfInterest.longitude__decimal_degrees_ && pointOfInterest.longitude__decimal_degrees_.value
                )}))
}

module.exports = {
    getPointsOfInterest
};