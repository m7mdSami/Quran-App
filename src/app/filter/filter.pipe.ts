import {  PipeTransform, Pipe } from '@angular/core';
import {Quran} from '../interface/quran';

@Pipe({
    name: 'QuranFilter'
})
export class QuranFilterPipe implements PipeTransform {

    transform(value: Quran[], filter: string): Quran[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((quran: Quran) =>
            quran.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}