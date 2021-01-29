import { Component, AfterViewInit } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { PrismService } from '../Prism.service';
import ClientMonitor from 'skywalking-client-js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(
    public config: FormioAppConfig,
    public prism: PrismService
  ) {}

  ngOnInit() {
    ClientMonitor.register({
      collector: 'http://127.0.0.1',
      service: 'angular-demo',
      pagePath: '/home',
      serviceVersion: 'v1.0.0',
    });
  }
  ngAfterViewInit() {
    this.prism.init();
  }
}
