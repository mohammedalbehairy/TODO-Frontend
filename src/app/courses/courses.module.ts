import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { DefaultCoursesComponent } from './components/default-courses/default-courses.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [ 
    ListComponent,
     CreateComponent,
    //  DefaultAuthComponent,
     DefaultCoursesComponent,
    EditComponent,
    DetailsComponent
    ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
