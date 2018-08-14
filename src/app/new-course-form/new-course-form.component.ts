import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }
}

// use FormArray to work with an array of Form Controls

// instead of initializing a form like below can just use form builder
// form = new FormGroup({
//   name: new FormControl('', Validators.required),
//   contact: new FormGroup({
//     email: new FormControl(),
//     phone: new FormControl()
//   }),
//   topics: new FormArray([])
// });