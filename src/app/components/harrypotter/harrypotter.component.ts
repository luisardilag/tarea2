import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../services/harrypotter.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

  characters: any[] = [];

  constructor( private harrypotterService: HarrypotterService ) { }

  ngOnInit(): void {
    this.showCharacters();
  }

  showCharacters() {
    this.harrypotterService.getCharacters()
      .subscribe((data: any) => {
        this.characters = data;

        console.log(data);
      });
  }

}
