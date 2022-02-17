import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  data: string = '';
  constructor() {}
  ngOnInit(): void {}
  receiveData($event: string) {
    this.data = $event;
  }
}
