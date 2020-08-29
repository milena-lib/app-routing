import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit {
  @Input() data: any[];
  @Input() itemTemplate: TemplateRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }

}
