import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/characters.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  animations: [
    trigger('listAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', animate('1000ms ease-in')),
    ]),
  ],
})
export class CharactersListComponent {
  characters: Character[] = [];
  viewMode: 'list' | 'cards' = 'list';

  lickedRows = new Set<any>();
  isLoading: boolean = true;

  constructor(
    private characterService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((characters) => {
      this.characters = characters;
      this.isLoading = false;
    });
  }

  goToDetail(id: string) {
    this.router.navigate(['/character', id]);
  }
}
