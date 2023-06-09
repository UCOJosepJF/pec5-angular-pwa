import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters-grid',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.css'],
})
export class CharactersGridComponent {
  @Input() character: any;
}
