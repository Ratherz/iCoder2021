import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';
import { StudentService } from '../student.service';
import { ResponseStudentAll, StudentModel, Student, StudentAllCondition, } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // student: Student = {
  //   name: '',
  //   tel: '',
  //   email: '',
  //   createDate: new Date()
  // };

  studentsModel: StudentModel[] = [];
  nameFormControl = new FormControl();
  emailFormControl = new FormControl();
  telFormControl = new FormControl();

  studentConditionFormControl = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    tel: this.telFormControl
  });



  constructor(private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
    private appComponent: AppComponent,
    private studentService: StudentService,
    ) {
    // this.students.forEach(students =>{
    //   students.name
    // })


  }

  ngOnInit(): void {
  }

  queryStudent() {
    // console.log(this.nameFormControl.value)
    // console.log(this.emailFormControl.value)
    // console.log(this.telFormControl.value)

    const name = this.nameFormControl.value
    const email = this.emailFormControl.value
    const tel = this.telFormControl.value

    const condition: StudentAllCondition = {};


    if (name) {
      condition.name = name;
    }
    if (email) {
      condition.email = email;
    }
    if (tel) {
      condition.tel = tel;
    }

    const httpParams = new HttpParams({ fromObject: (condition as any) });


    // this.http.get<ResponseStudentAll>("/training-demo/student/all", {
    //   params: httpParams
    // })
    this.studentService.getStudentAll(condition)
    .subscribe(
      response => {
        // console.log(response)
        this.studentsModel = response.result
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity:'error',
          summary: 'Error',
          detail: 'ค้นหาผิดพลาด '+ error.statusText});
      }
    )

  }

  clearStudent() {
    // console.log(this.studentConditionFormControl)
    this.studentsModel = [];
    // this.nameFormControl.reset();
    // this.emailFormControl.reset();
    // this.telFormControl.reset();
    this.studentConditionFormControl.reset();

  }

  deleteStudent(student: StudentModel){
    this.studentService.deleteStudent(student.id)
    .subscribe(response => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'ลบสำเร็จแล้ววว'});

      const index = this.studentsModel.findIndex(model => model.id === student.id)
      if(index >= 0 ){
        this.studentsModel.splice(index, 1);
      }

      // this.queryStudent();
    })
  }

  editStudent(student: StudentModel){
    this.appComponent.editStudent = student;
    this.router.navigate(['/edit'])
  }
}
