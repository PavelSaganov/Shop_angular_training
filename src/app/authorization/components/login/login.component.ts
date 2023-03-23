import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isAdmin = 'false'; // почему как строка?
  isAuthorized = this.isSigned();

  constructor(private authService:AuthService) { }

  isSigned():boolean
  {
    return this.authService.isAuthorized();
  }

  login():void
  {
    console.log(this.isAdmin)
    this.authService.setRole(this.isAdmin);
  }
}
