import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  onSubmit() {

    this.submitted = true;
    if (this.createForm.invalid) return;
    this.coursesService.create(this.createForm.value).subscribe(
      () => {
        console.log('created');
        this.toastrService.success('created successfully', 'success');
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
