import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { ResponseAddStudent } from '../student/student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {

  emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
  nameFormControl = new FormControl(null, Validators.required);
  telFormControl = new FormControl(null, Validators.required);

  addStudentFormGroup = new FormGroup({
    email: this.emailFormControl,
    name: this.nameFormControl,
    tel: this.telFormControl,
  })

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private _location: Location,
    private router: Router, //RouterModule
    private studentService: StudentService,
    ) { }

  ngOnInit(): void {
  }

  saveStudent() {
    const student = this.addStudentFormGroup.value;

    // this.http.post<ResponseAddStudent>('/training-demo/student', student)
    this.studentService.addStudent(student)
      .subscribe(response => {
        // console.log("บันทึกสำเร็จ")
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'บันทึกสำเร็จแล้วว!' });
        // this.router.navigateByUrl('/student');
        this.router.navigate(['/student']);
      })
    // console.log(student)
  }

  backClicked() {
    this._location.back();
  }

  resetStudent() {
    this.addStudentFormGroup.reset();
  }

}
