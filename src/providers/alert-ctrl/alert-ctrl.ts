import {Injectable} from '@angular/core';
import {AlertController} from "ionic-angular";

@Injectable()
export class AlertCtrlProvider {

    constructor(private alertCtrl: AlertController) {

    }

    show(title: string = 'Título', subTitle: string = 'Subtítulo') {
        const alert = this.alertCtrl.create({
            title,
            subTitle,
            buttons: ['FECHAR']
        });
        alert.present();
    }

}
