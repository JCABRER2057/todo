import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) : boolean{
    // console.log(this.username)
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
