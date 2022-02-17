import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frchild',
  templateUrl: './frchild.component.html',
  styleUrls: ['./frchild.component.css'],
})
export class FrchildComponent implements OnInit {
  @Input() data: string = '';
  constructor() {}

  ngOnInit(): void {}
}
