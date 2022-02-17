import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}
  message: string = 'Hello world';
  ngOnInit(): void {}
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
