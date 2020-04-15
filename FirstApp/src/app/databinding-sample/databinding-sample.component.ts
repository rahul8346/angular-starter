import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-sample',
  templateUrl: './databinding-sample.component.html',
  styleUrls: ['./databinding-sample.component.css']
})
export class DatabindingSampleComponent implements OnInit {
  serverElements = [];
  newServerName: string = "";
  newServerContent: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
