import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  project$: Observable<Project | undefined>;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const slug = params.get('slug') ?? '';
        return this.projectsService.getProjectBySlug(slug);
      })
    );
  }
}
