import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: '<h2>{{ getTitle() }}</h2>',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  title = "My List of Students";

  getTitle() {
    return this.title;
  }
}
