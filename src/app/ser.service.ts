import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SerService {
  constructor(private http: HttpClient) { }
  files:any[]=[];
  ms='';
  students: any[] = [];
  loadData() {
    const data = localStorage.getItem('student');
    if (data) {
      this.students = JSON.parse(data);
    } else {
      this.http.get('assets/data.json').subscribe((res: any) => {
        this.students = res;
        localStorage.setItem('student', JSON.stringify(this.students))
      })
    }
  }
  savedata() {
    localStorage.setItem('student', JSON.stringify(this.students));
  }
  delete(index: number) {
    this.students.splice(index, 1);
    this.savedata();
  }
  edit(index: number, data: any) {
    this.students[index] = data;
    this.savedata();
  }
  saveFile(fileData: any) {
   this.files = JSON.parse(localStorage.getItem('files') || '[]');
    this.files.push(fileData);
    localStorage.setItem('files', JSON.stringify(this.files));
  }
  getFiles() {
    return JSON.parse(localStorage.getItem('files') || '[]');
  }
  deletefile(i:number){
    this.files.splice(i,1);
    localStorage.setItem('files', JSON.stringify(this.files));
  }
}
