import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  @Input() appTasks!: {id: number, name: string, checked: boolean}[];
  @Output() emitCheckTask: EventEmitter<any> = new EventEmitter<({
    id: number
  })>;

  itemClass = 'taskItem'
  constructor() { }

  ngOnInit(): void {
  }


  checkTask(id: number):void {
    this.emitCheckTask.emit({
        id   
    });
  }
}
