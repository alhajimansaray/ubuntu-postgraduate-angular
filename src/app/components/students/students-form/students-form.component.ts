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
    {name: 'Alhaji Mansaray', birthday: '01-01-1990', locality: 'Makeni', year: '2019', university: 'Njala', active: 'Yes'},
    {name: 'David S. Fornah', birthday: '01-01-1986', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {name: 'Momoh Sesay', birthday: '01-01-1985', locality: 'Makeni', year: '2020', university: 'Njala', active: 'Yes'},
    {name: 'Edward D. Thoronka', birthday: '01-01-1980', locality: 'Makeni', year: '2020', university: 'Njala', active: 'Yes'},
    {name: 'Andrew O. Kamara', birthday: '01-01-1990', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {name: 'John Kamara', birthday: '01-01-1984', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {name: 'Gibrilla Kanu', birthday: '01-01-1991', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
    {name: 'Khadijah Bah', birthday: '01-01-1993', locality: 'Makeni', year: '2019', university: 'Unimak', active: 'Yes'},
  ];

  newStudents: Student[];


  ngOnInit() {
  }

  onDelete() {
    this.service.deleteStudent(this.id);
    alert('Proceed with the Delete');

  }

  save() {
    this.newStudent.push();
  }
  // @ts-ignore
  geStudent(id: number);
}
