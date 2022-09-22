import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        {
          next: (result) => { console.log(result) },
          error: (erro) => { this.onError() }
        }
      );
  }

  private onError() {
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000 })
  }

  onCancel() {
    throw new Error('Method not implemented.');
  }

  form: FormGroup; //mesma variavel do course-form.component.html

  constructor(private formBuilder: FormBuilder, private service: CoursesService, private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null], //mesma variavel do course-form.component.html
      category: [null]//mesma variavel do course-form.component.html
    });
  }

  ngOnInit(): void {
  }

}
