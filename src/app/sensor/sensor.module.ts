import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorRoutingModule } from './sensor-routing.module';
import { SensorPanelComponent } from './components/sensor-panel/sensor-panel.component';
import { SensorRegisterComponent } from './components/sensor-register/sensor-register.component';
import { SensorDetailComponent } from './components/sensor-detail/sensor-detail.component';
import { UpdateSensorComponent } from './components/update-sensor/update-sensor.component';


@NgModule({
  declarations: [
    SensorPanelComponent,
    SensorRegisterComponent,
    SensorDetailComponent,
    UpdateSensorComponent
  ],
  imports: [
    CommonModule,
    SensorRoutingModule
  ]
})
export class SensorModule { }
