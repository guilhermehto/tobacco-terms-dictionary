import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Category} from "../../interfaces/category";
import {map} from "rxjs/operators";

@Injectable()
export class CategoriesProvider {

    private categoriesCollection: AngularFirestoreCollection<Category>;

    constructor(private afs: AngularFirestore) {
    }

    getAll() {
        this.categoriesCollection = this.afs.collection<Category>('categories');
        return this.categoriesCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Category;
                const id = a.payload.doc.id;
                return {id, ...data};
            }))
        );
    }

}
