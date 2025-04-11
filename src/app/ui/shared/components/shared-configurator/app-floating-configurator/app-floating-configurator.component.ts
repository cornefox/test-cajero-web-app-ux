import { Component, computed, inject } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-floating-configurator',
  standalone: false,
  templateUrl: './app-floating-configurator.component.html',
  styleUrl: './app-floating-configurator.component.scss',
})
export class AppFloatingConfiguratorComponent {
  LayoutService = inject(LayoutService);

  isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

  toggleDarkMode() {
    this.LayoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }
}
