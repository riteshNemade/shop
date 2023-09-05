import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebarFlag: boolean= false;
  toggleSubject = new Subject<boolean>();

  toggleSidebar(){
    this.sidebarFlag= !this.sidebarFlag
    this.toggleSubject.next(this.sidebarFlag);
  }
}
