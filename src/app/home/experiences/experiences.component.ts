import { Component, OnInit } from '@angular/core';
import { Experience, Experiences } from './experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = Experiences;

  constructor() { }

  ngOnInit(): void {
  }

}
