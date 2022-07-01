import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter<{
    number: number
  }>();

  
  number: number = 1;

  constructor() { }

  ngOnInit(): void {
    
  }

  //Emiting
  handleClick() {
    this.changeNumber.emit({
      number: this.number,
    });
  };


}
