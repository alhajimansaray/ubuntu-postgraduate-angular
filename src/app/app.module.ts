import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StudentsFilterComponent } from './components/students/students-filter/students-filter.component';
import { StudentsFormComponent } from './components/students/students-form/students-form.component';
import { StudentsFileComponent } from './components/students/students-file/students-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsFilterComponent,
    StudentsFormComponent,
    StudentsFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
