import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base-page',
  template: ''
})
export class BasePageComponent implements OnInit {
  temp: number = 5;
  subscriptions: Subscription[] = [];
  
  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
      debugger;
    });
  }
}
