import { Component, Input, OnInit } from '@angular/core';
import { ExperienceText } from '../../experiences';

@Component({
  selector: 'app-experience-text',
  templateUrl: './experience-text.component.html',
  styleUrls: ['./experience-text.component.scss']
})
export class ExperienceTextComponent implements OnInit {
  @Input() experienceText: ExperienceText;
  @Input() isCentered: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
