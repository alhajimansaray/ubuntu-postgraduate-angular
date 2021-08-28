import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Modal/Student';
import {StudentServiceService} from '../../../services/student-service.service';
import {from} from "rxjs";
import {NgForm} from "@angular/forms";




@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  searchName: string;
  searchYear: any;
  searchActive: string;

  allStudents: Student[]=[];
  student: Student = new Student();

  constructor(private studentService: StudentServiceService) {
  }


  ngOnInit() {

    this.studentService.getAllStudent().subscribe(dataFromOriginalArray =>{

      this.allStudents = dataFromOriginalArray;

    });

  }



  deleteMsg(id:number)
  {
     this.allStudents.splice(id, 1);
     alert("Confirm Delete")
  }

  addStudent(newStudent: Student, form: NgForm) {
    this.studentService.saveStudent(newStudent);
    document.getElementById('studentModal').click(); // this line close the modal after saving
     alert("Confirm Details before saving ")
  }


  filterStudent(searchName:string,searchYear: number,searchActive:string) {

    console.log(searchName);
    console.log(searchYear);
    console.log(searchActive);

   return this.allStudents.filter(student => student.name === searchName || student.year===searchYear || student.active===searchActive);
  }


  editStudent(studentId: number){

       this.student = this.allStudents.find( student => student.id == studentId);
  }


  cleanForm( form: NgForm){
    form.reset();
  }
}
