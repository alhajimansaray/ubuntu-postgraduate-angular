// @ts-ignore
// @ts-ignore
// @ts-ignore

import { Injectable } from '@angular/core';
import {Student} from "../Modal/Student";
import {Observable, from} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private  studentList: Student[] = [
    {id: 1, name: 'Alhaji Mansaray', birthday: '01-01-1990', locality: 'Makeni', year: '2021', university: 'Njala', active: 'Yes'},
    {id: 2, name: 'David S. Fornah', birthday: '01-01-1986', locality: 'Makeni', year: '2021', university: 'Unimak', active: 'Yes'},
    {id: 3, name: 'Momoh Sesay', birthday: '01-01-1985', locality: 'Makeni', year: '2021', university: 'Njala', active: 'Yes'},
    {id: 4, name: 'Edward D. Thoronka', birthday: '01-01-1980', locality: 'Makeni', year: '2021', university: 'Njala', active: 'Yes'},
    {id: 5, name: 'Andrew O. Kamara', birthday: '01-01-1990', locality: 'Makeni', year: '2021', university: 'Unimak', active: 'Yes'},
    {id: 6, name: 'John Kamara', birthday: '01-01-1984', locality: 'Makeni', year: '2021', university: 'Unimak', active: 'Yes'},
    {id: 7, name: 'Gibrilla Kanu', birthday: '01-01-1991', locality: 'Makeni', year: '2021', university: 'Unimak', active: 'Yes'},
    {id: 8, name: 'Khadijah Bah', birthday: '01-01-1993', locality: 'Makeni', year: '2021', university: 'Unimak', active: 'Yes'}
  ];


  constructor() {
  }

  //this method return all the students

  getAllStudent(): Observable<Student[]>{
    return from([this.studentList]);
  }


  saveStudent(newStudent: Student){

    this.studentList.push(newStudent);
  }

  filterStudent(searchName:string,searchYear: number,searchActive:string): Student[]{
    return null;
  }

}
