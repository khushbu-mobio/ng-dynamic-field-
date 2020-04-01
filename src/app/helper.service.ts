import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormArray, ValidatorFn, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  /**add dynamic feild  */
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
   */
  public bindValidations(validations: any) {
    console.log("validation", validations);
    
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


