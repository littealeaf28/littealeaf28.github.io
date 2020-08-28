import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit(): void { }
}
