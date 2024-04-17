import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { VertRechComponent } from '../vert-rech/vert-rech.component';
import { ConcurrencyComponent } from '../concurrency/concurrency.component';
import { MaintenanceComponent } from '../maintenance/maintenance.component';
import { DataintensiveComponent } from '../dataintensive/dataintensive.component';
import { TestbarkeitComponent } from '../testbarkeit/testbarkeit.component';
import { SecurityComponent } from '../security/security.component';
import { LatenzComponent } from '../latenz/latenz.component';
import { FehlertoleranzComponent } from '../fehlertoleranz/fehlertoleranz.component';

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
    this.dialog.open(VertRechComponent);
  }
  // Dialog für Nebenläufigkeit
  openConc() {
    event?.preventDefault();
    this.dialog.open(ConcurrencyComponent);
  }
  // Dialog für Wartbarkeit und Erweiterbarkeit
  openWE() {
    event?.preventDefault();
    this.dialog.open(MaintenanceComponent);
  }
  // Dialog für Datenintensiv
  openD() {
    event?.preventDefault();
    this.dialog.open(DataintensiveComponent);
  }
  // Dialog für Testbarkeit
  openTest() {
    event?.preventDefault();
    this.dialog.open(TestbarkeitComponent);
  }
  // Dialog für Sicherheit
  openSec() {
    event?.preventDefault();
    this.dialog.open(SecurityComponent);
  }
  // Dialog für Geringe Latenz
  openLL() {
    event?.preventDefault();
    this.dialog.open(LatenzComponent);
  }
  // Dialog für Fehlertoleranz
  openFault() {
    event?.preventDefault();
    this.dialog.open(FehlertoleranzComponent);
  }
}
