import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [
    { name: "Angular.js", description: "Un framework JavaScript pour construire des applications web." },
    { name: "React.js", description: "Une bibliothèque JavaScript pour construire des interfaces utilisateur." },
    { name: "Vue.js", description: "Un framework progressif pour construire des interfaces utilisateur." }
  ];

  getCourses() {
    return this.courses;
  }
}
