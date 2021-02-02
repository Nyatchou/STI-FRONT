import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-add-course-section-form',
  templateUrl: './add-course-section-form.component.html',
  styleUrls: ['./add-course-section-form.component.css'],
})
export class AddCourseSectionFormComponent implements OnInit {

  courseSectionForm: FormGroup;
  hasSectionParent: boolean;
  constructor(private formBuilder: FormBuilder, private adminActionsService: AdminActionsService) {}

  ngOnInit(): void {
    this.courseSectionForm = this.formBuilder.group({
      name: ['',  [Validators.required, Validators.pattern(/[^\s]+/)]],
      textContent: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
      sectionParent: ['', [Validators.required]],
      course: ['', [Validators.required]]
    });
    this.hasSectionParent = this.courseSectionForm.controls.sectionParent.value !== '';
  }

  submit():void {
    const formData = new FormData();
    formData.append('name', this.courseSectionForm.controls.name.value);   
    formData.append('text_content', this.courseSectionForm.controls.textContent.value);
    formData.append('section_parent', this.courseSectionForm.controls.sectionParent.value);
    formData.append('course', this.courseSectionForm.controls.course.value);

    this.adminActionsService.createSectionCourse(formData);
  }
}
