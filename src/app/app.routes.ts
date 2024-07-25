import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactanosPageComponent } from './components/contactanos-page/contactanos-page.component';
import { DisenosPageComponent } from './components/disenos-page/disenos-page.component';
import { FormCreateComponent } from './components/login-page/form-create/form-create.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ResetPasswordPageComponent } from './components/login-page/reset-password-page/reset-password-page.component';
import { ClasicasPageComponent } from './components/pestanas-page/clasicas-page/clasicas-page.component';
import { EfectoPageComponent } from './components/pestanas-page/efecto-page/efecto-page.component';
import { HibridaPageComponent } from './components/pestanas-page/hibrida-page/hibrida-page.component';
import { PestanasPageComponent } from './components/pestanas-page/pestanas-page.component';
import { VolumenPageComponent } from './components/pestanas-page/volumen-page/volumen-page.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { AcrilicasPageComponent } from './components/unas-page/acrilicas-page/acrilicas-page.component';
import { ExfoliacionPageComponent } from './components/unas-page/exfoliacion-page/exfoliacion-page.component';
import { GelPageComponent } from './components/unas-page/gel-page/gel-page.component';
import { ManicurePageComponent } from './components/unas-page/manicure-page/manicure-page.component';
import { Unas3dPageComponent } from './components/unas-page/unas3d-page/unas3d-page.component';
import { Unas5dPageComponent } from './components/unas-page/unas5d-page/unas5d-page.component';
import { NivelacionPageComponent } from './components/unas-page/nivelacion-page/nivelacion-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: HomePageComponent},
    {path: 'unas/manicure', component: ManicurePageComponent},
    {path: 'unas/acrilicas', component: AcrilicasPageComponent},
    {path: 'unas/exfoliacion', component: ExfoliacionPageComponent},
    {path: 'unas/nivelacion', component: NivelacionPageComponent},
    {path: 'unas/gel', component: GelPageComponent},
    {path: 'unas/unas3d', component: Unas3dPageComponent},
    {path: 'unas/unas5d', component: Unas5dPageComponent},
    {path: 'pestanas/clasicas', component: ClasicasPageComponent},
    {path: 'pestanas/volumen', component: VolumenPageComponent},
    {path: 'pestanas/hibrida', component: HibridaPageComponent},
    {path: 'pestanas/efecto', component: EfectoPageComponent},
    {path: 'disenos', component: DisenosPageComponent},
    {path: 'reservacion', component: ReservationPageComponent},
    {path: 'contactanos', component: ContactanosPageComponent},
    {path: 'pestanas', component: PestanasPageComponent},
    {path: 'disenos', component: DisenosPageComponent},
    {path: 'reservacion', component: ReservationPageComponent},
    {path: 'contactanos', component: ContactanosPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'login/create', component: FormCreateComponent},
    {path: 'login/resetpassword', component: ResetPasswordPageComponent}
];
