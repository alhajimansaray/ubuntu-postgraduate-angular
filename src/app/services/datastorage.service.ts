import { Injectable } from '@angular/core';
import {Student} from '../Modal/Student';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {
  StudentChanged = new Subject<Student[]>();
   students: Student[] = [];

  deleteStudent(index: number) {
    this.students.splice(index, 1)
    this.StudentChanged.next(this.students.slice());

  }
}
