import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HelloWorldBean,
  WelcomeDataService,
} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message = 'Some welcome message';
  welcomeMessageFrom = '';
  name = '';

  // Activate Route
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage(): void{
    // console.log(this.service.executeHelloWorldBeanService());
    // *It is an observable then we need to subscribe.
    this.service
      .executeHelloWorldBeanService()
      .subscribe((
        response) => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
      );
  }

  getWelcomeMessageWithParameter(): void{
    // console.log(this.service.executeHelloWorldBeanService());
    // *It is an observable then we need to subscribe.
    this.service
      .executeHelloWorldBeanServiceWithPathVariable(this.name)
      .subscribe((
        response) => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
      );
  }


  handleSuccessfulResponse(response: HelloWorldBean): void {
    this.welcomeMessageFrom = response.message;
    // console.log(response.message);
  }
  handleErrorResponse(error: any): void{
    this.welcomeMessageFrom = error.error.message;

  }
}
