import { Component } from '@angular/core';
import {DatastorageService} from "./services/datastorage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ubuntu-postgraduate-angular';


  constructor(private service: DatastorageService){}


}
