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

  // selected um zu markieren ob ein button geklickt wurde
  selected: boolean = false;

  // Anzahl buttons um dann den geklickten button zu markieren
  buttonState: boolean[] = [];
  constructor() {
    const buttonamount = this.listValues.length;

    for(let i = 0; i < buttonamount; i++) {
      this.buttonState.push(false);
    }
  }


  toggleSelected(index: number) {
    event?.preventDefault();
    this.buttonState[index] = !this.buttonState[index];
    console.log(this.buttonState);
  }
}
