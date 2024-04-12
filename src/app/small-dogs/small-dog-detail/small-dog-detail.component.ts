import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { ActivatedRoute, Params } from '@angular/router';

import { SmallDog } from '../small-dog.model';
import { SmallService } from '../small-service.service';

@Component({
  selector: 'app-small-dog-detail',
  templateUrl: './small-dog-detail.component.html',
  styleUrl: './small-dog-detail.component.css'
})
export class SmallDogDetailComponent{
  smallDog: SmallDog;
  id: string;

  constructor(private smallService: SmallService,
              private router: Router,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params['id'];
            this.smallDog = this.smallService.getSmallDog(this.id);
          }
        );
  }

  //OnDelete goes here
}
