import { Component } from '@angular/core';
import { FormioAuthService } from '@formio/angular/auth';
import ClientMonitor from 'skywalking-client-js';
// import ClientMonitor from '../../node_modules/skywalking-client-js/src/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: FormioAuthService) {}
  ngAfterViewInit() {
    ClientMonitor.register({
      collector: 'http://127.0.0.1',
      service: 'angular-demo',
      pagePath: '/home',
      serviceVersion: 'v1.0.0',
    });
  }
}
