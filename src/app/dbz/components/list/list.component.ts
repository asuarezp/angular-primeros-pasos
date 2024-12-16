import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
  {
    name: 'Trunks',
    power: 10
  }]

  onRemoveCharacter( id?: string ): void {
    if( !id ) return;

    this.onDeleteCharacter.emit( id );
  }
}
