import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService(): Observable<HelloWorldBean> {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    );
    // console.log('Execute Hello World Bean Service ');
  }

  executeHelloWorldBeanServiceWithPathVariable(
    name: string
  ): Observable<HelloWorldBean> {
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`
    );
    // console.log('Execute Hello World Bean Service ');
  }

  /*  createBasicAuthenticationHttpHeader(): string {
    let username = 'in28minutes';
    let password = 'dummy';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString;
  }*/
}
