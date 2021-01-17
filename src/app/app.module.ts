import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { AgGridModule } from 'ag-grid-angular';
import { MyCarrerComponent } from './my-carrer/my-carrer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMenuComponent,
    MyEducationComponent,
    MyCarrerComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
