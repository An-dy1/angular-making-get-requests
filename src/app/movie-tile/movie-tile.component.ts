import { Component, Input, EventEmitter } from '@angular/core';
import { Movie } from '../Movie'


@Component({
  selector: 'my-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: [ './movie-tile.component.css' ]
})
export class MovieTileComponent  {
  @Input() movie: Movie;
  selected = false;

  ngOnInit() {
  }

  getClasses() {
    if(this.selected) {
      return "btn btn-success btn-sm text-dark"
    } else if(this.movie.onSale) {
      return "btn btn-success btn-sm text-danger";
    } else {
      return "btn btn-success btn-sm"
    }
  }

  onClick() {
    this.selected = true;
  }

}