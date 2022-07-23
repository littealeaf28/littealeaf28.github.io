import { Component, OnInit } from '@angular/core';
import { Experience, graphicsExperiences, miscExperiences, networksExperiences, softwareDevExperiences } from './experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  softwareDevExperiences: Experience[] = softwareDevExperiences;
  graphicsExperiences: Experience[] = graphicsExperiences;
  networksExperiences: Experience[] = networksExperiences;
  miscExperiences: Experience[] = miscExperiences;

  constructor() { }

  ngOnInit(): void {
  }

}
