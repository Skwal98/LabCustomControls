import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-disabled',
  templateUrl: './all-disabled.component.html',
  styleUrls: ['./all-disabled.component.scss'],
})
export class AllDisabledComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('Alex'),
    lastName: new FormControl('Last'),
    age: new FormControl('25'),
  });

  constructor() {}

  ngOnInit(): void {}

  get formValue(): string {
    return JSON.stringify(this.formGroup.value);
  }

  get formRawValue(): string {
    return JSON.stringify(this.formGroup.getRawValue());
  }

  toggleForm(val: boolean) {
    this.formGroup[val ? 'enable' : 'disable']();
  }

  toggleFirstName(val: boolean) {
    this.firstNameControl[val ? 'enable' : 'disable']();
  }

  toggleFirstNameOnlySelf(val: boolean) {
    this.firstNameControl[val ? 'enable' : 'disable']({ onlySelf: true });
  }

  setValueFirstName() {
    this.firstNameControl.setValue(makeid(5));
  }
  setValueFirstNameOnlySelf() {
    this.firstNameControl.setValue(makeid(5), { onlySelf: true });
  }

  public get firstNameControl(): FormControl {
    return this.formGroup.controls['firstName'] as FormControl;
  }
}

function makeid(length: any) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
