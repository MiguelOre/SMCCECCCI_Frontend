import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirRoutingModule } from './air-routing.module';
import { AirPanelComponent } from './components/air-panel/air-panel.component';
import { AirRegisterComponent } from './components/air-register/air-register.component';
import { AirDetailComponent } from './components/air-detail/air-detail.component';
import { UpdateAirComponent } from './components/update-air/update-air.component';


@NgModule({
  declarations: [
    AirPanelComponent,
    AirRegisterComponent,
    AirDetailComponent,
    UpdateAirComponent
  ],
  imports: [
    CommonModule,
    AirRoutingModule
  ]
})
export class AirModule { }
