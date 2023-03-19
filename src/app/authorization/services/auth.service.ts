import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorageRoleKey = 'roleIsAdmin';

  constructor() { }

  isAuthorized():boolean{
    if (localStorage.getItem(this.localStorageRoleKey) != null)
    {
      return true;
    }

    return false;
  }

  isCurrentUserAdmin():boolean {
    let isAdmin = localStorage.getItem(this.localStorageRoleKey);
    return isAdmin == 'true';
  }

  setRole(isAdmin?: boolean | string):void
  {
    if (isAdmin != undefined && isAdmin != null)
    {
      localStorage.setItem(this.localStorageRoleKey, String(isAdmin));
    }
  }
}
