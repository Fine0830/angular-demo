import { ErrorHandler } from '@angular/core';
import ClientMonitor from 'skywalking-client-js';
// import ClientMonitor from '../../node_modules/skywalking-client-js/src/index';

export class AppGlobalErrorhandler implements ErrorHandler {
  handleError(error) {
    ClientMonitor.reportFrameErrors({
      collector: 'http://127.0.0.1',
      service: 'angular-demo',
      pagePath: '/home',
      serviceVersion: 'v1.0.0',
    }, error);
  }
}
