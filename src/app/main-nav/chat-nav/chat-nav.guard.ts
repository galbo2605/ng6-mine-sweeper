import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SocketIoService} from '../shared/socket-io.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class ChatNavGuard implements CanActivate {
  constructor(private router: Router, private socketIOService: SocketIoService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.socketIOService.socket && this.socketIOService.socket.connected) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
