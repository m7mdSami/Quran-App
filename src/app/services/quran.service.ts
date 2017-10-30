import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class QuranService{
    private qurans: any;
    private sure: any;
    
    constructor(private _http:Http){ }

    getQuran() {
		this.qurans = 'http://m7mdsami.com/Quran_json/read_json.php';
        return this._http.get(this.qurans)
            .map(res => res.json());
    }
    
    getSure(id:number){
        this.sure = 'http://m7mdsami.com/Quran_json/read_json.php?index='+id;
        return this._http.get(this.sure)
            .map(res => res.json());
    }
    
}