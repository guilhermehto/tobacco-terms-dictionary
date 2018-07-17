import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {firebaseConfig} from "../credentials";

/* Components */
import {MyApp} from './app.component';
import {TermsPage} from '../pages/terms/terms';
import {CategoriesPage} from '../pages/categories/categories';

/* Providers */
import {TermsProvider} from '../providers/terms/terms';
import {CategoriesProvider} from '../providers/categories/categories';
import {AlertCtrlProvider} from '../providers/alert-ctrl/alert-ctrl';


@NgModule({
    declarations: [
        MyApp,
        TermsPage,
        CategoriesPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TermsPage,
        CategoriesPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AlertCtrlProvider,
        TermsProvider,
        CategoriesProvider,
        AlertCtrlProvider
    ]
})
export class AppModule {
}
