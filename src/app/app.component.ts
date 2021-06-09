import { Component, Input , OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StudentModel } from './student/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  employee = {
    name:"Ratherz",
    dev:"Code"
  }
  fiveBathlist = [4,10,8,20,50];
  oneBathlist: number[] = [];
  summary = 0;
  editStudent: StudentModel | null = null;

  ngOnInit(): void {
  }

  transform5BathToBath(){
    this.oneBathlist = this.fiveBathlist.map(num => {
      return num*5
    })
  }
  sum(){
    // let sumCost = 0;
    // for (let index = 0; index < this.fiveBathlist.length; index++) {
    //   sumCost = sumCost + this.fiveBathlist[index]*5;
    // }
    // this.summary = sumCost;

    this.summary = this.fiveBathlist.reduce((sumCost,num) =>{
      // sumCost = 0 num = 4  0+4*5
      // sumCost = 20 num = 10  20+10*5
      // sumCost = 70 num = 8  70+8*5
      // fiveBathlist = [4,10,8];
      return sumCost + num*5;
    },0)
  }
}
