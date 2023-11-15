import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { StudentiComponent } from './components/studenti/studenti.component';
import { HttpClientModule } from '@angular/common/http';
import { ScienziatiComponent } from './components/scienziati/scienziati.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    StudentiComponent,
    ScienziatiComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
