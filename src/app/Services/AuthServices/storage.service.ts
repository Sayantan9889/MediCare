import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // set all data in local storage ans token in session storage
  setData(first_name:any, last_name:any, email:any, token:any, img:string) {
    window.localStorage.setItem('f_name', first_name);
    window.localStorage.setItem('l_name', last_name);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('img', img);
    window.sessionStorage.setItem('token', token);
  }

  // get data from storage
  getData() {
    const savedData = [];

    let data = {
      first_name: window.localStorage.getItem('f_name'),
      last_name: window.localStorage.getItem('l_name'),
      email: window.localStorage.getItem('email'),
      proImg: window.localStorage.getItem('img')
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
