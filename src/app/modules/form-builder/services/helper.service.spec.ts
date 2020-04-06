import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';


describe('service: HelperService', () => {
   
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(() => {
      
        TestBed.configureTestingModule({
          providers: [HelperService],
          imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
          ]
          
        }).compileComponents().then(() =>{
            
              fixture = TestBed.createComponent(AppComponent);
              component = fixture.componentInstance;
        });
      });

  it('should be created', () => {
    const service: HelperService = TestBed.get(HelperService);
    expect(service).toBeTruthy();
  });

});




  
   
