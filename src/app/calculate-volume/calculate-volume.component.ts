import { Component, signal } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { maxCubicVolume } from '../validators/maxCubicVolume.validators';
import { MatGridListModule } from '@angular/material/grid-list';
import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate-volume',
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    NativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    DecimalPipe,
    CurrencyPipe],
  templateUrl: './calculate-volume.component.html',
  styleUrl: './calculate-volume.component.css'
})
export class CalculateVolumeComponent {
  title = 'siroe_web';
  protected readonly value = signal('');

  constructor(private router: Router) { }

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  cubicVolumeForm = new FormGroup({
    height: new FormControl(0, [Validators.required, Validators.min(1)]),
    width: new FormControl(0, [Validators.required, Validators.min(1)]),
    length: new FormControl(0, [Validators.required, Validators.min(1)]),
  }, [maxCubicVolume(2000)]);


  onSubmit() {
    console.log(this.cubicVolumeForm)
    console.warn(this.cubicVolumeForm.valid);
    console.warn(this.cubicVolumeForm.value);
    const cubicValue = this.cubicVolumeForm.value;

    let numeroHeight = cubicValue.height ? cubicValue.height : 0;
    let numeroWidth = cubicValue.width ? cubicValue.width : 0;
    let numeroLength = cubicValue.length ? cubicValue.length : 0;
    let cubicVolume = numeroHeight * numeroWidth * numeroLength;
    let cubicPrice = cubicVolume * 100;

    this.router.navigate(['success-package'], {
      state: {
        ...cubicValue,
        cubicVolume,
        cubicPrice,
        createDate: new Date()
      }
    });
  }
}
