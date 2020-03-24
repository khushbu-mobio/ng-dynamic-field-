import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

import { FieldSet } from './filedSet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-field-demo';

  config = new FieldSet();
  form: FormGroup
  
  constructor(private fb: FormBuilder) {}

  /**
   * set config to form
   */
  ngOnInit() {
    this.form = this.addControls(this.config);
  }

  
  public addControls(config) {
    const group = this.fb.group({});
    Object.keys(config).forEach(field => {
      if (config[field].type === 'button') {
        return;
      }
      const control = this.fb.control(
        config[field].value,
        this.bindValidations(config[field].validations || [])
      );
      group.addControl(config[field].name, control);
    });
    return group;
  }

  /**
   * Bind Validations
   * @param validations 
   */
  public bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }
}
