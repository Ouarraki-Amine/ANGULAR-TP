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
  courseDescription: string = "";
  courses: { name: string; description: string }[] = [
    { name: "Angular.js", description: "Un framework JavaScript pour construire des applications web." },
    { name: "React.js", description: "Une bibliothèque JavaScript pour construire des interfaces utilisateur." },
    { name: "Vue.js", description: "Un framework progressif pour construire des interfaces utilisateur." }
  ]; 


  startCourse():void{
    console.log('les cours est bien afficher')
  }
}
