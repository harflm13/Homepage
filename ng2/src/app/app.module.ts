import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UpdateComponent } from './update.component';

import { UpdateService } from './update.service';
import { HttpgetService } from './httpget.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
  providers: [UpdateService, HttpgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
