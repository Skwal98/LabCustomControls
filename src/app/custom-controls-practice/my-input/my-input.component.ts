import { Component, forwardRef, OnInit, Optional, Self } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { BaseInput } from '../classes/base-input';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
  /* accept NgControl in ctor instead
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true,
    },
  ],*/
})
export class MyInputComponent extends BaseInput implements OnInit {
  value: string = '';
  disabled = false;

  constructor(
    @Self() @Optional() control: NgControl,
    controlContainer: ControlContainer
  ) {
    super(control);
  }

  get isValid(): boolean | null {
    return !this.control.invalid;
  }

  //value updated in formsApi
  writeValue(obj: any): void {
    console.log('invoked write value');
    this.value = obj;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onInputChange(event: any) {
    this.onChange(this.value);
  }

  onFocus() {
    this.onTouched();
  }

  ngOnInit(): void {}
}
