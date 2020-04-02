import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class HelperService {
  constructor(private fb: FormBuilder) { }

  /*
  *add dynamic field by field name
  */
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

      switch (config[field].name) {
      case 'name':
          group.addControl(config[field].name, control);
          break;
        case 'email':
            group.addControl(config[field].name, control)
          break;
        case 'password':
          group.addControl(config[field].name, control)
          break;
        case 'gender':
          group.addControl(config[field].name, control)
          break;
        case 'dob':
          group.addControl(config[field].name, control)
          break;
        case 'country':
          group.addControl(config[field].name, control)
          break;
        case 'term':
          group.addControl(config[field].name, control)
          break;
        case 'file':
          group.addControl(config[field].name, control)
          break;
        case 'button':
          group.addControl(config[field].name, control)
          break;
      }
    });
    return group;
  }
  /**
   * apply Validations to fields
   */
  public bindValidations(validations: any) {
    
    if (validations.length > 0) {
      const validList = [];
      validations.forEach((valid) => {
        if (valid.name === 'required') {
          validList.push(Validators.required);
        }
        if (valid.name === 'pattern') {
          validList.push(Validators.pattern(String(valid.validator)));
        }
      });
      return Validators.compose(validList);
    }
    return null;
  }
}


