import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatData',
  pure: false
})
export class FormatDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arr = args.split(",")
    if (arr[0] == "currency") {
      return this.numberWithCommas(value,arr[1])
    }else if (arr[0] == "date") {
      let date = moment(value).format(arr[1])
      return date.toString();
    }else if (arr[0] == "dateminus") {
      let date = moment(value);
      date.subtract(arr[2],'days');
      let date2 = moment(date).format(arr[1]);
      return date2.toString();
    }else if (arr[0] == "dateplus") {
      let date = moment(value);
      date.add(arr[2],'days');
      let date2 = moment(date).format(arr[1]);
      return date2.toString();
    }
    //return null;
  }
  numberWithCommas(x, country) {
    if (country == "india") {

      x = x.toString();
      let lastThree = x.substring(x.length - 3);
      let otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers != '')
        lastThree = ',' + lastThree;
      let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
     // return "Rs"+res;
     return res;
    }else{
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
  }

}
