import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularWithSpareTime';
  tasks: { 
    id: number,
    name: string,
    checked: boolean
  }[] = [
    {
      id: 1,
      name: 'Generate Component',
      checked: false
    },
    {
      id: 2,
      name: 'Template/Data',
      checked: false
    },
    {
      id: 3,
      name: 'Props/Angular',
      checked: false
    },
    {
      id: 4,
      name: 'Directives',
      checked: false
    },
    {
      id: 5,
      name: 'Conditional/Rendering',
      checked: false
    },
    {
      id: 6,
      name: 'Events/Emission',
      checked: false
    }
   ]; 

   onEmitCheckTask({id}: {id: number}):void {
     let localTask = this.tasks.find(task => task.id === id);
     this.tasks[id - 1] = localTask = {
       id,
       name: localTask!.name,
       checked: !localTask?.checked
     };
   }
}
