import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  model: User = new User();
  passRetype: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  saveUser() {
    // Todo: Compare both password

    // Save the model
    this.data.addUser(this.model);
    console.log(this.data.getAllUsers());

    // Clear the form
    this.model = new User();
    this.passRetype = '';
  }

}
