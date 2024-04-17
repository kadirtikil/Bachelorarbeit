import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { VertRechComponent } from '../vert-rech/vert-rech.component';

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


  constructor(@Inject(MatDialog) public dialog: MatDialog) { }

  // Dialog für Verteiltes Rechnen
  openVR() {
    event?.preventDefault();
    console.log("Verteiltes Rechnen");
    this.dialog.open(VertRechComponent);
  }
  // Dialog für Nebenläufigkeit
  openConc() {
    event?.preventDefault();
    console.log("Nebenläufigkeit");
  }
  // Dialog für Wartbarkeit und Erweiterbarkeit
  openWE() {
    event?.preventDefault();
    console.log("Wartbarkeit etc.");
  }
  // Dialog für Datenintensiv
  openD() {
    event?.preventDefault();
    console.log("Datenintensiv");
  }
  // Dialog für Testbarkeit
  openTest() {
    event?.preventDefault();
    console.log("Testbarkeit");
  }
  // Dialog für Sicherheit
  openSec() {
    event?.preventDefault();
    console.log("Sicherheit");
  }
  // Dialog für Geringe Latenz
  openLL() {
    event?.preventDefault();
    console.log("Geringe Latenz");
  }
  // Dialog für Fehlertoleranz
  openFault() {
    event?.preventDefault();
    console.log("Fehlertoleranz");
  }
}
