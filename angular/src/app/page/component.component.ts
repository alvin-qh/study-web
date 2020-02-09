import {AfterViewInit, Component, DoCheck} from '@angular/core';
import hljs from 'highlight.js';


declare interface User {
  name?: string;
  gender?: 'M' | 'F';
  role?: string;
  remark?: string;
}

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.less']
})
export class ComponentComponent implements AfterViewInit, DoCheck {
  breadcrumbLevels = [
    {href: '../', title: 'Home'},
    {title: 'Components'}
  ];

  user: User = {
    name: '',
    gender: 'F',
    role: 'TEACHER',
    remark: ''
  };

  constructor() {
    hljs.initHighlightingOnLoad();
  }

  display() {
    const element = document.querySelector('.hljs.json');
    if (element != null) {
      (element as HTMLElement).innerText = JSON.stringify(this.user, null, '    ');
      hljs.highlightBlock(element);
    }
  }

  ngAfterViewInit(): void {
  }

  ngDoCheck(): void {
    this.display();
  }
}
