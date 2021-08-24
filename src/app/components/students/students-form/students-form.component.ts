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


  student: Student = new Student();
  newStudent: Student[] = [
    {id: 1, name: 'Alhaji Mansaray', birthday: '01-01-1990', locality: 'Makeni', year: '2019', university: 'Njala', active: 'Yes'},
    {id: 2, name: 'David S. Fornah', birthday: '01-01-1986', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {id: 3, name: 'Momoh Sesay', birthday: '01-01-1985', locality: 'Makeni', year: '2020', university: 'Njala', active: 'Yes'},
    {id: 4, name: 'Edward D. Thoronka', birthday: '01-01-1980', locality: 'Makeni', year: '2020', university: 'Njala', active: 'Yes'},
    {id: 5, name: 'Andrew O. Kamara', birthday: '01-01-1990', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {id: 6, name: 'John Kamara', birthday: '01-01-1984', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {id: 7, name: 'Gibrilla Kanu', birthday: '01-01-1991', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {id: 8, name: 'Khadijah Bah', birthday: '01-01-1993', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'}
  ];



  ngOnInit() {
  }



  deleteMsg(id:number)
  {
    this.newStudent.splice(id, 1);

    alert("Confirm Delete")
  }

  addStudent(newStudent: Student) {
    this.newStudent.push(newStudent);
    alert("Confirm Details before saving ")


  }


}
