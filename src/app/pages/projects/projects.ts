import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects$: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {
    this.projects$ = this.projectsService.getProjects();
  }
}
