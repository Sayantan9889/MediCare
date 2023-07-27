import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // set all data in local storage ans token in session storage
  setData(first_name:any, last_name:any, email:any, token:any) {
    window.localStorage.setItem('f_name', first_name);
    window.localStorage.setItem('l_name', last_name);
    window.localStorage.setItem('email', email);
    window.sessionStorage.setItem('token', token);
  }

  // get data from storage
  getData() {
    const savedData = [];

    let data = {
      first_name: window.localStorage.getItem('f_name'),
      last_name: window.localStorage.getItem('l_name'),
      email: window.localStorage.getItem('email')
    }

    savedData.push(data);
    return savedData;
  }

  getToken() {
    return window.sessionStorage.getItem('token');
  }

  destroyToken() {
    return window.sessionStorage.clear();
  }
}
