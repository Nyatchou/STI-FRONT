import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-course-present',
  templateUrl: './course-present.component.html',
  styleUrls: ['./course-present.component.css']
})
export class CoursePresentComponent implements OnInit {

  chaptersList: any[];
  nameCourse: string;
  courseDescription: string;
  constructor(private adminActionsService: AdminActionsService, private activatedRoute: ActivatedRoute) { 
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminActionsService.getChaptersFromCourses(courseId).subscribe((course) => {
      this.chaptersList = course.chapters;
      this.nameCourse = course.name;
      this.courseDescription = course.text_description;
    });
  }

  ngOnInit(): void {
  }

}
