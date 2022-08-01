import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ExperiencesComponent} from './home/experiences/experiences.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {ExperienceCardComponent} from './home/experiences/experience-card/experience-card.component';
import {SkillsHotbarComponent} from './home/shared/skills-hotbar/skills-hotbar.component';
import {ProjectsComponent} from './home/projects/projects.component';
import {ProjectDisplayComponent} from './home/projects/project-display/project-display.component';
import {ProjectCardComponent} from './home/projects/project-card/project-card.component';
import {ExcitingComponent} from './exciting/exciting.component';
import {FunCarouselComponent} from './exciting/fun-carousel/fun-carousel.component';
import {TopicBulletinComponent} from './exciting/topic-bulletin/topic-bulletin.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {AngularFireAnalyticsModule, UserTrackingService} from '@angular/fire/analytics';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ExperienceTextComponent } from './home/experiences/experience-card/experience-text/experience-text.component';
import { ExperienceImageComponent } from './home/experiences/experience-card/experience-image/experience-image.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperiencesComponent,
    ExperienceCardComponent,
    SkillsHotbarComponent,
    ProjectsComponent,
    ProjectDisplayComponent,
    ProjectCardComponent,
    ExcitingComponent,
    FunCarouselComponent,
    TopicBulletinComponent,
    ExperienceTextComponent,
    ExperienceImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [
    { provide: BUCKET, useValue: 'littealeaf.appspot.com' },
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
