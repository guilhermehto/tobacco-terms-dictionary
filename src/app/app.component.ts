import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';

import {TermsPage} from '../pages/terms/terms';
import {CategoriesPage} from '../pages/categories/categories';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = TermsPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Termos', component: TermsPage},
            {title: 'Categorias', component: CategoriesPage}
        ];

    }

    initializeApp() {

    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
