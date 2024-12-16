import { Component } from '@angular/core';
import { Character } from '../interfaces/character-interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})
export class MainPageComponent {
  constructor(private DbzService: DBZService) { }

  get characters(): Character[] {
    return [...this.DbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.DbzService.deleteCharacterById( id );
  }

  onNewCharacter(character: Character): void {
    this.DbzService.addCharacter( character );
  }
}
