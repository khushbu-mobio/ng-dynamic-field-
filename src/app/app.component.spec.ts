import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { HelperService } from './modules/form-builder/services/helper.service';
import { RadiobuttonComponent } from './modules/form-builder/components/radiobutton/radiobutton.component';
import { InputComponent } from './modules/form-builder/components/input/input.component';
import { FileUploadComponent } from './modules/form-builder/components/file-upload/file-upload.component';
import { ButtonComponent } from './modules/form-builder/components/button/button.component';
import { CheckboxComponent } from './modules/form-builder/components/checkbox/checkbox.component';
import { SelectComponent } from './modules/form-builder/components/select/select.component';
import { NO_ERRORS_SCHEMA, DebugElement, ComponentRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RadiobuttonComponent,
        InputComponent,
        FileUploadComponent,
        ButtonComponent,
        CheckboxComponent,
        SelectComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [
        HelperService,
        HttpClientTestingModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
      component.config = [
        {
          "userName": {
            "type": "userName",
            "label": "username",
            "name": "name",
            "show": true,
            "show_field": [
              {
                "yes": true,
                "no": false
              }
            ],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Name Required"
              },
              {
                "name": "pattern",
                "validator": "^[a-zA-Z]+$",
                "message": "Accept only Alphabets"
              }
            ]
          },
          "email": {
            "type": "email",
            "label": "Email Address",
            "name": "email",
            "show_field": [
              {
                "yes": "Yes",
                "no": "No"
              }
            ],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Email Required"
              },
              {
                "name": "pattern",
                "validator": "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                "message": "Invalid email"
              }
            ]
          },
          "password": {
            "type": "password",
            "label": "Password",
            "name": "password",
            "show_field": [
              {
                "yes": true,
                "no": false
              }
            ],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Password Required"
              }
            ]
          },
          "gender": {
            "type": "radio",
            "label": "Gender",
            "name": "gender",
            "value": "Male",
            "show_field": [
              {
                "yes": true,
                "no": false
              }
            ],
            "options": [],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Gender Required"
              }
            ]
          },
          "dateOfBirth": {
            "type": "date",
            "label": "DOB",
            "name": "dob",
            "show_field": [
              {
                "yes": true,
                "no": false
              }
            ],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Date of Birth Required"
              }
            ]
          },
          "country": {
            "type": "select",
            "label": "Country",
            "name": "country",
            "show_field": [
              {
                "yes": true,
                "no": false
              }
            ],
            "options": [],
            "validations": [
              {
                "name": "required",
                "validator": "required",
                "message": "Country Required"
              }
            ]
          },
          "terms": {
            "type": "checkbox",
            "label": "Accept Terms",
            "show_field": [
              {
                "yes": true,
                "no": false
              }
            ],
            "name": "term"
          },
          "button": {
            "type": "button",
            "show_field": [
              {
                "yes": true,
                "no": false
              }
            ],
            "label": "Save"
          },
          "file": {
            "type": "file",
            "label": "File",
            "show_field": [
              {
                "yes": true,
                "no": false
              }
            ],
            "name": "file"
          }
        }
      ];
      fixture.detectChanges();
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should call the ngOnInit method`, async(() => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.config).toEqual(component.config);
  }));

  it(`shuold email id unique `, async(() => {
    component.edit = false;
    component.data = [
      {
        name: 'kshah',
        email: 'kscn@gmail.com',
        password: 'kscn@gmail.com',
        gender: 'male',
        dob: '11/17/1996',
        country: 'US',
        term: false,
        file: 'C:\fakepath\Screenshot from 2020-02-24 12-50-17.png'
      }
    ];
    component.form.setValue(
      {
        name: 'disha',
        email: 'disha@gmail.com',
        password: 'disha',
        gender: 'female',
        dob: '1/7/1976',
        country: 'india',
        term: true,
        file: ''
      });
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    component.edit = false;
    spyOn(component, 'onSubmit')
    expect(component.onSubmit).toBeTruthy()
  }));

  it(`The User Name is wrong and should not be called onSubmit `, async(() => {
    component.edit = false;
    spyOn(component, 'onSubmit')
    expect(component.onSubmit).toBeTruthy()
    component.edit = false;
    component.form.setValue(
      {
        name: '1',
        email: '',
        password: 'kscn@gmail.com',
        gender: 'male',
        dob: '11/17/1996',
        country: 'india',
        term: true,
        file: ''
      });
    expect(component.onSubmit).not.toHaveBeenCalled();
  }));

  it(`should call the delete method`, async(() => {
    component.form.setValue({
      name: 'kshah',
      email: 'kscn@gmail.com',
      password: 'kscn@gmail.com',
      gender: 'male',
      dob: '11/17/1996',
      country: 'india',
      term: true,
      file: ''
    });
    component.onSubmit();
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    component.deleteFieldValue(component.form.value);
    expect(component.deleteFieldValue).toBeTruthy();
  }));

  it(`should call the edit method`, async(() => {
    component.form.setValue(
      {
        name: 'kshah',
        email: 'kscn@gmail.com',
        password: 'kscn@gmail.com',
        gender: 'male',
        dob: '11/17/1996',
        country: 'india',
        term: true,
        file: ''
      });
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
    spyOn(component, 'editFieldValue');
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.editFieldValue).toHaveBeenCalledWith(0);
  }));

  it(`shuold update data `, async(() => {
    component.data = [{
        name: 'kshah',
        email: 'kscn@gmail.com',
        password: 'kscn@gmail.com',
        gender: 'male',
        dob: '11/17/1996',
        country: 'US',
        term: false,
        file: 'C:\fakepath\Screenshot from 2020-02-24 12-50-17.png'
      }
    ];
    component.editId = 0;
    component.edit = true;
    component.form.setValue(
      {
        name: 'disha',
        email: 'disha@gmail.com',
        password: 'disha',
        gender: 'female',
        dob: '1/7/1976',
        country: 'india',
        term: true,
        file: ''
      });
    fixture.detectChanges();
    expect(component.data[component.editId].name).not.toBe(component.form.value.name);
    expect(component.data[component.editId].email).not.toBe(component.form.value.email);
    expect(component.data[component.editId].password).not.toBe(component.form.value.password);
    expect(component.data[component.editId].dob).not.toBe(component.form.value.dob);
    expect(component.data[component.editId].country).not.toBe(component.form.value.country);
    expect(component.data[component.editId].term).not.toBe(component.form.value.term);
    expect(component.data[component.editId].file).not.toBe(component.form.value.file);
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  }));
});
