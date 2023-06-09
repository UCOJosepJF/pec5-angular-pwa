import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Character } from '../models/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character').pipe(
      delay(2000),
      map((response) => {
        return response.results.map((characterData: any) => {
          const character: Character = {
            id: characterData.id,
            name: characterData.name,
            status: characterData.status,
            species: characterData.species,
            type: characterData.type,
            gender: characterData.gender,
            origin: {
              name: characterData.origin.name,
              url: characterData.origin.url,
            },
            location: {
              name: characterData.location.name,
              url: characterData.location.url,
            },
            image: characterData.image,
            episode: characterData.episode,
            url: characterData.url,
            created: characterData.created,
          };
          return character;
        });
      })
    );
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http
      .get<any>(`https://rickandmortyapi.com/api/character/${id}`)
      .pipe(
        map((characterData: any) => {
          const character: Character = {
            id: characterData.id,
            name: characterData.name,
            status: characterData.status,
            species: characterData.species,
            type: characterData.type,
            gender: characterData.gender,
            origin: {
              name: characterData.origin.name,
              url: characterData.origin.url,
            },
            location: {
              name: characterData.location.name,
              url: characterData.location.url,
            },
            image: characterData.image,
            episode: characterData.episode,
            url: characterData.url,
            created: characterData.created,
          };
          return character;
        })
      );
  }
}
