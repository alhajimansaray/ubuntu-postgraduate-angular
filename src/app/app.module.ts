import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StudentsFilterComponent } from './components/students/students-filter/students-filter.component';
import { StudentsFormComponent } from './components/students/students-form/students-form.component';
import { StudentsFileComponent } from './components/students/students-file/students-file.component';
import {FormsModule} from '@angular/forms';
import {StudentServiceService} from './services/student-service.service';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsFilterComponent,
    StudentsFormComponent,
    StudentsFileComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
