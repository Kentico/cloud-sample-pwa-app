import './styles/style.css';

import { getPointsOfInterest } from './scripts/app';

document.getElementById('butRefresh').addEventListener('click', function () {
    getPointsOfInterest();
});

getPointsOfInterest();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () { console.log('Service Worker Registered'); });
}
