import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-add-comp',
  templateUrl: './ng-for-add-comp.component.html',
  styleUrls: ['./ng-for-add-comp.component.css']
})
export class NgForAddCompComponent implements OnInit {

  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
