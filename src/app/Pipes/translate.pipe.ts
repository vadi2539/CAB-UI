import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';
import { GlobalService } from '../global.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private global: GlobalService) {}
  transform(key: any): any {
    var str = String(key).split(":")
    if(str.length > 1){
      if(String(str[1]).toLowerCase() == "array"){
        var arr = String(str[0]).split("|")
        return this.global.pageContent[arr[0]][arr[1]][arr[2]]
      }else if(String(str[1]).toLowerCase() == "object"){
        var arr = String(str[0]).split("|")
        return this.global.pageContent[arr[0]][arr[1]]
      }
    }else{
      if(this.global.pageContent[key] != undefined){
        return this.global.pageContent[key] || key;
      }else{
        return "";
      }
      
    }
    
  }

}
