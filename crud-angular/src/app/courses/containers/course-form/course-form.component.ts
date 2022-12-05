import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['',], //mesma variavel do course-form.component.html
    category: ['']//mesma variavel do course-form.component.html
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      name: course.name,
      category: course.category
    })
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        {
          next: (result) => { this.onSuccess() },
          error: (erro) => { this.onError() }
        }
      );
  }

  private onSuccess() {
    this._snackBar.open('Curso salvo', '', { duration: 5000 });
    this.location.back();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000 });
  }

  onCancel() {
    this.location.back();
  }

}
