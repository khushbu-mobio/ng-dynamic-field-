import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from './modules/form-builder/components/input/input.component';
import { ButtonComponent } from './modules/form-builder/components/button/button.component';
import { SelectComponent } from './modules/form-builder/components/select/select.component';
import { RadiobuttonComponent } from './modules/form-builder/components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './modules/form-builder/components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './modules/form-builder/directive/dynamic-field.directive';
import { DateComponent } from './modules/form-builder/components/date/date.component';
import { FileUploadComponent } from './modules/form-builder/components/file-upload/file-upload.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DateComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    FileUploadComponent
    ]
})
export class AppModule { }
