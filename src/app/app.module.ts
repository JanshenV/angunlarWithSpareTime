import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmitterComponent } from './components/events/emitter/emitter.component';
import { ChangeNumberComponent } from './components/events/change-number/change-number.component';
import { DisstressBeaconComponent } from './components/events/disstress-beacon/disstress-beacon.component';
import { ListRenderingComponent } from './components/list-rendering/list-rendering.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EmitterComponent,
    ChangeNumberComponent,
    DisstressBeaconComponent,
    ListRenderingComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
