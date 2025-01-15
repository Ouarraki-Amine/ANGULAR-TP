import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-item',
  standalone: false,
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {

  @Input() course: { name: string; description: string } | undefined;
}
