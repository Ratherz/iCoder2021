import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAddStudent, ResponseEditStudent, ResponseStudentAll } from './student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentAll(condition: {name?:string, email?:string, tel?:string}){
    const httpParams = new HttpParams({ fromObject: (condition as any) });
    return this.http.get<ResponseStudentAll>("/training-demo/student/all", {
      params: httpParams
    });
  }

  deleteStudent(id: number){
    return this.http.delete(`/training-demo/student/${id}`)
  }

  addStudent(student: {name?:string, email?:string, tel?:string}){
    return this.http.post<ResponseAddStudent>('/training-demo/student', student)
  }

  editStudent(student: {name?:string, email?:string, tel?:string, version?:number, id?:number}){
    return this.http.put<ResponseEditStudent>('/training-demo/student', student)
  }
}
