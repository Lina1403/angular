import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
