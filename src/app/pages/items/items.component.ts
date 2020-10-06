import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { STEP_ITEMS } from '../../constants/musti-step-config';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  formContent: any;
  formData: any;
  activeStepIndex: number;

  constructor() { }

  ngOnInit(): void {
    // debugger;
    this.formContent = STEP_ITEMS;
    this.formData = {};
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    alert(JSON.stringify(this.formData));
  }
}
