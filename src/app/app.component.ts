import { Component } from '@angular/core';
import { MaverickHunter } from 'src/app/MaverickHunter';

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
  userData = {
    username: 'X',
    email: "X@maverickHunter.com",
    password: '*********'
  }
}
