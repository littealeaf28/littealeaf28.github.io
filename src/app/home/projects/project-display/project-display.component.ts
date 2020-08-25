import { Component, Input, OnInit } from '@angular/core';
import { Project, Projects } from '../project';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.scss']
})
export class ProjectDisplayComponent implements OnInit {
  @Input() project: Project = null;

  constructor() { }

  ngOnInit(): void {
  }

}
