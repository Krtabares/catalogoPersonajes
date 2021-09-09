import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

const components = [HeaderComponent,
  DynamicSelectComponent,
  DynamicTableComponent,
  SidenavbarComponent,
  ModalComponent]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[components]
})
export class ComponentsModule { }
