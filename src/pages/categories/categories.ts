import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CategoriesProvider} from "../../providers/categories/categories";
import {Observable} from 'rxjs';
import {Category} from "../../interfaces/category";

@Component({
    selector: 'page-list',
    templateUrl: 'categories.html'
})
export class CategoriesPage {

    categories: Observable<Category[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private categoriesProvider: CategoriesProvider) {
    }

    ionViewDidLoad() {
        this.categories = this.categoriesProvider.getAll();
    }
}
