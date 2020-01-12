import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get('courses')
  }
  getById(id: string) {
    return this.http.get('courses/' + id)
  }
  create(data: any) {
    return this.http.post('courses', data)
  }
  update(id: string, data: any) {
    return this.http.put('courses/' + id,
      {
        name: data.name,
        details: data.details
      })
  }
  delete(id: string) {
    return this.http.delete('courses/' + id)
  }
}
