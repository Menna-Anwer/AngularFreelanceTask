import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { IOwner } from './../Models/iowner';
import { environment } from 'src/environments/environment';
import { IGetOwnerPayload } from './../Models/i-get-owner-payload';
import { IGetOwnersList, IOwnerValue } from './../Models/i-get-owners-list';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private owners: BehaviorSubject<IOwnerValue[]>;
  // private owners: BehaviorSubject<IGetOwnersList[]>;
  private headerOptions;
  constructor(private HttpClient:HttpClient) { 
    this.owners = new BehaviorSubject<IOwnerValue[]>([]);
    this.headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'accept': 'text/plain'
      })
    }
  }
  addNewOwner(data:IOwnerValue): Observable<IOwnerValue[]>{
    return this.HttpClient.post<IOwnerValue[]>(environment.baseApi , data ,this.headerOptions)
 }
 getOwnersList(): Observable<IOwnerValue[]>{
   return this.HttpClient.get<IOwnerValue[]>(environment.baseApi+`?PageNumber=1&PageSize=10`)
  }
  // getOwnersList(paylaod :IGetOwnerPayload): Observable<IGetOwnersList>{
  //  return this.HttpClient.get<IGetOwnersList>(environment.baseApi+`?PageNumber=${paylaod.PageNumber}&PageSize=${paylaod.PageSize}`)
  // }
//   getOwnersList(): Observable<IGetOwnersList[]>{
//    this.HttpClient.get<IGetOwnersList[]>(environment.baseApi+`?PageNumber=1&PageSize=5`) 
//     .subscribe((value:IGetOwnersList[]) => {
//       this.owners.next(value);
//     });
//     return this.owners;
//  }

}
