import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-add-domain-form',
  templateUrl: './add-domain-form.component.html',
  styleUrls: ['./add-domain-form.component.css'],
})
export class AddDomainFormComponent implements OnInit {
  domainForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private adminActionsService: AdminActionsService
  ) {}

  ngOnInit(): void {
    this.domainForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/[^\s]+/)]],
      image: ['', [Validators.required]],
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      if (!file.type.startsWith('image')) {
        this.domainForm.get('image').setErrors({
          required: true,
        });
        this.cd.markForCheck();
        this.domainForm.get('image').setValue(file);
      } else {
        // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
        console.log(file);
        this.domainForm.patchValue({
          ['image']: file,
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      }
    }
  }
  submit(): void {
    const formData = new FormData();
    formData.append('name', this.domainForm.get('name').value);
    formData.append('image', this.domainForm.get('image').value);
    this.adminActionsService.createDomain(formData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
