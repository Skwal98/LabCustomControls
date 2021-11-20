import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInputComponent } from './custom-controls-practice/my-input/my-input.component';
import { MainFormsPageComponent } from './form-controls-practice/main-forms-page/main-forms-page.component';
import { AllDisabledComponent } from './form-controls-practice/examples/all-disabled/all-disabled.component';

@NgModule({
  declarations: [AppComponent, MyInputComponent, MainFormsPageComponent, AllDisabledComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
