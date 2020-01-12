import { ICourse } from './../../interfaces/ICourse';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

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
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.coursesService.getById(this.id).subscribe(
      (data: ICourse) => {
        this.course = data;
        console.log(data);

      },
      err => {
        console.log(err);
      }
    )
  }

}
