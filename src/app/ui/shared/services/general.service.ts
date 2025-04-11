import { Injectable, inject } from '@angular/core';
import { SwalMessageService } from './swal-message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/libs/auth/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private swalService = inject(SwalMessageService);
  private routerService = inject(Router);
  private activatedRouteService = inject(ActivatedRoute);
  public currentUser?: User;

  get swal() {
    return this.swalService;
  }

  get router() {
    return this.routerService;
  }

  get activatedRoute() {
    return this.activatedRouteService;
  }

  set setCurrentUser(currentUser: User) {
    this.currentUser = currentUser;
  }
}
