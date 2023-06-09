import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/characters.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css'],
})
export class CharactersDetailComponent implements OnInit {
  character: Character;
  showAllDetailsFlag: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
    const identifier = this.route.snapshot.paramMap.get('id') as string;

    this.characterService
      .getCharacterById(identifier)
      .subscribe((character) => {
        if (!character) {
          return this.router.navigateByUrl('/');
        }
        this.character = character;
      });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  toggleDetails(): void {
    this.showAllDetailsFlag = !this.showAllDetailsFlag;
  }
}
