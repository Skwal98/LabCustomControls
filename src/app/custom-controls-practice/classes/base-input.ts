import { Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

export abstract class BaseInput implements ControlValueAccessor {
  protected control: NgControl;
  protected onChange = (value: any) => {};
  protected onTouched = () => {};

  constructor(control: NgControl) {
    control.valueAccessor = this;
    this.control = control;
  }

  abstract writeValue(obj: any): void;
  abstract setDisabledState(isDisabled: boolean): void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
