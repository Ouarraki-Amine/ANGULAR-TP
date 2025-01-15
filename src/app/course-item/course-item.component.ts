import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  standalone: false,
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {

  @Input() course: { name: string; description: string } | undefined;
  @Output() courseSelected = new EventEmitter<string>();

  onSelectCourse() {
    if (this.course) {
      this.courseSelected.emit(this.course.name);
    }
  }
}
