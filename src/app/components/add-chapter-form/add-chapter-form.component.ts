import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-add-chapter-form',
  templateUrl: './add-chapter-form.component.html',
  styleUrls: ['./add-chapter-form.component.css'],
})
export class AddChapterFormComponent implements OnInit {
  addChapterForm: FormGroup;
  coursesList: any[];
  constructor(
    private formBuilder: FormBuilder,
    private adminActionsService: AdminActionsService
  ) {
    this.adminActionsService.getAllCoursesList().subscribe((values) => {
      this.coursesList = values;
    });
  }

  ngOnInit(): void {
    this.addChapterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
      textDescription: [
        '',
        [Validators.required, Validators.pattern(/[^\s]+/)],
      ],
      course: ['', [Validators.required]],
      notionForms: new FormArray([]),
    });
  }

  submit(): void {
    const formData = new FormData();
    formData.append('name', this.addChapterForm.controls.name.value);
    formData.append(
      'text_description',
      this.addChapterForm.controls.textDescription.value
    );
    formData.append('course', this.addChapterForm.controls.course.value);

    this.adminActionsService.createChapter(formData);
  }
  get form(): { [key: string]: AbstractControl } {
    return this.addChapterForm.controls;
  }

  get notionforms(): FormArray{
    return this.form.notionForms as FormArray;
  }

  addNotionForm(): void {
    this.notionforms.push(
      this.formBuilder.group({
        title: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
        textContent: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
      })
    );
  }

  // onFileChange(event) {
  //   if (event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     // just checking if it is an image, ignore if you want
  //     if (!file.type.startsWith('video')) {
  //       this.addChapterForm.get('chapterFile').setErrors({
  //         required: true,
  //       });
  //       // this.addChapterForm.get('chapterFile').setValue(file);
  //     } else {
  //       // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
  //       console.log(file);
  //       this.addChapterForm.patchValue({
  //         ['chapterFile']: file,
  //       });
  //       // need to run CD since file load runs outside of zone
  //     }
  //   }
  // }
}
