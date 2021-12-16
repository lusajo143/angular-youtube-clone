import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule }  from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatInputModule } from '@angular/material/input';
import { BodyComponent } from './body/body.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'



const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  FlexLayoutModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
