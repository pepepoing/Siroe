import { Routes } from '@angular/router';
import { CalculateVolumeComponent } from './calculate-volume/calculate-volume.component';
import { SuccessPackageComponent } from './success-package/success-package.component';

export const routes: Routes = [
    { path: 'calculate-volume', component: CalculateVolumeComponent },
    { path: 'success-package', component: SuccessPackageComponent },
];
