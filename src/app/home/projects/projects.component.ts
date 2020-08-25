import { Component, OnInit } from '@angular/core';
import { Project, Projects } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = Projects;
  selectProjectIndex: { project: Project, index: number } = { project: null, index: -1 };

  constructor() { }

  ngOnInit(): void { }

  select(project: Project): void {
    this.selectProjectIndex = {
      project, index: Projects.findIndex((proj: Project) => proj === project)
    };
  }
}
