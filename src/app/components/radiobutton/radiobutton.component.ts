import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/fieldConfig.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
