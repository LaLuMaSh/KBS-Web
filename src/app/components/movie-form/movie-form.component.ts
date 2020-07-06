import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ComplexMovie } from '../../model/Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  public title: string;
  public price: number;
  public from: Date;
  public to: Date;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
  }

  isDisabled(): boolean {
    return !this.title || !this.price || !this.from || !this.to;
  }

  save() {
    const complexMovie = new ComplexMovie();
    complexMovie.from = this.from;
    complexMovie.to = this.to;
    complexMovie.title = this.title;
    complexMovie.price = this.price;
    this.adminService.addMovie(complexMovie).subscribe(value => {
      if (value) {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
