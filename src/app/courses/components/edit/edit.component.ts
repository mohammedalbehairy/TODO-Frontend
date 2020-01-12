import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from './../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = '';
  course: any;
  createForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      details: ['', Validators.required]
    });

    this.coursesService.getById(this.id).subscribe(
      (data: any) => {
        this.course = data;
        this.loadValuesInForm();
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

  loadValuesInForm() {
    this.createForm.get('name').setValue(this.course.name);
    this.createForm.get('details').setValue(this.course.details);
  }

  onSubmit() {
    if (this.createForm.invalid) return;
    this.coursesService.update(this.id, this.createForm.value).subscribe(
      () => {
        console.log('updated successfuly updated');
        this.toastrService.success('updated successfully','success');
        this.router.navigate(['/courses']);
      },
      err => {
        this.toastrService.error(err.error.message, 'error');
      }
    )
  }

  get name() {
    return this.createForm.get('name');
  }

  get details() {
    return this.createForm.get('details');
  }

}