import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';
import { PagesComponent } from './pages.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', redirectTo:'dashboard', pathMatch:'full'},
  { path: 'dashboard',
   component: PagesComponent, 
   children: [
      {
        path:'staff', component: StaffComponent
      },
      {
        path:'house', component: HouseComponent
      },
      {
        path:'students', component: StudentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
