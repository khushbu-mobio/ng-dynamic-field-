import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { FieldSet } from './filedSet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  editIndex: any;
  title = 'dynamic-field-demo';
  filename: any;
  config = new FieldSet();
  form: FormGroup
  data: any = [];
  edit = false
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
    if (this.edit === false) {
      let result = this.data.filter(item => {
        return item.email === this.form.value.email
      });
      console.log("svae call", this.form.value);
      console.log("result demo", result);
      if (result.length > 0) {
        alert("email exits");
        return;
      }
      this.data.push(this.form.value);
    } else {
      console.log("edit calllind ele");
      this.data[this.editIndex].name = this.form.value.name;
      this.data[this.editIndex].email = this.form.value.email;
      this.data[this.editIndex].password = this.form.value.password;
      this.data[this.editIndex].gender = this.form.value.gender;
      this.data[this.editIndex].country = this.form.value.country;
      this.data[this.editIndex].term = this.form.value.term;
      this.data[this.editIndex].file = this.form.value.file;
    }
    this.form.reset();
    // console.log("cjheck===", result.length > 0 ? 'exit' : 'not');
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
    this.data.splice(index, 1);
  }

  /**
   * edit data
   */
  editFieldValue(index) {
    this.editIndex = index;
    this.edit = true
    console.log("edit called");
    let data = this.data[index];
    this.filename = this.data[index].file;
    console.log("dastata", data);
    this.form.patchValue({
      name: data.name,
      email: data.email,
      password: data.password,
      gender: data.gender,
      dob: data.dob,
      country: data.country,
      term: data.term,
    })
  }
}