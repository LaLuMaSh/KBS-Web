import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDto } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient: HttpClient) {
  }

  public getMovies(): Observable<MovieDto[]> {
    return this.httpClient.get<MovieDto[]>('http://localhost:8080/api/movie/get/');
  }
}
