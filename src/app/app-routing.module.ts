import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyHomeComponent } from './my-home/my-home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'myProfile',component: MyProfileComponent},
      { path: 'myHome',component: MyHomeComponent},
      { path: '',redirectTo:'/myHome',pathMatch: 'full'},

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
