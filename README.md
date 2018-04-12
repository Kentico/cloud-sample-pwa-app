# Pack and Go (cloud-sample-pwa-app)
[![Build Status](https://api.travis-ci.org/Kentico/cloud-sample-pwa-app.svg?branch=master)](https://travis-ci.org/Kentico/cloud-sample-pwa-app)
[![Deploy Status](https://img.shields.io/badge/deploy-surge-brightgreen.svg)](http://kentico-cloud-sample-pwa-app.surge.sh)
[![Forums](https://img.shields.io/badge/chat-on%20forums-orange.svg)](https://forums.kenticocloud.com)

Travel application featuring various points of interests around you.

Pack and Go is implemented as a showcase of Kentico Cloud using the [progressive web app](https://developers.google.com/web/progressive-web-apps/) approach

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3. to be able to run ng command, it is required to install it by ```npm i -g @angular/cli```.

### Application setup

1. Install the latest version of NodeJS and npm. You can download both at <https://nodejs.org/en/download/>.
2. Clone the sample application repository.
3. Navigate to the root folder of the application in the command line.
4. Type `npm install` to install required npm packages.
5. Type `ng serve` to start a development server.
6. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Pre-configured node scripts:
* `npm run build` will build the application in production mode.
* `npm run build-dev` will build the application in the development mode.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Model generation

Run `npm run generate-models` generates models in `/src/app/models` using `kentico-cloud-model-generator-utility` [tool](https://github.com/Enngage/KenticoCloudModelGeneratorUtility) project ID is defined in `package.json` in `config.projectId`.

## Deployment

Deployment is set up by [surge](https://surge.sh/). It is required to register to this service and set two environment properties you receive after registration:
* SURGE_LOGIN
* SURGE_TOKEN

Command `npm run surge` deploy the app on the domain specified in `package.json` in `config.deployUrl`.

## Audits using Lighthouse

If you want to perform an audit using [lighthouse](https://developers.google.com/web/tools/lighthouse/) to get the report, there is a prepared set up to generate an HTML report using the url defined in `package.json` in `config.deployUrl`. Audit is created by command `npm run lighthouse`.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details