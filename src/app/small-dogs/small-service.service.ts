import { EventEmitter, Injectable } from '@angular/core';
import { SmallDog } from './small-dog.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmallService {
  smalldogSelectedEvent = new EventEmitter<SmallDog>();
  smalldogListChangedEvent = new Subject<SmallDog[]>();
  smalldogs: SmallDog[] = [];
  maxContactId: number;


  constructor(private http: HttpClient) { 
              this.maxContactId = this.getMaxId();
  }

  getSmallDogs(): SmallDog[]{
    this.http
      .get('https://ab-dog-adoption-default-rtdb.firebaseio.com/smallDogs.json')
      .subscribe(
        (smallDogs: SmallDog[]) => {
          this.smalldogs = smallDogs;
          this.maxContactId = this.getMaxId(); 
        }
      );

      return this.smalldogs.slice();
  }

  getMaxId(): number {
    let maxId = 0;

    for (let smallDog of this.smalldogs){
      let currentId = +smallDog.id;
      if (currentId > maxId){
        maxId = currentId;
      }
    }

    return maxId;
  }
}
