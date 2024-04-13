import { Component, SecurityContext } from '@angular/core';
import { MarkdownModule, } from 'ngx-markdown';

@Component({
  selector: 'app-metricsexplained',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './metricsexplained.component.html',
  styleUrl: './metricsexplained.component.scss'
})
export class MetricsexplainedComponent {
}
