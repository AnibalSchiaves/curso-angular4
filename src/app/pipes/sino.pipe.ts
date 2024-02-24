import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sino'
})
export class SiNoPipe implements PipeTransform {

    transform(value: boolean, ...args: any[]) {
        return value?'Si':'No';
    }
    
}