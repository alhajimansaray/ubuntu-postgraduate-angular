

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
}
