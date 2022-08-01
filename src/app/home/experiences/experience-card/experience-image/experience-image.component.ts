import { Component, Input, OnInit } from '@angular/core';
import { ExperienceImage } from '../../experiences';

@Component({
  selector: 'app-experience-image',
  templateUrl: './experience-image.component.html',
  styleUrls: ['./experience-image.component.scss']
})
export class ExperienceImageComponent implements OnInit {
  @Input() experienceImage: ExperienceImage;

  constructor() { }

  ngOnInit(): void {
  }

}
