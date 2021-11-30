import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthletesComponent } from './components/athletes/athletes.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
  { path: '', redirectTo: '/athletes', pathMatch: 'full' },
  { path: 'settings', component: SettingComponent },
  { path: 'athletes', component: AthletesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
