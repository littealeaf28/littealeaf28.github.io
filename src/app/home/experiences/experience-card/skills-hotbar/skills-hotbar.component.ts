import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-hotbar',
  templateUrl: './skills-hotbar.component.html',
  styleUrls: ['./skills-hotbar.component.scss']
})
export class SkillsHotbarComponent implements OnInit {
  @Input() skills: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
