import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule //componente criado para exportar os componentes do angular material
  ]
})
export class CoursesModule { }
