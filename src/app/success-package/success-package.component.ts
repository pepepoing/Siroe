import { Component } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-success-package',
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
    DatePipe,
    MatListModule,
    DecimalPipe,
    CurrencyPipe, 
    RouterLink],
  templateUrl: './success-package.component.html',
  styleUrl: './success-package.component.css'
})
export class SuccessPackageComponent {
  title = 'siroe_web';
  protected readonly volumenData:any = {};

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()); 
    this.volumenData = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.volumenData); 
  }
  

  onSubmit() {
    this.router.navigate(['success-package']);
  }
}
