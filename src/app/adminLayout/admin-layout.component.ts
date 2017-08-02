import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: './admin-layout.component.html',
})

export class AdminLayoutComponent {
  public name = 'Angular Cli Bootstrap Test App';
  public url = 'https://ninjacodegen.com/';

  public isTogglingSidebar = false;
  public activateAdminRoute: boolean = false;
  public activateAdminSideItem: string = '';

  constructor(private router: Router, private translate: TranslateService) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    this.router.events.subscribe((params) => {
      if (params['url'] && (params['url'] === '/admin' || params['url'].indexOf('/admin') > -1)) {
        this.activateAdminRoute = true;
        this.isTogglingSidebar = true;
        if (params['url'].indexOf('/admin/') > -1) {
          this.activateAdminSideItem = params['url'].split('/admin/')[1];
        } else {
          this.activateAdminSideItem = '';
        }
      } else {
        this.activateAdminRoute = false;
      }
    });
  }
}