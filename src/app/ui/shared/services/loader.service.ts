import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private readonly loaderId: string = 'loader';

  public hideLoader(): void {
    const loaderElement: HTMLElement | null = document.getElementById(
      this.loaderId,
    );
    const classElement: string | null | undefined =
      loaderElement?.getAttribute('class');
    if (classElement?.includes('show')) {
      loaderElement?.classList.remove('show');
    }
  }

  public showLoader(): void {
    const loaderElement: HTMLElement | null = document.getElementById(
      this.loaderId,
    );
    const classElement: string | null | undefined =
      loaderElement?.getAttribute('class');
    if (!classElement?.includes('show')) {
      loaderElement?.classList.add('show');
    }
  }
}
