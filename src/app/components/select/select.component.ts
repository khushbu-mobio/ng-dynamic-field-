import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  field: any;
  group: FormGroup;
  change: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
   /**
   * On chnage event
   * @param event
   */
  onChange(event) {
    this.change.emit(this.group.value);
  }

}
