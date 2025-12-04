import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss']
})
export class LateralMenuComponent implements OnInit {
  @ViewChildren('menuItems') menuItems!: QueryList<ElementRef<HTMLLIElement>>;
  @ViewChild('activeTab') activeTab!: ElementRef<HTMLDivElement>;

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this._router.events.subscribe((event) => this.routeChangeEvent(event));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const path = event instanceof NavigationEnd ? event.url.replace("/", "") : this._router.url.replace("/", "");
    const activeMenuItem = this.menuItems.toArray().find(item => item.nativeElement.id === `router_${path}`);
    if (!activeMenuItem) return;
    const { offsetTop, offsetHeight, offsetWidth } = activeMenuItem.nativeElement;

    const newHeight = offsetHeight * 2;
    const newWidth = offsetWidth * 0.6;
    const top = offsetTop - (newHeight - offsetHeight) / 2;

    this.activeTab.nativeElement.style.height = `${newHeight}px`;
    this.activeTab.nativeElement.style.width = `${newWidth}px`;
    this.activeTab.nativeElement.style.top = `${top}px`;
  }

  routeChangeEvent(event: any) {
    if (event instanceof NavigationEnd) {
      this.onResize(event);
    }
  }

  navigateTo(path: string) {
    this._router.navigate([path]);
  }
}
