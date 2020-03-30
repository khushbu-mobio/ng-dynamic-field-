import { Validators } from '@angular/forms';

export class FieldSet {
    id: number;
    inputConfig = {
        type: 'input',
        label: 'username',
        value: null,
        name: 'name',
        inputType: 'text',
        validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Name Required"
            },
            {
              name: "pattern",
              validator: Validators.pattern("^[a-zA-Z]+$"),
              message: "Accept only text"
            }
          ]
    };
    emailInputConfig = {
        type: "input",
        label: "Email Address",
        inputType: "email",
        name: "email", 
        validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Email Required"
            },
            {
              name: "pattern",
              validator: Validators.pattern(
                "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
              ),
              message: "Invalid email"
            }
          ]
    };
    passInputConfig = {
        type: "input",
        label: "Password",
        inputType: "password",
        name: "password",
        validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Password Required"
            }
          ]
    }
    radioConfig = {
        type: "radiobutton",
        label: "Gender",
        name: "gender",
        options: ["Male", "Female"],
        value: "Male"
    };
    dateConfig = {
        type: "date",
        label: "DOB",
        name: "dob",
        validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Date of Birth Required"
            }
          ]
    };
    dropdownConfig = {
        type: "select",
        label: "Country",
        name: "country",
        value: "UK",
        options: ["India", "UAE", "UK", "US"]
    };
    checkboxConfig = {
        type: "checkbox",
        label: "Accept Terms",
        name: "term",
        value: true
    };
    buttonConfig = {
        type: "button",
        label: "Save"
    }

    fileConfig = {
      type: "file",
      label: "File",
      inputType: 'file',
      name: "file",
      value: null,
  };
}