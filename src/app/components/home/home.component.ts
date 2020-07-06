import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieDto } from '../../model/Model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date = new Date();
  title = 'Kein Film';
  movies: MovieDto[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(value => {
      this.movies = value;
    });
  }
}
