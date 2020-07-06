import { Component, Input, OnInit } from '@angular/core';
import { ScreeningService } from '../../services/screening.service';
import { Model } from '../../model/Model';

@Component({
  selector: 'app-screening-list',
  templateUrl: './screening-list.component.html',
  styleUrls: ['./screening-list.component.css']
})
export class ScreeningListComponent implements OnInit {
  private dateValue: Date;
  private titleValue: string;
  public screenings: Model[];

  @Input()
  set date(date: Date) {
    this.dateValue = date;
    this.reload(this.dateValue, this.titleValue);
  }

  get date(): Date {
    return this.dateValue;
  }

  @Input()
  set title(title: string) {
    this.titleValue = title;
    this.reload(this.dateValue, this.titleValue);
  }

  get title(): string {
    return this.titleValue;
  }

  constructor(private screeningService: ScreeningService) {
  }

  ngOnInit() {
    this.reload(this.date, this.title);
  }

  public reload(date: Date, title: string) {
    this.screeningService.getScreenings(date, title).subscribe(value => {
      this.screenings = value;
    });
  }
}
