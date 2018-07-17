import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Observable} from 'rxjs';
import {TermsProvider} from "../../providers/terms/terms";
import {Term} from "../../interfaces/term";
import {AlertCtrlProvider} from "../../providers/alert-ctrl/alert-ctrl";

@Component({
    selector: 'page-home',
    templateUrl: 'terms.html'
})
export class TermsPage {

    terms$: Observable<Term[]>;
    terms: Term[];
    search: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private termsProvider: TermsProvider, private alertCtrlProvider: AlertCtrlProvider) {
    }

    async onSearchInput(e) {
        await this.load();
        this.terms = this.terms.filter(el => el.term.includes(this.search));
        if (this.terms.length == 0) this.alertCtrlProvider.show('Aviso', 'Nenhum termo encontrado.');
    }

    async load() {
        return new Promise((resolve, reject) => {
            this.terms$ = this.termsProvider.getAll();
            this.terms$.subscribe((arr_terms: Term[]) => {
                this.terms = arr_terms;
                resolve();
            });
        });
    }

    async ionViewDidLoad() {
        await this.load();
    }

}
