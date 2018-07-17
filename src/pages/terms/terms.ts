import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Observable} from 'rxjs';
import {TermsProvider} from "../../providers/terms/terms";
import {Term} from "../../interfaces/term";

@Component({
    selector: 'page-home',
    templateUrl: 'terms.html'
})
export class TermsPage {

    terms: Observable<Term[]>;
    search: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private termsProvider: TermsProvider) {
    }

    onSearchInput(e) {
        console.log('model: ', this.search);
        console.log('onSearch: ', e);
    }

    ionViewDidLoad() {
        this.terms = this.termsProvider.getAll();
    }

}
