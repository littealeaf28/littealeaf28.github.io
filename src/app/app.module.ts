import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './home/experiences/experiences.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ExperienceCardComponent } from './home/experiences/experience-card/experience-card.component';
import { SkillsHotbarComponent } from './home/experiences/experience-card/skills-hotbar/skills-hotbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperiencesComponent,
    ExperienceCardComponent,
    SkillsHotbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
