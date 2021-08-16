// @ts-ignore
// @ts-ignore
// @ts-ignore

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Student} from '../Modal/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() {
  }


  StudentChanged = new Subject<Student[]>();
  newStudent: Student[] = [];

  deleteStudent(index: number) {
    this.newStudent.splice(index, 1);
    this.StudentChanged.next(this.newStudent.slice());
  }

  save(newStudent: Student) {
    this.newStudent.unshift(newStudent);
  }

  getAllStudent(id: number) {
    return this.newStudent;
  }


}
