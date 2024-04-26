import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-latenz',
  standalone: true,
  imports: [MarkdownModule, ],
  templateUrl: './latenz.component.html',
  styleUrl: './latenz.component.scss'
})
export class LatenzComponent {

}
