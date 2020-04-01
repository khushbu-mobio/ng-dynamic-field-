import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from "@angular/forms";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  field: any;
  group: FormGroup;
  change: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { 
  }
  
  /**onchange event */
  onChange(event) {
    this.change.emit(this.group.value);
  }

}