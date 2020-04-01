import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';
import { SelectComponent } from '../components/select/select.component';
import { DateComponent } from '../components/date/date.component';
import { RadiobuttonComponent } from '../components/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';


const componentMapper = {
  userName: InputComponent,
  password: InputComponent,
  email: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radio: RadiobuttonComponent,
  checkbox: CheckboxComponent,
  file: FileUploadComponent
};
@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  /**
   * receive the input from the parent component 
   * and assign it to the corresponding field component.
   */
  @Input() field: any;
  @Input() group: FormGroup;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  /**
   *  maintains the instance of dynamically created component.
   */
  componentRef: any;

  /**
   * 
   * @param resolver the component at runtime
   * @param container  gain access to the view container of the element
   */
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {

    /**
     * create the component factory
     */
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );

    /**
     * component from the component factory.
     */
    this.componentRef = this.container.createComponent(factory);

    /**
     * Pass field properties into dynamically created component
     */
    this.componentRef.instance.field = this.field;

    /**
     * Pass  group properties into dynamically created component
     */
    this.componentRef.instance.group = this.group;


    switch (this.field.type) {
      case 'userName':
        this.componentRef.instance.change = this.change;
        break;
      case 'email':
        this.componentRef.instance.change = this.change;
        break;
      case 'password':
        this.componentRef.instance.change = this.change;
        break;
      case 'radio':
        this.componentRef.instance.change = this.change;
        break;
      case 'date':
        this.componentRef.instance.change = this.change;
        break;
      case 'select':
        this.componentRef.instance.change = this.change;
        break;
      case 'checkbox':
        this.componentRef.instance.change = this.change;
        break;
      case 'file':
        this.componentRef.instance.change = this.change;
        break;
      case 'button':
        this.componentRef.instance.change = this.change;
        break;

    }
  }
}