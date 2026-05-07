import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>('data/projects.json');
    }
    getProjectBySlug(slug: string): Observable<Project | undefined> {
    return this.getProjects().pipe(map((projects) => projects.find((p) => p.slug === slug)));
    }
}
