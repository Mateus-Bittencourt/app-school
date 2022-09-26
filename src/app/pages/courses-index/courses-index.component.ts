import { Component, OnInit } from '@angular/core';
import { dataset } from "src/app/data/courses";
import { CourseModel } from "../../models/course.model";

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
  styleUrls: ['./courses-index.component.scss']
})
export class CoursesIndexComponent {

  public courses: CourseModel[] = dataset;
}
