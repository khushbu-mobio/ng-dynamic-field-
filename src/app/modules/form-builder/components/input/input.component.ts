import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  field: any;
  group: FormGroup;
  

  constructor() { }

  ngOnInit() { 
  }
  

}