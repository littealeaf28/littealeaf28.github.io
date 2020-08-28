import { Component, OnInit } from '@angular/core';
import { Project, ProjectIndex, Projects } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = Projects;
  selectProjectIndex: ProjectIndex = { project: null, index: -1 };

  constructor() { }

  ngOnInit(): void { }

  select(project: Project): void {
    const selectIndex = Projects.findIndex((proj: Project) => (proj === project));
    // If project is selected again, reset selectProjectIndex
    this.selectProjectIndex = (selectIndex === this.selectProjectIndex.index) ?
      { project: null, index: -1 } : { project, index: selectIndex };
  }
}
