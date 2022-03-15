import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { SpacePanelComponent } from './components/space-panel/space-panel.component';
import { SpaceRegisterComponent } from './components/space-register/space-register.component';
import { SpaceDetailComponent } from './components/space-detail/space-detail.component';
import { UpdateSpaceComponent } from './components/update-space/update-space.component';


@NgModule({
  declarations: [
    SpacePanelComponent,
    SpaceRegisterComponent,
    SpaceDetailComponent,
    UpdateSpaceComponent
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule
  ]
})
export class SpaceModule { }
