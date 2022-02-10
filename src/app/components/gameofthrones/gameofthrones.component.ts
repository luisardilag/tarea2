import { Component, OnInit } from '@angular/core';
import { GameofthronesService } from '../../services/gameofthrones.service';


@Component({
  selector: 'app-gameofthrones',
  templateUrl: './gameofthrones.component.html',
  styleUrls: ['./gameofthrones.component.css']
})
export class GameofthronesComponent implements OnInit {

  characters: any[] = [];

  constructor( private gameofthronesService: GameofthronesService ) { }

  ngOnInit(): void {
    this.showCharacters();
  }

  showCharacters() {
    this.gameofthronesService.getCharacters()
      .subscribe((data: any) => {
        this.characters = data;
      });
  }

}
