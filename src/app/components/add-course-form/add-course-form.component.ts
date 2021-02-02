import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent implements OnInit {


  courseAddForm: FormGroup;
  domainsList: any[];
  constructor(private formBuilder: FormBuilder,  private adminActionsService: AdminActionsService) {
    this.adminActionsService.getDomainsList().subscribe((domains) => {
      this.domainsList = domains;
    });
  }

  ngOnInit(): void {
    this.courseAddForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
        textDescription: [''],
        domain: ['', [Validators.required]]
    });
  }

  submit(): void{
    const formData = new FormData();
    formData.append('name', this.courseAddForm.controls.name.value);
    formData.append('domain', this.courseAddForm.controls.domain.value);
    formData.append('textDescription', this.courseAddForm.controls.textDescription.value);

    this.adminActionsService.createCourse(formData);
  }

}
