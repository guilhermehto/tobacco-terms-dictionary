import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Term} from "../../interfaces/term";
import {map} from "rxjs/operators";

@Injectable()
export class TermsProvider {

    private termsCollection: AngularFirestoreCollection<Term>;

    constructor(private afs: AngularFirestore) {
    }

    getAll() {
        this.termsCollection = this.afs.collection<Term>('terms');
        return this.termsCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Term;
                const id = a.payload.doc.id;
                return {id, ...data};
            }))
        );
    }

}
