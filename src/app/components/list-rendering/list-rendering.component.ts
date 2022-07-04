import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-rendering',
  templateUrl: './list-rendering.component.html',
  styleUrls: ['./list-rendering.component.css']
})
export class ListRenderingComponent implements OnInit {
  tasksExample: { id: number, taskName: string, done: boolean }[] = [
    {
      id: 1,
      taskName: 'Water Plants',
      done: false,
    },
    {
      id: 2,
      taskName: 'Led Zeppellin',
      done: true,
    },
    {
      id: 3,
      taskName: 'Study angular',
      done: true,
    },
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
