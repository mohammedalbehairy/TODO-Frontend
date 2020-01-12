import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses = []
  constructor(
    private coursesService: CoursesService,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.loadCourses();
  }

  delete(id: string) {
    this.coursesService.delete(id).subscribe(
      () => {
        console.log('done');
        this.loadCourses();
        this.toastrService.success('Deleted successfully','success');
      },
      err => {
        console.log(err);
      }
    )
  }


  loadCourses() {
    this.coursesService.getCourses().subscribe(
      (data: []) => {
        console.log(data);

        this.courses = data;
      },
      err => {
        console.log(err);

      });
  }
}
