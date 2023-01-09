import { retry, catchError } from 'rxjs/operators';
import { GlobalService } from 'src/app/global.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabserviceService {

  constructor(private http:HttpClient,private global:GlobalService) { }

  public getPageLOVs(){
    debugger;
    const headers = new HttpHeaders().set('X-CSCAPI-KEY', 'U3lmMGl5SE90S0FUSG5VNDk4dkpWcHFtNUtKZEptcU5PT2pyUTExWA==');
    return this.http.get("https://api.countrystatecity.in/v1/countries/IN/states/TN/cities", { headers: headers });

   }
   public changepassword(passwordform){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.global+this.global.changepassword,passwordform,{headers:headers});
  
  }

}
