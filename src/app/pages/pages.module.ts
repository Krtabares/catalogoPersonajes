
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';
import { HouseComponent } from './house/house.component';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentsComponent,
    StaffComponent,
    HouseComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
