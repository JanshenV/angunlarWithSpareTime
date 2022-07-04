import { Component } from '@angular/core';
import { MaverickHunter } from '../app/Interfaces/MaverickHunter';
import { UserData } from './Interfaces/UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'angularWithSpareTime';
  dataToBeShared: MaverickHunter = {
    name: 'Zero',
    profession: 'Maverick Hunter',
    age: 'Unknown',
  }
  userData: UserData = {
    username: 'X',
    email: "X@maverickHunter.com",
    password: '*********'
  }
}
