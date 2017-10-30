
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {QuranService} from '../../app/services/quran.service';
import {Quran} from '../../app/interface/quran';

@Component({
  templateUrl: 'sure.html',
})
export class SurePage {
  sure: Quran;

  constructor(  private nav: NavController ,
                private params: NavParams ,
                private _quranService:QuranService) {
    this.sure = params.data.sure;
  }
}