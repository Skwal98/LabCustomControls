import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroup: FormGroup = new FormGroup({
    text: new FormControl('initial value', Validators.required),
    second: new FormControl('second value'),
  });

  emitValue() {
    console.log(this.formGroup.value);
    console.log(this.textControl);
  }

  toggleControl() {
    if (this.textControl.disabled) {
      this.textControl.enable();
    } else {
      this.textControl.disable();
    }
  }

  get textControl(): FormControl {
    return this.formGroup.controls['text'] as FormControl;
  }
}
