import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ResponseAddStudent, ResponseEditStudent } from '../student/student';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
  nameFormControl = new FormControl(null, Validators.required);
  telFormControl = new FormControl(null, Validators.required);

  editStudentFormGroup = new FormGroup({
    id: new FormControl(),
    version: new FormControl(),
    email: this.emailFormControl,
    name: this.nameFormControl,
    tel: this.telFormControl,
  })

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private _location: Location,
    private router: Router, //RouterModule,
    private route: ActivatedRoute,
    private appComponent: AppComponent,
    private studentService: StudentService,
    ) {
      // console.log(this.appComponent.editStudent)
      const student = this.appComponent.editStudent
      // this.nameFormControl.setValue(student?.name)
      // this.emailFormControl.setValue(student?.email)
      // this.telFormControl.setValue(student?.tel)
      if(student){
        this.editStudentFormGroup.patchValue(student);
      }
      // console.log(this.route.snapshot.queryParamMap.get('id'))
    }

  ngOnInit(): void {
  }

  saveStudent() {
    const student = this.editStudentFormGroup.value;

    // this.http.put<ResponseEditStudent>('/training-demo/student', student)
    this.studentService.editStudent(student)
      .subscribe(response => {
        // console.log("บันทึกสำเร็จ")
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'บันทึกสำเร็จแล้วว!' });
        this.editStudentFormGroup.patchValue({
          version: response.result.version,
        });
        // this.router.navigateByUrl('/student');
        // this.router.navigate(['/student']);
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity:'error',
          summary: 'Error',
          detail: 'แก้ไขผิดพลาด '+ error.statusText});
      }
    )
    // console.log(student)
  }

  backClicked() {
    this._location.back();
  }

  resetStudent() {
    this.editStudentFormGroup.reset();
  }

}
