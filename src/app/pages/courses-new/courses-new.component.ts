import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dataset } from "src/app/data/courses";
import { CourseModel } from "../../models/course.model";


@Component({
  selector: 'app-courses-new',
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.scss']
})
export class CoursesNewComponent implements OnInit {

  constructor(private router: Router) { }

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });


  public create(): void {
    const course: CourseModel = {
      id: dataset.length + 1,
      name: this.form.value.name,
      description: this.form.value.description,
      students: []
    }
    dataset.push(course);
    this.router.navigate(['/dashboard/cursos']);
  }

  ngOnInit(): void {
  }

}
