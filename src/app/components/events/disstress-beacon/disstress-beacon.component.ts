import { Component, OnInit,  Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-disstress-beacon',
  templateUrl: './disstress-beacon.component.html',
  styleUrls: ['./disstress-beacon.component.css']
})
export class DisstressBeaconComponent implements OnInit {
  @Output() Beacon: EventEmitter<any> = new EventEmitter<{
    message: string
  }>();

  message: string = "... ..---";
  
  distressEverySoOften = setInterval(() => {
  this.Beacon.emit({ message: this.message })
}, 25000);

  constructor() { }

  ngOnInit(): void {
  }

}
