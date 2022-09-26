import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseModel } from './../../models/course.model';
import { dataset } from './../../data/courses';

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
  styleUrls: ['./courses-show.component.scss']
})
export class CoursesShowComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public id: number = this.route.snapshot.params.id;
  public course!: CourseModel;

  ngOnInit(): void {
    this.course = dataset.filter((course) => course.id == this.id)[0];
    // console.log(dataset.find((course) => course.id == this.id))
  }

}
