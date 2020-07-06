import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplexMovie, CreateScreeningDto, CustomerDto, MovieDto } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpClient: HttpClient) {
  }

  public addMovie(movie: ComplexMovie): Observable<MovieDto> {
    return this.httpClient.post<MovieDto>('http://localhost:8080/api/admin/addMovie', movie);
  }
  public createScreeningsDto(createScreeningDto: CreateScreeningDto): Observable<string> {
    return this.httpClient.post<string>('http://localhost:8080/api/admin/createScreenings', createScreeningDto);
  }
}
