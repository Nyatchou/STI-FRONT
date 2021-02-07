import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-add-part-chapter-form',
  templateUrl: './add-part-chapter-form.component.html',
  styleUrls: ['./add-part-chapter-form.component.css'],
})
export class AddPartChapterFormComponent implements OnInit {
  partChapterForm: FormGroup;
  courseChoosenId: string;
  coursesList: any[];
  chaptersList: any[];
  constructor(
    private formBuilder: FormBuilder,
    private adminActionsService: AdminActionsService
  ) {
    this.adminActionsService.getAllCoursesList().subscribe((values) => {
      this.coursesList = values;
      this.courseChoosenId = values[1];
      this.adminActionsService
        .getChaptersFromCourses(this.courseChoosenId)
        .subscribe((vals) => {
          this.chaptersList = vals;
        });
    });
  }

  ngOnInit(): void {
    this.partChapterForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
      textContent: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
      video: [''],
      chapter: ['', [Validators.required]],
    });
  }

  submit(): void {
    const formData = new FormData();
    formData.append('name', this.partChapterForm.controls.title.value);
    formData.append(
      'text_content',
      this.partChapterForm.controls.textContent.value
    );
    formData.append('video', this.partChapterForm.controls.video.value);
    formData.append('chapter', this.partChapterForm.controls.chapter.value);

    // this.adminActionsService.createPartChapter(formData);
  }

  onChangeCourse(event) {
    this.courseChoosenId = event.target.value;
    this.adminActionsService
      .getChaptersFromCourses(this.courseChoosenId)
      .subscribe((vals) => {
        this.chaptersList = vals;
      });
  }

  onFileChange(event): void {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      if (!file.type.startsWith('pdf')) {
        this.partChapterForm.get('video').setErrors({
          required: true,
        });
        // this.addChapterForm.get('chapterFile').setValue(file);
      } else {
        // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
        console.log(file);
        this.partChapterForm.patchValue({
          ['video']: file,
        });
        // need to run CD since file load runs outside of zone
      }
    }
  }
}
