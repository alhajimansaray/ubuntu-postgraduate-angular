import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {StudentsFormComponent} from "./components/students/students-form/students-form.component";
import {StudentsFileComponent} from "./components/students/students-file/students-file.component";



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsFormComponent },
  { path: 'students-file/:id', component: StudentsFileComponent },
  { path: ' ', redirectTo: 'home', pathMatch: 'full' }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot (appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
