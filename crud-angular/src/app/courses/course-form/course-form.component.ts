import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  onCancel() {
    throw new Error('Method not implemented.');
  }

  form: FormGroup; //mesma variavel do course-form.component.html

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null], //mesma variavel do course-form.component.html
      category: [null]//mesma variavel do course-form.component.html
    });
  }

  ngOnInit(): void {
  }

}
