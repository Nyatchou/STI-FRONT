import { Component, OnInit, Input } from '@angular/core';
import { AdminActionsService } from 'src/app/services/admin-actions.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-courses-present-page',
  templateUrl: './courses-present-page.component.html',
  styleUrls: ['./courses-present-page.component.css']
})
export class CoursesPresentPageComponent implements OnInit {

  domainId: string;
  // coursesList: any[];
  coursesList: any[];
  imageDomainUrl: string;
  domainName: string;
  constructor(private adminActionsService: AdminActionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.adminActionsService.getCoursesListFromDomain(this.domainId).pipe(map((courses: any[]) => {
    //   const coursesL = [];
    //   courses.forEach((course) => {
    //     const c2 = course;
    //     c2.subsections = c2.sections_courses;
    //     delete c2.sections_courses;
    //     coursesL.push(c2);
    //   }
    // )
    // return coursesL;
    // })).subscribe((courses) => {
    //   this.coursesList = courses;
    // });
    this.domainId = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminActionsService.getDomainExtend(this.domainId).subscribe( (domain) => {
      this.coursesList = domain.courses;
      this.imageDomainUrl = domain.image;
      this.domainName = domain.name;
      console.log(this.coursesList);
    });

  }

}
