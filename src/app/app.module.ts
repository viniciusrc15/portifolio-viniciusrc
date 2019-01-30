import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { SkillsComponent } from './skills/skills.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HistoryComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule, SharedModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
