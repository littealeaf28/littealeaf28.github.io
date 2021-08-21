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
import {ResumeComponent} from './resume/resume.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ExcitingComponent} from './exciting/exciting.component';
import {FunCarouselComponent} from './exciting/fun-carousel/fun-carousel.component';
import {TopicBulletinComponent} from './exciting/topic-bulletin/topic-bulletin.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';

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
    ResumeComponent,
    ExcitingComponent,
    FunCarouselComponent,
    TopicBulletinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule,
    PdfViewerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
