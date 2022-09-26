import { Component, Input } from '@angular/core';
import { CourseModel } from "../../models/course.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  @Input() course!: CourseModel;
}
