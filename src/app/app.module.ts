import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { SkillsComponent } from './skills/skills.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HistoryComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule, SharedModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [ FormBuilder, BaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
