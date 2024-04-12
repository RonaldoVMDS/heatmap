import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WifiDataComponent } from './pages/wifi-data/wifi-data.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registros', component: WifiDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
