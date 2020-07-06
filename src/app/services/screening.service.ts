import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScreeningDto, Screening, ComplexScreeningDto, ReservationDto } from '../model/Model';
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

  public getScreenings(date: Date, title: string): Observable<Screening[]> {
    let suffix = '';
    if (title != null && title !== 'Kein Film' && title !== '') {
      suffix = '&movie=' + title;
    }
    const httpLocalhost8080ApiScreeningGet = 'http://localhost:8080/api/screening/get/?date=';
    return this.httpClient.get<Screening[]>(httpLocalhost8080ApiScreeningGet + this.datePipe.transform(date, 'dd-MM-yyyy') + suffix);
  }

  public getScreening(uuid: string): Observable<ComplexScreeningDto> {
    return this.httpClient.get<ComplexScreeningDto>('http://localhost:8080/api/screening/get/complex/' + uuid);
  }

  public getScreeningForCustomer(uuid: string): Observable<Screening[]> {
    return this.httpClient.get<Screening[]>('http://localhost:8080/api/screening/get/customer/' + uuid);
  }
  public reservatePlace(reservation: ReservationDto): Observable<string> {
    return this.httpClient.post<string>('http://localhost:8080/api/screening/reserve/', reservation);
  }
}
