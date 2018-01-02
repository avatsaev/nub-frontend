import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@app/core/modules/shared.module';
import {HomeRoutingModule} from '@app/views/home/home-routing.module';
import {HomeComponent} from '@app/views/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
