import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metricselection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metricselection.component.html',
  styleUrl: './metricselection.component.scss'
})
export class MetricselectionComponent {
  listValues = ["Verteiltes Rechnen",
    "Nebenläufigkeit",
    "Wartbar- und Erweiterbarkeit",
    "Datenintensiv",
    "Testbarkeit",
    "Sicherheitsanforderungen",
    "Geringe Latenz",
    "Fehlertoleranz",
  ]
}
