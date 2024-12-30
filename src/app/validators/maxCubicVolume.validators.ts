import { AbstractControl, ValidationErrors } from "@angular/forms";

export const maxCubicVolume = (max: number) => (control: AbstractControl): ValidationErrors | null => {
  const cubicVolume = control.value.height * control.value.width * control.value.length;
  if (cubicVolume && cubicVolume >= max) {
    return { maxCubicVolume: { value: control.value } };
  }
  return null;
}