import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,
  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseName: string = "Angular Avance";
  isDisabled: boolean = true;



  startCourse():void{
    console.log('les cours est bien afficher')
  }
}
