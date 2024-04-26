import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-fehlertoleranz',
  standalone: true,
  imports: [MarkdownModule, ],
  templateUrl: './fehlertoleranz.component.html',
  styleUrl: './fehlertoleranz.component.scss'
})
export class FehlertoleranzComponent {

}
