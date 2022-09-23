import { Component, OnInit } from '@angular/core';
import {HomeService} from "../service/home.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  id: any;
  movies:any;
  loading = false;
  constructor(private homeService:HomeService , private route:ActivatedRoute) {

    this.route.params.subscribe(param => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.homeService.getMovies(this.id).subscribe((res:any) => {
      this.movies = res.message
      this.loading = false;

    })
  }
  deleteMovie(id: any, index: any){
    this.homeService.deleteMovie(id).subscribe(res => {
      console.log(res)
      this.movies.splice(index, 1);
    })
  }
}
