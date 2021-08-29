import { Component, OnInit } from '@angular/core';
import {Student} from "../../../Modal/Student";
import {StudentServiceService} from "../../../services/student-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-students-file',
  templateUrl: './students-file.component.html',
  styleUrls: ['./students-file.component.css']
})
export class StudentsFileComponent implements OnInit {

  // Variable that holds the Student Id from the url
  studentId: number;

  // Object created to binding the Student-file Template (String Interpolation)
studentFile: Student = new Student();


  // Activated Route inject it into the Student-file component using dependency injection

  constructor(private studentService: StudentServiceService, private route: ActivatedRoute) { }

  ngOnInit() {

    // Initialize to getting the Student Id from the url (router parameter)
    this.studentId = + this.route.snapshot.paramMap.get("id");


   // Initialize to getting the student by Id from the original Student array in service
    this.getStudentFile(this.studentId);
  }

  // Method from the service to finding a student file by Id
  getStudentFile(studentId: number){

    this.studentFile =  this.studentService.getStudentFile(studentId);

  }

}
