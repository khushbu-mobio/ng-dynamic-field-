import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { FieldSet } from './filedSet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  editIndex: any;
  title = 'dynamic-field-demo';
  filename: any;
  // config = new FieldSet();
  form: FormGroup
  data: any = [];
  edit = false
  config: any = [];
  ///
  userName = true;
  email = false;
  passowrd = false;
  gender = false;
  dob = false;
  country = false;
  term = false;
  file = false;
  save = false;
  //
  constructor(private fb: FormBuilder, private httpClient: HttpClient,
    private helperService: HelperService) { }

  /**
   * set config to form
   */
  ngOnInit() {
    // this.form = this.addControls(this.config);

    this.httpClient.get("assets/register.json").subscribe(data => {
      this.config = data;
      this.config['country'].options = [
        "India",
        "UAE",
        "UK",
        "US"
      ];
      this.config['gender'].options = ["Male", "Female"];
      // this.form = this.addControls(this.config)
      this.form = this.helperService.addControls(this.config)

    })
  }

  userNameChange($event) {
    console.log("Change called in app");
    // //this.form.controls['email'].enable();
    this.email = true;

  }
  emailChange($event) {
    this.passowrd = true;
  }
  passwordChange($event) {
    this.gender = true;
  }
  genderChange($event) {
    this.dob = true;
  }
  dobChange($event) {

    console.log("date");
    this.country = true;
  }
  countryChange($event) {
    this.term = true;
  }
  termChange($event) {
    this.file = true;
  }
  fileChange($event) {
    this.save = true;
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
    let data = this.data[index];
    this.filename = this.data[index].file;
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



