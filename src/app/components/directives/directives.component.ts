import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  directiveStyles = {
    color: 'red',
    textDecoration: 'underline',
    size:'40'
  }

  classH1 = 'grayTitle'
  multipleClasses = ['underlined', 'size200px'];
  constructor() { }

  ngOnInit(): void {
  }

}
