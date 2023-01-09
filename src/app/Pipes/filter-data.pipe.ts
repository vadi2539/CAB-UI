import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
  pure: false
})
export class FilterDataPipe implements PipeTransform {
  transform(items: any[], searchkey: any,args:any): any {
    // console.log("dats comings", arguments,searchkey,items)
    if(items == undefined){
      return null;
    }
    if(items.length == 0){
      return null;
    }
    if(searchkey == null){
      return items;
    }else{
      if(args == undefined){
        return items.filter(item => String(item).toLowerCase().indexOf(String(searchkey).toLowerCase()) !== -1);
      }else{
        return items.filter(item => String(item[args]).toLowerCase().indexOf(String(searchkey).toLowerCase()) !== -1);
      }
    }
  }

}
