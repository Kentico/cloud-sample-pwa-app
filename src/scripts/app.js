import { client } from './client';
import { ResponseMapService, BaseResponse } from 'kentico-cloud-delivery-typescript-sdk';

const responseMapService = new ResponseMapService(client.config);
const loader = document.querySelector('.loader');
const cardTemplate = document.querySelector('.cardTemplate');
const container = document.querySelector('.main');
let isLoading = true;
let visibleCards = {};

const updatePointOfInterestCard = (data) => {
    const key = data.system.id;
    const title = data.title.value;
    const content = data.description.value;
    const latitude = data.latitude__decimal_degrees_ && data.latitude__decimal_degrees_.value;
    const longitude = data.longitude__decimal_degrees_ && data.longitude__decimal_degrees_.value;


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
    if (latitude && longitude) {
        card.querySelector('.map-link').setAttribute('href', `http://maps.google.com/?ie=UTF8&hq=&ll=${latitude},${longitude}&z=16`)
        card.querySelector('.map-link').removeAttribute('hidden');
    }

    if (isLoading) {
        loader.setAttribute('hidden', true);
        isLoading = false;
    }
};

const getPointsOfInterest = () => {

    // This approach is not a best practice. Caching best practices will be described in one of upcoming article.
    const url = 'https://deliver.kenticocloud.com/66ab95de-6599-0018-f141-3c9dc08fe797/items?system.type=point_of_interest';
    if ('caches' in window) {
        /*
         * Check if the service worker has already cached this data about the Point of interests
         * data. If the service worker has the data, then display the cached
         * data while the app fetches the latest data.
         */
        caches.match(url).then(response =>
            response && response
                .json()
                .then(json => {
                    const typedResponse = new BaseResponse(json, response);
                    responseMapService
                        .mapMultipleResponse(typedResponse, client.config)
                        .items.forEach(pointOfInterest =>
                            updatePointOfInterestCard(pointOfInterest))
                })
        );
    }

    client.items()
        .type('point_of_interest')
        .get()
        .toPromise()
        .then(response =>
            response.items.forEach(pointOfInterest => {
                updatePointOfInterestCard(pointOfInterest);
            }))
}

module.exports = {
    getPointsOfInterest
};