import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NubCreateComponent} from './nub-create/nub-create.component';
import {NubListComponent} from './nub-list/nub-list.component';
import {NubViewComponent} from './nub-view/nub-view.component';
import {NubEditComponent} from './nub-edit/nub-edit.component';
import {NubsRoutingModule} from './nubs-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NubsRoutingModule
  ],
  declarations: [
    NubCreateComponent,
    NubListComponent,
    NubViewComponent,
    NubEditComponent
  ]
})
export class NubsModule { }
