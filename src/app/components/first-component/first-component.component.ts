import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  stringData: string = 'Some string being printed on my component using my component.ts'; 
  someBoolean: boolean = false;
  someObject: object = {
    name: 'Hello',
    age: 27
  };
  someArray: string[] = ['Item1', 'string', 'item3'];

  constructor() { }

  ngOnInit(): void {
  }

}
