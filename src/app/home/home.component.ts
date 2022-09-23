import { Component, OnInit } from '@angular/core';
import {HomeService} from "./service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = []
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getCategories().subscribe((res:any) => {
      this.categories = res.message
      console.log(res)
    })


  }

}
