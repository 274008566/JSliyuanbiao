import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {JiajuPage} from '../jiaju/jiaju'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = JiajuPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = 'BPage';
  tab5Root = 'CPage';

  constructor() {

  }
}
