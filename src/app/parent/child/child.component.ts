import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() dataEvent = new EventEmitter<string>();
  data: string = 'Hello from Child Component';
  constructor() {}
  ngOnInit(): void {}
  sendData() {
    this.dataEvent.emit(this.data);
  }
}
