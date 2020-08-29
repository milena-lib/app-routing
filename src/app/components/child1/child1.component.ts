import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit {
  @Input() title: string | TemplateRef<HTMLElement>;
  isTitleAString = () => typeof this.title == 'string';
  
  constructor() { }

  ngOnInit(): void {
  }

}
