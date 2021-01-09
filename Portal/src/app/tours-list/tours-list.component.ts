import { CommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../Services/recommendation.service';
import { Tours } from './tours.model';
import { Router } from '@angular/router';

@Component({
  selector: 'tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getToursList();
  }

  getToursList() {
  let recommService = new RecommendationService();
  let preferredLocation = "New York";
  let preferredBudget = 1000;
  let preferredVacation = "Night Life";
  let preferredActivity = "Club";

  let destinations = recommService.getPackages(preferredLocation, preferredBudget, preferredVacation, preferredActivity);
  return destinations;
  }

  goToProductDetails(id: any) {
    this.router.navigate(['/detail', id]);
  }

}
