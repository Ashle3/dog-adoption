import { Component, OnInit } from '@angular/core';

import { SmallDog } from './small-dog.model';
import { SmallService } from './small-service.service';

@Component({
  selector: 'app-small-dogs',
  templateUrl: './small-dogs.component.html',
  styleUrl: './small-dogs.component.css'
})
export class SmallDogsComponent implements OnInit{
  selectedSmallDog: SmallDog;

  constructor(private smallService: SmallService){}

  ngOnInit(): void {
    this.smallService.smalldogSelectedEvent.subscribe(
      (smalldog: SmallDog) => {
        this.selectedSmallDog = smalldog;
      }
    )
  }
}
