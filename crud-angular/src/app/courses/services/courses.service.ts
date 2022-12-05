import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first()
      );
  }

  loadById(id: string){
    this.httpClient.get<Course>('${this.AP}/${id}');
  }

  save(course: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, course);
  }
}
