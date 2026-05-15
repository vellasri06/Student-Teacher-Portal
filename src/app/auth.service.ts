import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  login(data: any) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let found = users.find((u: any) =>
      u.email === data.email && u.password === data.password
    );
    if (found) {
      localStorage.setItem('isLogin', 'true');
      return true;
    }
    return false;
  }
  register(data: any) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    let exists = users.find((u: any) => u.email === data.email);

    if (exists) {
      alert("User already exists");
      return;
    }

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  }
  isLoggedIn() {
    return localStorage.getItem('isLogin') === 'true';
  }

  logout() {
    localStorage.removeItem('isLogin');
  }
}
