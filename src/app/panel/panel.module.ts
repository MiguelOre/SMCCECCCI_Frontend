import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { DevicesComponent } from './components/devices/devices.component';
import { ReportComponent } from './components/report/report.component';
import { AirControlComponent } from './components/air-control/air-control.component';
import { Co2ControlComponent } from './components/co2-control/co2-control.component';


@NgModule({
  declarations: [
    DevicesComponent,
    ReportComponent,
    AirControlComponent,
    Co2ControlComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
