import { Pipe, PipeTransform } from '@angular/core';
import { GlobalService } from '../global.service';

@Pipe({
  name: 'menu',
  pure: false
})
export class MenuPipe implements PipeTransform {
  constructor(private global:GlobalService){}
  transform(key: any): any {
    var str = String(key).split(":")
    if(str.length > 1){
      if(String(str[1]).toLowerCase() == "array"){
        var arr = String(str[0]).split("|")
        return this.global.menuContent[arr[0]][arr[1]]
      }
    }else{
      return this.global.menuContent[key] || key;
    }
  }

}
