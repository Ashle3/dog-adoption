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
  smallDogs: SmallDog[] = [];
  maxContactId: number;


  constructor(private http: HttpClient) { 
              this.maxContactId = this.getMaxId();
  }

  getSmallDogs(): SmallDog[]{
    this.http
      .get('https://ab-dog-adoption-default-rtdb.firebaseio.com/smallDogs.json')
      .subscribe(
        (smalldogs: SmallDog[]) => {
          this.smallDogs = smalldogs;
          this.maxContactId = this.getMaxId();
          this.smallDogs.sort((a, b) => { 
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB){
              return -1;
            }
            if (nameA > nameB){
              return 1;
            }

            return 0;
          });
          let smallDogsListClone = this.smallDogs.slice();
          this.smalldogListChangedEvent.next(smallDogsListClone);
        }
      );

      return this.smallDogs.slice();
  }

  getMaxId(): number {
    let maxId = 0;

    for (let smallDog of this.smallDogs){
      let currentId = +smallDog.id;
      if (currentId > maxId){
        maxId = currentId;
      }
    }

    return maxId;
  }
}
