import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { VertRechComponent } from '../vert-rech/vert-rech.component';
import { ConcurrencyComponent } from '../concurrency/concurrency.component';
import { MaintenanceComponent } from '../maintenance/maintenance.component';
import { DataintensiveComponent } from '../dataintensive/dataintensive.component';
import { TestbarkeitComponent } from '../testbarkeit/testbarkeit.component';
import { SecurityComponent } from '../security/security.component';
import { LatenzComponent } from '../latenz/latenz.component';
import { FehlertoleranzComponent } from '../fehlertoleranz/fehlertoleranz.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-metricselection',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ],
  templateUrl: './metricselection.component.html',
  styleUrl: './metricselection.component.scss'
})
export class MetricselectionComponent {
  listValues = ["Verteiltes Rechnen",
    "Nebenläufigkeit",
    "Wartbar- und Erweiterbarkeit",
    "Datenintensiv",
    "Sicherheitsanforderungen",
    "Geringe Latenz",
    "Fehlertoleranz",
  ]


  constructor(@Inject(MatDialog) private dialog: MatDialog) { }


  dialogConfig: MatDialogConfig = {
    maxHeight: '90vh',
    maxWidth: '80vh',
};

  // Dialog für Verteiltes Rechnen
  openVR() {
    event?.preventDefault();
    this.dialog.open(VertRechComponent, this.dialogConfig);
  }
  // Dialog für Nebenläufigkeit
  openConc() {
    event?.preventDefault();
    this.dialog.open(ConcurrencyComponent, this.dialogConfig);
  }
  // Dialog für Wartbarkeit und Erweiterbarkeit
  openWE() {
    event?.preventDefault();
    this.dialog.open(MaintenanceComponent, this.dialogConfig);
  }
  // Dialog für Datenintensiv
  openD() {
    event?.preventDefault();
    this.dialog.open(DataintensiveComponent, this.dialogConfig);
  }
  // Dialog für Testbarkeit
  openTest() {
    event?.preventDefault();
    this.dialog.open(TestbarkeitComponent, this.dialogConfig);
  }
  // Dialog für Sicherheit
  openSec() {
    event?.preventDefault();
    this.dialog.open(SecurityComponent, this.dialogConfig);
  }
  // Dialog für Geringe Latenz
  openLL() {
    event?.preventDefault();
    this.dialog.open(LatenzComponent, this.dialogConfig);
  }
  // Dialog für Fehlertoleranz
  openFault() {
    event?.preventDefault();
    this.dialog.open(FehlertoleranzComponent, this.dialogConfig);
  }
}
