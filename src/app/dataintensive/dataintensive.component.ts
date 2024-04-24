import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-dataintensive',
  standalone: true,
  imports: [MarkdownModule, ],
  templateUrl: './dataintensive.component.html',
  styleUrl: './dataintensive.component.scss'
})
export class DataintensiveComponent {

}
