import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScreeningDto, Model, ComplexScreeningDto } from '../model/Model';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {

  constructor(
    private httpClient: HttpClient,
    private datePipe: DatePipe) {
  }

  public getScreenings(date: Date, title: string): Observable<Model[]> {
    let suffix = '';
    if (title != null && title !== 'Kein Film' && title !== '') {
      suffix = '&movie=' + title;
    }
    const httpLocalhost8080ApiScreeningGet = 'http://localhost:8080/api/screening/get/?date=';
    return this.httpClient.get<Model[]>(httpLocalhost8080ApiScreeningGet + this.datePipe.transform(date, 'dd-MM-yyyy') + suffix);
  }

  public getScreening(uuid: string): Observable<ComplexScreeningDto> {
    return this.httpClient.get<ComplexScreeningDto>('http://localhost:8080/api/screening/get/complex/' + uuid);
  }
}
