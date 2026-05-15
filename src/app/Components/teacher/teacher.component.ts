import { Component } from '@angular/core';
import { SerService } from 'src/app/ser.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  files: any[] = [];

  constructor(public fs: SerService) { }
  ngOnInit() {
    this.files = this.fs.getFiles();
  }
  download(s: any) {
    const a = document.createElement('a');
    a.href = s.file;
    a.download = s.batch + s.Section+"_file";
    a.click();
    this.fs.ms="Submitted"
  }
  delete(s:any){
     this.files.splice(s,1);
  }
}
