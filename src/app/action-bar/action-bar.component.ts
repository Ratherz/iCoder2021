import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  cost = 0;
  @Input() step = 1;
  @Input() notBelow = 0;
  @Input() notMore: null | Number = null;

  @Output() numberChange = new EventEmitter();
  @Input() get number(){
    return this.cost;
  }

  set number(value: number){
    this.cost = value;
  }
  // _componentName = "action-bar";
  // get componentName(){
  //   return this._componentName;
  // }

  // set componentName(value:string){
  //   this._componentName = value;
  // }

  constructor() { }

  ngOnInit(): void {
    // console.log(this.number)
    this.cost = this.number;
    // console.log(this.componentName);
    // this.componentName = 'none';
  }

  decrease() {
    if (this.cost - this.step >= this.notBelow) {
      this.cost = this.cost - this.step;
    }
    this.numberChange.emit(this.cost);
  }

  increase() {
    if (this.notMore === null) {
      this.cost = this.cost + this.step;
    }
    else if ((this.cost + this.step) <= this.notMore) {
      this.cost = this.cost + this.step;
    }
    this.numberChange.emit(this.cost);
    // if(this.cost - this.step < this.notMore){
    // }
    // if( this.cost + this.step <= this.notMore){
    //   this.cost = this.cost + this.step;
    // }
  }
}
