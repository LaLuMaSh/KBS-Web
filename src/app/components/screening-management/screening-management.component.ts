import { Component, OnInit } from '@angular/core';
import { CreateScreeningDto, MovieDto } from '../../model/Model';
import { MovieService } from '../../services/movie.service';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screening-management',
  templateUrl: './screening-management.component.html',
  styleUrls: ['./screening-management.component.css']
})
export class ScreeningManagementComponent implements OnInit {
  public movies: MovieDto[];
  public title = '';
  public amount: number;
  public start: Date;
  public times = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  public zeiten: string[];

  constructor(
    private movieService: MovieService,
    private router: Router,
    private adminService: AdminService
  ) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(value => {
      this.movies = value;
    });
  }

  save() {
    const dto = new CreateScreeningDto();
    dto.amount = this.amount;
    dto.start = this.start;
    console.log(this.times);
    dto.times = this.zeiten;
    dto.title = this.title;
    this.adminService.createScreeningsDto(dto).subscribe(value => {
      if (value) {
        console.log(value);
        this.router.navigateByUrl('home');
      }
    });
  }

  isDisabled(): boolean {
    return !this.title || !this.amount || !this.start || !this.zeiten;
  }
}
