import { ICourse } from './../../interfaces/ICourse';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id = '';
  public course: ICourse;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.coursesService.getById(this.id).subscribe(
      (data: ICourse) => {
        this.course = data;
      },
      err => {
        console.log(err);
        if (err.status === 400){
          this.toastrService.error(err.error.message, 'error');
          this.router.navigate(['/courses']);
        }
      }
    )
  }

}
