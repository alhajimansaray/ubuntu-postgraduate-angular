import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Modal/Student';
import {StudentServiceService} from '../../../services/student-service.service';
import {NgForm} from "@angular/forms";




@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  // Fields created for the filter method
  searchName: string;
  searchYear: any;
  searchActive: string;

  // Student Array for holding student data from the Service Array
  allStudents: Student[]=[];

  // Creating object of the array for 2 way binding of the New and Edit Modals
  student: Student = new Student();

  constructor(private studentService: StudentServiceService) {
  }


  ngOnInit() {

    // Method to Initial and get the data from the Student Arrray located in the service
    this.studentService.getAllStudent().subscribe(dataFromOriginalArray =>{

      this.allStudents = dataFromOriginalArray;

    });

  }

  // End of Initialization


  // Method for deleting a student from the original array
  deleteMsg(id:number)
  {
     this.allStudents.splice(id, 1);
     alert("Confirm Delete")
  }

  // End of delete method



  // Method for adding a student to the original array
  addStudent(newStudent: Student, form: NgForm) {
    this.studentService.saveStudent(newStudent);
    document.getElementById('studentModal').click(); // this line close the modal after saving
    document.getElementById('editModal').click(); // this line close the modal after editing
     alert("Confirm Details before saving ") // Alert
  }

  // End of Adding Method



  // Implementing Filter Method
  filterStudent(searchName:string,searchYear: number,searchActive:string) {

    console.log(searchName);
    console.log(searchYear);
    console.log(searchActive);

   return this.allStudents.filter(student => student.name === searchName || student.year===searchYear || student.active===searchActive);
  }
// End of Filter Method



  // Method for editing a student in the original array
  editStudent(studentId: number){

       this.student = this.allStudents.find( student => student.id == studentId);

  }
// End of Editing Method


  // Method for Resetting a form
  cleanForm( form: NgForm){
    form.reset();
  }
}
// End of Resetting Method
