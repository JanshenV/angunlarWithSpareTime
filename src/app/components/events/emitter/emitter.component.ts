import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  showMessage: boolean = false;
  disstressNumber: number = 0;
  // distressMessage: string = ""
  ngOnInit(): void {

  }

  //Typescript good practice:
  //If not returning anything from a function
  //Give the function the void type
  handleShowMessage(): void{
    this.showMessage = !this.showMessage;
  }

  //Receiving emission
  onChangeNumber({number}: {number: number}){
    this.disstressNumber = Math.floor(Math.random() * (this.disstressNumber + 10));
  }
  
}
