/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import {HttpClient} from "aurelia-fetch-client";

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));

  // aurelia.start().then(() => aurelia.setRoot());

  /*
  function getHttp() {
    let http = new HttpClient();
    http.configure(config => {
      config
        .withBaseUrl('http://localhost:64885/api/');
    });

    return http;
  }

  aurelia.container.registerInstance(HttpClient, getHttp());
  */


  let httpClient = aurelia.container.invoke(HttpClient)
    .configure(config => { config
      .useStandardConfiguration()
      .withBaseUrl('http://localhost:64885/api/')
    });
  aurelia.container.registerInstance(HttpClient, httpClient);



  // let configureHttpClient = <ConfigureHttpClient>aurelia.container.get()
  // aurelia.container.invoke(HttpClient).configure(config => {
  //   config.useStandardConfiguration()
  //     .withBaseUrl('http://localhost:64884/api/')
  // })


}
