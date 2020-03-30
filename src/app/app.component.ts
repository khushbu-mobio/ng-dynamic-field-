import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

import { FieldSet } from './filedSet';
import { FieldConfig } from './fieldConfig.interface';
import { Data } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-field-demo';

  config = new FieldSet();
  form: FormGroup
  data: any = [];
  constructor(private fb: FormBuilder) { }
  /**
   * set config to form
   */
  ngOnInit() {
    this.form = this.addControls(this.config);
  }

  onSubmit() {
    /**
     * check unique email id
     */
    let result = this.data.filter(item => {
      // console.log("item", item.email, this.form.value.email);
      return item.email === this.form.value.email
    });
    console.log("svae call", this.form.value);
    console.log("result demo", result);
    if (result.length > 0) {
      alert("email exits");
      return;
    }
    this.data.push(this.form.value);
    this.form.reset();

    console.log("cjheck===", result.length > 0 ? 'exit' : 'not');
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
  /**
   * delete data
   */
  deleteFieldValue(index) {
    console.log("delete called");

    this.data.splice(index, 1);
  }

  /**
   * edit data
   */
  editFieldValue(index) {
    console.log("edit called");
    let data = this.data[index];
    console.log("dastata", data);
    this.form.patchValue({
      name : data.name,
      email : data.email,
      password: data.password,
      gender : data.gender,
      dob : data.dob,
      country: data.country,
      term: data.term,
      // file: data.file

    })
  //  this.form.value.file = "C:\fakepath\Screenshot from 2020-03-30 09-21-38.png";
    // this.config['fileConfig'].value = data.file;
    // this.form.controls['file'].setValue(data.file);
  }
}