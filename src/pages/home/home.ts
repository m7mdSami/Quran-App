import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import {QuranService} from '../../app/services/quran.service';
import {Quran} from '../../app/interface/quran';
import {SurePage} from '../sure/sure';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qurans: Quran[];
  listFilter: string = '';

  constructor(public nav: NavController,
              private _quranService:QuranService,
              private loadingController:LoadingController) {
        
  }

  ngOnInit(): void {
        let loader = this.loadingController.create({
            content:"جارى التحميل"
        });
        loader.present().then(() =>{
            this._quranService.getQuran().subscribe(qurans => {
                this.qurans = qurans;
                loader.dismiss();
            });
        });
    }

    gotosure(sure){
        this.nav.push(SurePage , { sure: sure});
    }

}
