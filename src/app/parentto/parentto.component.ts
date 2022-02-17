import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentto',
  templateUrl: './parentto.component.html',
  styleUrls: ['./parentto.component.css'],
})
export class ParenttoComponent implements OnInit {
  data: string = 'Hello From parrentto Component';
  constructor() {}

  ngOnInit(): void {}
}
