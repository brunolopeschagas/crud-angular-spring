import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  readonly displayedColumns = ['id', 'name', 'category', 'actions'];

  @Input() courses: Course[] = [];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAdd() {
    // this.router.navigate(['courses/new']);
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

}
