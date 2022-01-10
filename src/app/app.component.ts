import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { ActorsService } from './actors.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  flops: Movie[];
  actors;

  constructor(
    private movieService: MovieService,
    private actorsService: ActorsService
  ) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((response: Movie[]) => {
      this.flops = response;
    });

    this.actorsService.getActors().subscribe((response) => {
      this.actors = response;
    });
  }
}
