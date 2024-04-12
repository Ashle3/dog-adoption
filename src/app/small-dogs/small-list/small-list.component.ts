import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SmallDog } from '../small-dog.model';
import { SmallService } from '../small-service.service';

@Component({
  selector: 'app-small-list',
  templateUrl: './small-list.component.html',
  styleUrl: './small-list.component.css'
})
export class SmallListComponent implements OnInit, OnDestroy{
  smallDogs: SmallDog[] = [];
  subscription: Subscription;

  constructor(private smallService: SmallService){}

  ngOnInit() {
    this.smallDogs = this.smallService.getSmallDogs();
    this.subscription = this.smallService.smalldogListChangedEvent.subscribe(
      (smallDogList: SmallDog[]) => {
        this.smallDogs = smallDogList;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
