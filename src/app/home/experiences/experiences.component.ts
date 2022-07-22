import { Component, OnInit } from '@angular/core';
import { Experience, graphicsExperiences, softwareDevExperiences } from './experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  softwareDevExperiences: Experience[] = softwareDevExperiences;
  graphicsExperiences: Experience[] = graphicsExperiences;

  constructor() { }

  ngOnInit(): void {
  }

}
