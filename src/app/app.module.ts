import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VcApiConstants } from './utils/VcApiConstants';
import { HttpClientModule } from '@angular/common/http';
import { VcConstants } from './utils/vc-Constants';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule
    
  ],
  providers: [VcApiConstants, VcConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
