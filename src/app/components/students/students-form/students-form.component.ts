import { Component, OnInit } from '@angular/core';
import {Student} from '../../../Modal/Student';
import {StudentServiceService} from '../../../services/student-service.service';





@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {


  constructor(private service: StudentServiceService) {
  }


  id: number;
  students: Student[];
  student: Student = new Student();
  newStudent: Student[] = [
    {name: 'Student 1', birthday: '01-01-1990', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {name: 'Student 2', birthday: '01-01-1985', locality: 'Makeni', year: '2020', university: 'Njala', active: 'yes'},
    {name: 'Student 3', birthday: '01-01-1980', locality: 'Freetown', year: '2020', university: 'Unimak', active: 'yes'},
  ];

  newStudents: Student[];


  ngOnInit() {
  }

  onDelete() {
    this.service.deleteStudent(this.id);
    alert('Proceed the with Delete');

  }

  save() {
    this.newStudent.push();
  }
  // @ts-ignore
  getAllStudent(id: number);
}
