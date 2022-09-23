import { Component, OnInit } from '@angular/core';
import {HomeService} from "../service/home.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.scss']
})
export class CreateMoviesComponent implements OnInit {
  createForm: FormGroup
  file:any
  id: any;
  isEdit = false
  loading = false
  constructor(private homeService:HomeService, private fb:FormBuilder , private route:ActivatedRoute, private _snackBar: MatSnackBar) {
    this.createForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      category_id: ['' , Validators.required],

    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if(param.id) {
        this.loading = true
        this.id = param.id
        this.homeService.getMovieById(this.id).subscribe((res:any) => {
            this.createForm.patchValue(res.message)
          this.isEdit = true
          this.loading = false

        })
      }
    });

  }
  onSubmit() {
    const formData = new FormData();
    Object.keys(this.createForm.value).forEach((key) => {
      formData.append(key, this.createForm.value[key]);
    });
    formData.append('image', this.file)
    if(this.isEdit){
      this.createForm.value.image = this.file
      this.homeService.updateMovie(this.id , formData).subscribe(res => {
        this._snackBar.open('Movie is updated successfully', 'Success');
      })
    }else{

      this.homeService.createMovies(formData).subscribe(res => {
        this._snackBar.open('Movie is created successfully', 'Success');
      })
    }

  }
  onChange(event:any) {
    console.log(event)
    this.file = event.target.files[0];

  }

  // OnClick of button Upload

}
