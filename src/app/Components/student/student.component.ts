import { Component } from '@angular/core';
import { SerService } from 'src/app/ser.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  fileName: string = '';
  base64: string = '';

  form = new FormGroup({
    regno: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    batch: new FormControl('', Validators.required),
    Section: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    file: new FormControl<string | null>(null)
  });

  constructor(public fs: SerService) { }
  get f() {
    return this.form.controls;
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const reader = new FileReader();
      reader.onload = () => {
        this.base64 = reader.result as string;

        this.form.patchValue({
          file: this.base64
        });
      };

      reader.readAsDataURL(file);
    }
  }

  submit() {
    const data = this.form.value;
    this.fs.saveFile(data);
    alert("Student Data Uploaded ✅");
    this.form.reset();
    this.fileName = '';
  }
}
