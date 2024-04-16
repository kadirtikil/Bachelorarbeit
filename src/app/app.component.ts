import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MetricsexplainedComponent } from './metricsexplained/metricsexplained.component';
import { MetricselectionComponent } from './metricselection/metricselection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    MetricsexplainedComponent, MetricselectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EGFuPSFrontend';
}
