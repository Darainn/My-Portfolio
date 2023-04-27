import { Component } from '@angular/core';
import { projectsData } from 'src/core/data/projects-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projectsData = projectsData;
}
