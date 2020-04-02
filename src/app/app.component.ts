import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { HelperService } from './modules/form-builder/services/helper.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  editId: any;
  title = 'dynamic-field-demo';
  filename: any;
  form: FormGroup
  data: any = [];
  edit = false
  config: any = [];
  
  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private helperService: HelperService) { }

  /**
   * get data from register.json and set in config 
   * and also set dynamically value for country and gender field 
   * and  add  Field dynamically
   */
  ngOnInit() {
    this.httpClient.get("assets/register.json").subscribe(data => {
      this.config = data;
      this.config['country'].options = [
        "India",
        "UAE",
        "UK",
        "US"
      ];
      this.config['gender'].options = ["Male", "Female"];
      this.form = this.helperService.addControls(this.config)
    })
  }

  /**
   * check unique email id and submit the form data and also edit value based on condition
   */
  onSubmit() {
    if (this.edit === false) {
      let result = this.data.filter(item => {
        return item.email === this.form.value.email
      });
      if (result.length > 0) {
        alert("email exits");
        return;
      }
      this.data.push(this.form.value);
    } else {
      this.data[this.editId].name = this.form.value.name;
      this.data[this.editId].email = this.form.value.email;
      this.data[this.editId].password = this.form.value.password;
      this.data[this.editId].gender = this.form.value.gender;
      this.data[this.editId].country = this.form.value.country;
      this.data[this.editId].term = this.form.value.term;
      this.data[this.editId].file = this.form.value.file;
    }
    this.form.reset();
  }

  /**
   * delete data by id 
   */
  deleteFieldValue(id) {
    this.data.splice(id, 1);
  }

  /**
   * edit data by id and disable email field during updating data
   */
  editFieldValue(id) {
    this.editId = id;
    this.edit = true
    let data = this.data[id];
    this.filename = this.data[id].file;
    this.form.controls['email'].disable();
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



