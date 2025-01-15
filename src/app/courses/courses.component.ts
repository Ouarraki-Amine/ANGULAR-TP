import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  standalone: false,
  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseName: string = "Angular Avance";
  isDisabled: boolean = true;
  courseDescription: string = "";
  courses: { name: string; description: string }[] = []; 

  constructor(private courseService: CourseService) {}

  startCourse():void{
    console.log('les cours est bien afficher')
  }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}
