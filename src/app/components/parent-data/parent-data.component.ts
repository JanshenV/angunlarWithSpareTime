import { Component, OnInit, Input } from '@angular/core';

import { MaverickHunter } from 'src/app/MaverickHunter';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})

export class ParentDataComponent implements OnInit {
  //In this first object being received, I atribuited it to be a interface called MaverickHunter, so my prop has to be equals this interface.
  @Input() propsFromParentApp!: MaverickHunter;
  //In this second object I atribuited my object to what it could be a interface, so I want my userData to be an object that has the properties you see below.
  @Input() userData!: { username: string, email: string, password: string };
  constructor() { }

  ngOnInit(): void {
    Object.entries(this.userData).forEach(([key, value]) => console.log(key))
  }

}
