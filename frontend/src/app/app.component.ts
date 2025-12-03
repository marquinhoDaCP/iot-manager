import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private _router: Router
  ) { }

  public get showLateralMenu(): boolean {
    const currentRouter = this._router.url;
    if (
      currentRouter.includes('login') || currentRouter.includes('signup')
    ) return false;

    return true;
  }

}
