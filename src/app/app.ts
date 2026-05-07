import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-sebas');
  protected readonly scrollProgress = signal(0);
  protected readonly routeTransitioning = signal(false);
  protected readonly isPreloading = signal(true);
  private routeTransitionTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    setTimeout(() => this.isPreloading.set(false), 1100);
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  protected updateScrollProgress(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

    this.scrollProgress.set(Math.min(1, Math.max(0, progress)));
  }

  protected onRouteActivate(): void {
    this.routeTransitioning.set(false);

    if (this.routeTransitionTimer) {
      clearTimeout(this.routeTransitionTimer);
    }

    requestAnimationFrame(() => {
      this.routeTransitioning.set(true);
      this.routeTransitionTimer = setTimeout(() => this.routeTransitioning.set(false), 560);
    });
  }
}
